import { defineStore } from 'pinia';

export const useStorageClients = defineStore('clients', {
  state: () => ({
    NAME_LOCAL: 'NU-CLIENTS'
  }),

  getters: {
    getStorageClients() {
      let getLocal = localStorage.getItem(this.NAME_LOCAL);

      if(getLocal) {
        let { id, name, birth, email, street, phone } = JSON.parse(getLocal);
        
        const clients = {
          id, 
          name, 
          birth, 
          email, 
          street, 
          phone  
        }

        return clients;
      }
    },
  },

  actions: {
    deleteStorageClients() {
      let getLocal = localStorage.getItem(this.NAME_LOCAL);

      if(getLocal) {
        localStorage.removeItem(this.NAME_LOCAL);
      }
    },

    setStorageClients(clientsStorage: any) {
      localStorage.setItem('NU-CLIENTS', JSON.stringify(clientsStorage));
    },
  }
})