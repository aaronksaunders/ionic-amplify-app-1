// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Todo } = initSchema(schema);

export {
  Project,
  Todo
};