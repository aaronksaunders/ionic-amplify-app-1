<template>
  <ion-item
    v-if="user"
    :routerLink="'/user/' + user.id"
    :detail="true"
  >
    <ion-label class="ion-text-wrap">
      <h2>{{ user.firstName }} {{ user.lastName }}</h2>
      <h3>
        {{ user.street1 }} {{ user.city }}, {{ user.state }}
        {{ user.zip }}
      </h3>
      <h3>{{ user.email }}</h3>
      <h3>{{ user.phone }}</h3>
      <h3>{{ user.id }}</h3>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserListItem",
  components: {
    IonItem,
    IonLabel
  },
  props: {
    user: Object
  },
});
</script>

<style scoped>
</style>