import { defineStore } from 'pinia';

export const useStorageUser = defineStore('user', {
  state: () => ({
    NAME_LOCAL: 'NU-USER'
  }),

  getters: {
    getStorageUser() {
      let getLocal = localStorage.getItem(this.NAME_LOCAL);

      if(getLocal) {
        let { id, email, name, company } = JSON.parse(getLocal);
        
        const user = {
          id,
          name, 
          company,
          email, 
        }

        return user;
      }
    },
  },

  actions: {
    deleteStorageUser() {
      let getLocal = localStorage.getItem(this.NAME_LOCAL);

      if(getLocal) {
        localStorage.removeItem(this.NAME_LOCAL);
      }
    },

    setStorageUser(userStorage: any) {
      localStorage.setItem('NU-USER', JSON.stringify(userStorage));
    },
  }
})