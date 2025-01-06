<template>
    <div class="container relative md:mt-24 my-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:leading-normal leading-normal text-3xl font-semibold font-semibold sm:text-4xl">
                {{ $t('FAQ.pageTitle') }}
            </h3>
            <p class="text-slate-400 max-w-xl mx-auto">
                {{ $t('FAQ.pageDescription') }}
            </p>
        </div>
        <div id="accordion-collapse" data-accordion="collapse"
            class="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]">
            <div>
                <div v-for="item in firstColumnItems" :key="item.id"
                    class="relative mt-4 shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                    <h2 class="text-base font-semibold">
                        <button @click="toggle(item.id)"
                            :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-dropshiphub-primary-500' : ''"
                            class="flex justify-between items-center p-5 w-full font-medium text-start">
                            <span>{{ item.title }}</span>
                            <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon
                                class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div :class="item.id === activeIndex ? '' : 'hidden'">
                        <div class="p-5">
                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div v-for="item in secondColumnItems" :key="item.id"
                    class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                    <h2 class="text-base font-semibold">
                        <button @click="toggle(item.id)"
                            :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-dropshiphub-primary-500' : ''"
                            class="flex justify-between items-center p-5 w-full font-medium text-start">
                            <span>{{ item.title }}</span>
                            <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon
                                class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div :class="item.id === activeIndex ? '' : 'hidden'">
                        <div class="p-5">
                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: null
        }
    },
    computed: {
        firstColumnItems() {
            return this.$t('FAQ.categories.general.items').slice(0, 4)
        },
        secondColumnItems() {
            return this.$t('FAQ.categories.general.items').slice(4, 8)
        }
    },
    methods: {
        toggle(id) {
            this.activeIndex = this.activeIndex === id ? null : id
        }
    }
}
</script>
