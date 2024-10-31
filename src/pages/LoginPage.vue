<template>
    <div class="login-container q-pa-md q-mx-auto">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Iniciar Sesión</div>
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
              v-model="password"
              label="Contraseña"
              type="password"
              :rules="[val => !!val || 'La contraseña es requerida']"
              lazy-rules
              clearable
            />
            <q-btn type="submit" label="Iniciar Sesión" color="primary" class="full-width q-mt-md" />
          </q-form>
        </q-card-section>
  
        <q-card-actions align="center">
          <q-btn flat label="Registrarse" @click="goToRegister" color="secondary" />
        </q-card-actions>
  
        <q-card-section v-if="errorMessage" class="text-negative q-pa-none">
          <q-icon name="warning" color="negative" class="q-mr-sm" />
          {{ errorMessage }}
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from 'src/stores/userStore';
  
  defineOptions({
    name: 'LoginPage'
  });
  
  const router = useRouter();
  const userStore = useUserStore();
  
  const email = ref<string>('');
  const password = ref<string>('');
  const errorMessage = ref<string | null>(null);
  
  function onSubmit() {
    errorMessage.value = null;
  
    const registeredUser = userStore.users.find(user => user.email === email.value && user.password === password.value);
  
    if (registeredUser) {
      router.push('/home');
    } else {
      errorMessage.value = 'Correo o contraseña inválidos'; 
    }
  }
  
  function goToRegister() {
    router.push('/register');
  }
  
  function resetForm() {
    email.value = '';
    password.value = '';
    errorMessage.value = null;
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    width: 100%;
  }
  </style>
  