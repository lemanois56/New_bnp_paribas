<template>
  <!-- Page Header -->
  <PageHeader :propData="dataToPass" />

  <!-- Modal de compte bloqué (statique et sans interaction bloquante) -->
  <div
      class="modal static-modal d-block"
      id="blockedAccountModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="blockedAccountModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="blockedAccountModalLabel">Compte Bloqué</h5>
        </div>
        <div class="modal-body">
          <p>
            Votre compte est actuellement bloqué. Pour plus d'informations,
            veuillez contacter le support client.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="contactSupport">
            Contacter le Support
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Message de notification (optionnel) -->
  <div v-if="showNotification" class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
    <strong>Attention!</strong> Votre compte nécessite une attention particulière. Contactez le support client.
  </div>

  <!-- Autres éléments de la page -->
  <!--  <div class="row mt-5">-->
  <!--    <div class="col-md-12">-->
  <!--      <h4 class="text-center">Page d'Information</h4>-->
  <!--      <p class="text-center">-->
  <!--        Veuillez vérifier l'état de votre compte avant de continuer.-->
  <!--      </p>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import { ref } from 'vue';
import auth from '@/middleware/auth';

export default {
  setup() {
    definePageMeta({
      middleware: [auth],
    });

    // Données pour le composant PageHeader
    const dataToPass = {
      current: "Compte Bloqué",
      list: ["Virements", "Gestion des Bénéficiaires"]
    };

    // Gestion de la notification
    const showNotification = ref(true);

    // Fonction pour contacter le support (exemple)
    const contactSupport = () => {
      // Ajoutez ici la logique pour contacter le support, comme une redirection ou une alerte.
      alert('Contacter le support client à support@example.com');
    };

    return {
      dataToPass,
      showNotification,
      contactSupport
    };
  },
  components: {
    PageHeader
  }
};
</script>

<style scoped>
/* Supprime les restrictions de clic pour la navigation */
.static-modal {
  position: fixed;
  top: 10px; /* Ajustez la position pour ne pas chevaucher le header */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1050;
  pointer-events: none; /* Désactive les événements de clic sur le modal */
}

.modal-dialog {
  pointer-events: none; /* Désactive les clics sur le modal */
}

.modal-content {
  pointer-events: auto; /* Réactive les clics à l'intérieur du modal */
  border-radius: 10px;
  border: 2px solid #dc3545; /* Ajoute un contour pour plus de visibilité */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Ajoute une ombre */
}

/* Styles pour le header et le contenu du modal */
.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  text-align: center;
}

.modal-footer {
  justify-content: center;
}

/* Maintient l'interaction avec les éléments en dessous */
body {
  padding-top: 120px; /* Ajuste pour éviter le chevauchement avec le modal */
}
</style>
