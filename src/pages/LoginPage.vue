<template>
    <!-- <q-page class="row items-center justify-center"> -->
      <div class="login-container q-pa-md q-mx-auto">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Login</div>
          </q-card-section>
  
          <q-card-section>
            <q-form @submit="onSubmit" @reset="resetForm" ref="form">
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
                v-model="password"
                label="Password"
                type="password"
                :rules="[val => !!val || 'Password is required']"
                lazy-rules
                clearable
              />
              <q-btn type="submit" label="Login" color="primary" class="full-width q-mt-md" />
            </q-form>
          </q-card-section>
  
          <q-card-actions align="center">
            <q-btn flat label="Register" @click="goToRegister" color="secondary" />
          </q-card-actions>
  
          <q-card-section v-if="errorMessage" class="text-negative q-pa-none">
            <q-icon name="warning" color="negative" class="q-mr-sm" />
            {{ errorMessage }}
          </q-card-section>
        </q-card>
      </div>
    <!-- </q-page> -->
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  defineOptions({
    name: 'LoginPage'
  });
  
  const router = useRouter();
  const email = ref<string>('');
  const password = ref<string>('');
  const errorMessage = ref<string | null>(null);
  
  function onSubmit() {
    errorMessage.value = null;
  
    if (email.value === 'user@example.com' && password.value === 'password123') {
      router.push('/home');
    } else {
      errorMessage.value = 'Invalid email or password';
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
  