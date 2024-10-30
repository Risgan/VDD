<template>
  <q-card class="dashboard-card">
    <q-card-section class="text-center">
      <div class="text-h4 text-bold">¡Bienvenido al Tablero!</div>
      <div class="text-body1 q-mt-md">
        Aquí puedes gestionar tus archivos y carpetas.
      </div>
    </q-card-section>
    
    <q-card-section class="q-gutter-md q-mt-md">
      <q-btn 
        label="Ir al Formulario de Archivos" 
        @click="goToFileForm" 
        color="primary" 
        class="full-width custom-button"
      />
      <q-btn 
        label="Ver Archivos" 
        @click="goToFiles" 
        color="secondary" 
        class="full-width custom-button"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineOptions({
  name: 'DashboardPage'
});

const router = useRouter();

// Función para redirigir a la página del formulario de archivos
function goToFileForm() {
  router.push('/file-form');
}

// Función para redirigir a la página de archivos
function goToFiles() {
  router.push('/files');
}
</script>

<style scoped>
.dashboard-card {
  max-width: 400px; /* Limita el ancho del card */
  margin: 20px auto; /* Centra el card horizontalmente y le da margen vertical */
  padding: 20px; /* Añade padding interno al card */
  border-radius: 10px; /* Esquinas redondeadas para el card */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  background-color: #ffffff; /* Fondo blanco */
}

.text-bold {
  font-weight: bold; /* Texto en negrita */
}

.q-btn {
  transition: background-color 0.3s; /* Efecto de transición para el color de fondo */
}

.custom-button {
  border-radius: 15px; /* Esquinas redondeadas para los botones */
}

.q-btn:hover {
  opacity: 0.9; /* Ligera reducción de opacidad en hover */
}

.text-center {
  text-align: center; /* Centra el texto */
}
</style>
