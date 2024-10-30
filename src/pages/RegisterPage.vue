<template>
    <!-- <q-page class="flex flex-center"> -->
      <q-card>
        <q-card-section>
          <div class="text-h6">Register</div>
        </q-card-section>
  
        <q-card-section>
          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            :rules="[val => !!val || 'Email is required']"
            lazy-rules
            clearable
          />
          <q-input
            filled
            v-model="firstName"
            label="First Name"
            :rules="[val => !!val || 'First name is required']"
            lazy-rules
            clearable
          />
          <q-input
            filled
            v-model="lastName"
            label="Last Name"
            :rules="[val => !!val || 'Last name is required']"
            lazy-rules
            clearable
          />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            :rules="[val => !!val || 'Password is required']"
            lazy-rules
            clearable
          />
          <q-btn @click="onSubmit" label="Register" color="primary" />
          <div v-if="errorMessage" class="text-negative">{{ errorMessage }}</div>
        </q-card-section>
      </q-card>
    <!-- </q-page> -->
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  defineOptions({
    name: 'RegisterPage'
  });
  
  const router = useRouter();
  const email = ref('');
  const firstName = ref('');
  const lastName = ref('');
  const password = ref('');
  const errorMessage = ref<string | null>(null);
  
  function onSubmit() {
    errorMessage.value = null;
    
    // Aquí podrías añadir lógica para registrar al usuario (por ejemplo, llamar a una API)
    
    if (email.value && firstName.value && lastName.value && password.value) {
      // Simulación de registro exitoso
      console.log('User registered:', {
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
      });
      router.push('/login'); // Redirigir a la página de inicio de sesión después del registro
    } else {
      errorMessage.value = 'Please fill in all fields';
    }
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  