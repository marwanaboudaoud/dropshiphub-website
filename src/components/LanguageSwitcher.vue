<template>
  <div class="relative inline-block">
    <button @click="isOpen = !isOpen" class="flex items-center space-x-2 rounded-md px-3 py-1.5 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">
      <img
        :src="currentLocale === 'nl' ? require('../assets/images/flags/nl.png') : require('../assets/images/flags/en.png')"
        class="w-8 h-4"
        :alt="currentLocale.toUpperCase()"
      />
      <span>{{ currentLocale.toUpperCase() }}</span>
    </button>
    <div v-if="isOpen" class="absolute mt-1 w-24 rounded-md shadow-lg bg-white dark:bg-slate-900 ring-1 ring-black ring-opacity-5 z-50">
      <div class="py-1">
        <button  @click="switchLanguage('nl')" class="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
          <img :src="require('../assets/images/flags/nl.png')" class="w-7 h-4 mr-2" alt="NL" />
          <span>NL</span>
        </button>
        <button @click="switchLanguage('en')" class="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
          <img :src="require('../assets/images/flags/en.png')" class="w-7 h-4 mr-2" alt="EN" />
          <span>EN</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale.value;
    }
  },
  methods: {
    switchLanguage(locale) {
      this.$i18n.changeLanguage(locale);
      localStorage.setItem('locale', locale);
      this.updateRoute(locale);
      this.isOpen = false;
    },
    updateRoute(locale) {
      const currentPath = this.$route.path;
      const pathWithoutLocale = currentPath.replace(/^\/(en|nl)/, '');
      
      if (locale === 'nl') {
        this.$router.push(pathWithoutLocale);
      } else {
        this.$router.push(`/${locale}${pathWithoutLocale}`);
      }
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }
}
</script>
