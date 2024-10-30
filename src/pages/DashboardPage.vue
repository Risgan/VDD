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

function goToFileForm() {
  router.push('/file-form');
}

function goToFiles() {
  router.push('/files');
}
</script>

<style scoped>
.dashboard-card {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.text-bold {
  font-weight: bold;
}

.q-btn {
  transition: background-color 0.3s;
}

.custom-button {
  border-radius: 15px;
}

.q-btn:hover {
  opacity: 0.9;
}

.text-center {
  text-align: center;
}
</style>
