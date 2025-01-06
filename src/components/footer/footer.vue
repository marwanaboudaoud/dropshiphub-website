<template>
  <footer class="bg-black">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
        <a v-for="item in navigation.main" :key="item.name" :href="item.href" class="text-gray-400 hover:text-white">{{ item.name }}</a>
      </nav>
      <p class="mt-24 text-center text-sm/6 text-gray-400">&copy; 2024 DropshipHub, Inc. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ]
}
</script>