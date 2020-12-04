<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>USERS COLLECTION</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="loading">
        <ion-loading :is-open="loading === true" />
      </div>
      <div v-if="error">
        <p>error.message</p>
      </div>
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content :pulling-icon="chevronDownCircleOutline">
        </ion-refresher-content>
      </ion-refresher>
      <ion-list>
        <!-- <UserListItem v-for="user in users" :key="user?.id" :user="user" /> -->
        <p>{{ projects }}</p>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent,
  IonLoading
} from "@ionic/vue";
import { chevronDownCircleOutline } from "ionicons/icons";

import UserListItem from "@/components/UserListItem.vue";
import { defineComponent } from "vue";
import datatore from "../datastore-service";

export default defineComponent({
  name: "Home",
  setup() {
    const { loading, error, getProjects, projects } = datatore();

    const doRefresh = async (event: CustomEvent) => {
      await getProjects();
      (event?.target as any)?.complete();
    };

    return {
      loading,
      error,
      projects,
      doRefresh,
      chevronDownCircleOutline
    };
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    // UserListItem,
    IonRefresher,
    IonRefresherContent,
    IonLoading
  }
});
</script>