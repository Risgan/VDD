<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar icon="person" />
        <q-toolbar-title>
          Bienvenido, {{ username }}
        </q-toolbar-title>
        <q-btn
          flat
          dense
          icon="logout"
          label="Cerrar sesión"
          @click="logout"
          class="text-white"
        />
      </q-toolbar>
    </q-header>

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useUserStore } from 'src/stores/userStore'; // Asegúrate de importar el userStore
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const userStore = useUserStore(); // Cambiar a userStore
    const router = useRouter();

    const username = userStore.users.length > 0 ? userStore.users[0].firstName : 'Usuario'; // Obtener el nombre de usuario

    // Función para cerrar sesión
    const logout = () => {
      userStore.users = []; // Limpiar el usuario (o ajusta según tu lógica de cierre de sesión)
      router.push('/login');
    };

    return {
      username,
      logout,
    };
  },
});
</script>

<style scoped>
.q-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
