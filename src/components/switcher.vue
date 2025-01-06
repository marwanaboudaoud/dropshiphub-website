<template>
    <div>
        <div v-if="backToTop" class="fixed bottom-3 end-3">
            <router-link to="/" class="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">
                <i data-feather="arrow-left" class="size-4"></i>
            </router-link>
        </div>
        <div v-if="Video" class="fixed bottom-3 end-3">
            <router-link to="/index-video" class="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">
                <i data-feather="arrow-left" class="size-4"></i>
            </router-link>
        </div>
        <a v-else @click="scrollToTop" v-show="showTopButton" id="back-to-top" class="fixed text-lg cursor-pointer rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-dropshiphub-primary-500 text-white leading-9">
            <i class="uil uil-arrow-up"></i>
        </a>
        <div class="fixed top-[30%] -right-2 z-50">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)" />
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i class="uil uil-moon text-[20px] text-yellow-500"></i>
                    <i class="uil uil-sun text-[20px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>
    </div>
</template>

<script>
import feather from 'feather-icons'
export default {
    props: {
        backToTop: {
            type: Boolean,
            required: true
        },
        Video: {
            type: Boolean,
            required: true
        }
    },
    name: "switcherVue",
    data() {
        return {
            htmlTag: document.getElementsByTagName("html")[0],
            showTopButton: false
        }
    },

    mounted() {
        feather.replace();
    },

    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            if (
                document.body.scrollTop >= 400 ||
                document.documentElement.scrollTop >= 400
            ) {
                this.showTopButton = true
            } else {
                this.showTopButton = false
            }
        },
        changeMode() {
            if (this.htmlTag.className.includes("dark")) {
                this.htmlTag.className = 'light'
            } else {
                this.htmlTag.className = 'dark'
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },

}
</script>