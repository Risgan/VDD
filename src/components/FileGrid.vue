<template>
    <q-page>
      <q-list>
        <q-item v-for="file in filesStore.files" :key="file.id">
          <q-item-section>
            <q-card>
              <q-card-section>
                <div>
                  <strong>{{ file.fileName }}</strong>
                  <q-btn @click="togglePin(file.id)" label="Pin" v-if="!file.pinned" />
                  <q-btn @click="togglePin(file.id)" label="Unpin" v-if="file.pinned" />
                  <q-btn @click="editFile(file.id)" label="Edit" />
                  <q-btn @click="deleteFile(file.id)" label="Delete" :disabled="file.pinned" />
                </div>
              </q-card-section>
            </q-card>
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useFilesStore } from '../store/files';
  
  export default defineComponent({
    setup() {
      const filesStore = useFilesStore();
  
      const deleteFile = (id: string) => {
        filesStore.deleteFile(id);
      };
  
      const editFile = (id: string) => {
        // Implement edit functionality
      };
  
      const togglePin = (id: string) => {
        filesStore.togglePin(id);
      };
  
      return { filesStore, deleteFile, editFile, togglePin };
    },
  });
  </script>
  