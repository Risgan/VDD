<template>
    <q-card class="register-card">
      <q-card-section>
        <div class="text-h6">Registro</div>
      </q-card-section>

      <q-card-section>
        <q-input
          filled
          v-model="email"
          label="Correo Electrónico"
          type="email"
          :rules="[val => !!val || 'El correo electrónico es requerido']"
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
        <q-btn @click="onSubmit" label="Registrar" color="primary" class="full-width" />
        <div v-if="errorMessage" class="text-negative">{{ errorMessage }}</div>
      </q-card-section>
    </q-card>
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


  if (email.value && firstName.value && lastName.value && password.value) {
    console.log('Usuario registrado:', {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value
    });
    router.push('/login');
  } else {
    errorMessage.value = 'Por favor, completa todos los campos';
  }
}
</script>

<style scoped>
.register-card {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.text-h6 {
  text-align: center;
  margin-bottom: 20px;
}

.full-width {
  width: 100%;
}

.text-negative {
  margin-top: 10px;
  text-align: center;
}
</style>
