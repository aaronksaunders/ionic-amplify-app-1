//
// datastoreService - a composable for managing the interaction
// with datastore
//
// REFERENCE
// @see https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api
//
import { computed, onMounted, ref } from "vue";

// AWS
// amplify pull --sandboxId 7f375e61-adfc-4270-aa8e-cab6d3c86c33
// SCHEMA
// https://sandbox.amplifyapp.com/schema-design/7f375e61-adfc-4270-aa8e-cab6d3c86c33
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

import { DataStore } from "aws-amplify";
import { Project, Todo } from "./models";

const projects = ref<any>([]);
const currentProject = ref<string | null>(null);
const error = ref<any>(null);
const loading = ref<boolean>(false);

export default () => {
  const getProjects = async () => {
    loading.value = true;
    try {
      const r = await DataStore.query(Project);
      loading.value = false;
      return r;
    } catch (e) {
      error.value = e;
      loading.value = false;
    }
  };

  /**
   *
   * @param projectId
   */
  const getProjectTodos = async (projectId: string | null) => {
    if (!projectId) return [];
    loading.value = true;
    try {
      const r = await DataStore.query(Todo, (c) =>
        c.projectID("eq", projectId)
      );
      loading.value = false;
      return r;
    } catch (e) {
      error.value = e;
      loading.value = false;
    }
  };

  onMounted(async () => {
    await DataStore.start();
    projects.value = await getProjects();
    loading.value = false;
  });

  return {
    // functions
    getProjects,
    setCurrentProject: (value: string) => (currentProject.value = value),
    // properties
    projects,
    projectTodos: computed(async () => getProjectTodos(currentProject.value)),
    error,
    loading,
  };
};
