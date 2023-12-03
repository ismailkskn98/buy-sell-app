import { defineStore } from 'pinia';

export const Sidebar = defineStore('sidebar', {
    state: () => ({
        navActiveBtn: false,
    }),
    getters: {
        getActiveBtn: (state) => this.navActiveBtn,
    },
    actions: {
        setSideBtn(val) {
            this.navActiveBtn = val;
        }
    },
})