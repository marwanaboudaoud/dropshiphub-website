<template>
    <div>
        <navbar :navLight="'nav-light'" />
        <!-- Hero section -->
        <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
                        {{ $t('FAQ.pageTitle') }}
                    </h3>
                </div>
            </div>
            <!-- Breadcrumb -->
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">{{ $t('FAQ.breadcrumb.home') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/helpcenter">{{ $t('FAQ.breadcrumb.helpcenter') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white">
                        {{ $t('FAQ.breadcrumb.faqs') }}
                    </li>
                </ul>
            </div>
        </section>

        <!-- FAQ Content -->
        <section class="relative md:pt-24 pt-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <!-- Sidebar -->
                    <div class="lg:col-span-4 md:col-span-5">
                        <div class="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                            <ul class="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li v-for="(category, key) in categories" :key="key"
                                    class="navbar-item p-0" :class="{'mt-3': key !== 'buying', 'active': activeId === key}">
                                    <a :href="`#${key}`" class="text-base font-medium navbar-link">
                                        {{ $t(`FAQ.categories.${key}.title`) }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="lg:col-span-8 md:col-span-7">
                        <div v-for="(category, key) in categories" :key="key" :id="key" class="scroll-div">
                            <h5 class="text-2xl font-semibold">{{ $t(`FAQ.categories.${key}.title`) }}</h5>
                            <div data-accordion="collapse" class="mt-6">
                                <div v-for="item in $t(`FAQ.categories.${key}.items`)" :key="item.id"
                                    class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                    <h2 class="text-base font-semibold">
                                        <button type="button" @click="handleClick(key, item.id)"
                                            :class="activeIndexes[key] === item.id ? 'bg-gray-50 dark:bg-slate-800 text-dropshiphub-primary-500' : ''"
                                            class="flex justify-between items-center p-5 w-full font-medium text-start">
                                            <span>{{ item.title }}</span>
                                            <svg data-accordion-icon class="size-4 shrink-0"
                                                :class="activeIndexes[key] === item.id ? 'rotate-180' : ''"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div :class="activeIndexes[key] === item.id ? '' : 'hidden'">
                                        <div class="p-5">
                                            <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <getintouch />
        <footers :email=true />
        <switcher />
    </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import getintouch from '@/components/get-in-touch/get-in-touch-helpcenter.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'

export default {
    components: {
        navbar,
        getintouch,
        footers,
        switcher
    },
    data() {
        return {
            activeId: 'buying',
            activeIndexes: {
                buying: null,
                general: null,
                payment: null,
                support: null
            },
            categories: {
                buying: true,
                general: true,
                payment: true,
                support: true
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.checkVisibleDiv);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkVisibleDiv);
    },
    methods: {
        checkVisibleDiv() {
            const windowHeight = window.innerHeight;
            const divElements = document.querySelectorAll('.scroll-div');
            divElements.forEach(div => {
                const rect = div.getBoundingClientRect();
                const isVisible = (rect.top >= 0 && rect.bottom <= windowHeight);
                if (isVisible) {
                    this.activeId = div.id;
                }
            });
        },
        handleClick(category, id) {
            this.activeIndexes[category] = this.activeIndexes[category] === id ? null : id;
        }
    }
}
</script>
