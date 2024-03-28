import { defineStore } from 'pinia'

export const useStorageUser = defineStore('user', {
  state: () => ({
    NAME_LOCAL: 'user-store'
  }),

  getters: {
    getStorageUser() {
      let getLocal = localStorage.getItem(this.NAME_LOCAL);

      if(getLocal) {
        let {email, name, company, password} = JSON.parse(getLocal);
        
        const user = {
          name, 
          company,
          email, 
          password
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
  }
})