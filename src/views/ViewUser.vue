<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="user">
      <ion-item>
        <ion-label class="ion-text-wrap">
          <h2>{{ user.firstName }} {{ user.lastName }}</h2>
          <h3>To: <ion-note>Me</ion-note></h3>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar
} from "@ionic/vue";
import { defineComponent, watchEffect, ref } from "vue";
// import firebaseService from "../firebase-service";

export default defineComponent({
  name: "ViewUser",
  props: ["id"],
  setup() {
    const route = useRoute();
    const user = ref<any>(null);
    // const { loadUserById } = firebaseService();

    watchEffect(async () => {
      // user.value = await loadUserById(route?.params?.id as string);
    });

    return {
      user
    };
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar
  }
});
</script>

<style scoped>
</style>