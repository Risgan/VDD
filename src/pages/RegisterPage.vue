<template>
    <div class="register-container q-pa-md q-mx-auto">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Registrarse</div>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit="onSubmit" @reset="resetForm" ref="form">
            <q-input
              filled
              v-model="email"
              label="Correo Electrónico"
              type="email"
              :rules="[val => !!val || 'El correo es requerido']"
              lazy-rules
              clearable
            />
            <q-input
              filled
              v-model="firstName"
              label="Nombre"
              :rules="[val => !!val || 'El nombre es requerido']"
              lazy-rules
              clearable
            />
            <q-input
              filled
              v-model="lastName"
              label="Apellido"
              :rules="[val => !!val || 'El apellido es requerido']"
              lazy-rules
              clearable
            />
            <q-input
              filled
              v-model="password"
              label="Contraseña"
              type="password"
              :rules="[val => !!val || 'La contraseña es requerida']"
              lazy-rules
              clearable
            />
            <q-btn type="submit" label="Registrarse" color="primary" class="full-width q-mt-md" />
          </q-form>
        </q-card-section>
  
        <q-card-section v-if="successMessage" class="text-positive q-pa-none">
          <q-icon name="check_circle" color="positive" class="q-mr-sm" />
          {{ successMessage }}
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from 'src/stores/userStore';
  
  defineOptions({
    name: 'RegisterPage'
  });
  
  const router = useRouter();
  const userStore = useUserStore();
  
  const email = ref<string>('');
  const firstName = ref<string>('');
  const lastName = ref<string>('');
  const password = ref<string>('');
  const successMessage = ref<string | null>(null);
  
  function onSubmit() {
    userStore.registerUser({ email: email.value, firstName: firstName.value, lastName: lastName.value, password: password.value });
    successMessage.value = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    resetForm();
    router.push('/login');
  }
  
  function resetForm() {
    email.value = '';
    firstName.value = '';
    lastName.value = '';
    password.value = '';
    successMessage.value = null;
  }
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    width: 100%;
  }
  </style>
  