<template>
    <!-- <q-page class="q-pa-md"> -->
      <q-card>
        <q-card-section>
          <div class="text-h6">Folders</div>
          <q-separator />
  
          <q-input v-model="newFolder.name" label="Folder Name" />
          <q-input v-model="newFolder.id" label="Folder ID" />
          <q-btn @click="addFolder" label="Add Folder" color="primary" />
  
          <q-list>
            <q-item v-for="folder in folders" :key="folder.id">
              <q-item-section>{{ folder.name }}</q-item-section>
              <q-item-section>{{ folder.id }}</q-item-section>
              <q-item-section>
                <q-btn @click="viewFolder(folder)" label="View" color="secondary" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    <!-- </q-page> -->
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
//   import { useRouter } from 'vue-router';


  
  defineOptions({
    name: 'FolderPage'
  });
  
//   const router = useRouter();
  
  const newFolder = ref({ name: '', id: '' });
  const folders = ref<{ name: string; id: string }[]>([]);
  
  function addFolder() {
    if (newFolder.value.name && newFolder.value.id) {
      folders.value.push({ ...newFolder.value });
      newFolder.value = { name: '', id: '' }; // Reinicia el formulario
    } else {
      alert('Please provide both name and ID for the folder.');
    }
  }
  
  function viewFolder(folder: { name: string; id: string }) {
    console.log('Viewing folder:', folder);
    // Aquí puedes implementar la lógica para mostrar la carpeta
    // router.push({ name: 'folder-detail', params: { id: folder.id } }); // Ejemplo de navegación
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  