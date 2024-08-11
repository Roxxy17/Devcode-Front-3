import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getAllContactsData() {
      return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
        return error;
      });
    },
    // TODO: Uncomment baris kode dibawah untuk membuat sebuah fungsi yang akan mengirimkan data kontak baru ke API
    async addNewContact(_, payload) {
      try {
        const response = await axios.post(`${BASE_URL}/contacts`, payload);
        return response.data;
      } catch (error) {
        console.error("Error adding new contact:", error);
        throw error; // Propagate the error to be handled by the caller
      }
    },
  },
  modules: {},
});
