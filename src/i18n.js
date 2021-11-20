import en from './assets/i18n/en.json'
import ar from './assets/i18n/ar.json'
import fr from './assets/i18n/fr.json'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem("lang") || 'en',
    messages:{
        en: en,
        ar: ar,
        fr: fr,
    }
})
