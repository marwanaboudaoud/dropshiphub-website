<template>
    <div>
        <navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                        {{ $t('helpCenter.hero.title') }}
                    </h3>
                    <div class="text-center subcribe-form mt-4 pt-2">
                        <form class="relative mx-auto max-w-xl">
                            <input type="text" id="help" name="name"
                                class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700"
                                :placeholder="$t('helpCenter.hero.searchPlaceholder')">
                            <button type="submit" class="btn-search">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">{{ $t('helpCenter.breadcrumb.home') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white">
                        {{ $t('helpCenter.breadcrumb.helpcenter') }}
                    </li>
                </ul>
            </div>
        </section>

        <!-- Main content section -->
        <section class="relative md:mt-24 mt-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                        {{ $t('helpCenter.mainSection.title') }}
                    </h3>
                    <p class="text-slate-400 max-w-xl mx-auto">
                        {{ $t('helpCenter.mainSection.description') }}
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 mt-6 gap-[120px]">
                    <div v-for="item in $t('helpCenter.helpOptions')" :key="item.name" 
                         class="text-center px-8 lg:px-12 mt-6">
                        <div class="w-20 h-20 bg-dropshiphub-primary-500/5 text-dropshiphub-primary-500 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i :data-feather="item.icon" class="size-[30px]"></i>
                        </div>
                        <div class="content mt-7">
                            <router-link :to="item.to" class="title h5 text-lg font-medium hover:text-dropshiphub-primary-500">
                                {{ item.name }}
                            </router-link>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>
                            <div class="mt-5">
                                <router-link :to="item.to" class="text-dropshiphub-primary-500">
                                    {{ item.cta }} <i class="mdi mdi-chevron-right"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Get Started section -->
            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                        {{ $t('helpCenter.getStarted.title') }}
                    </h3>
                    <p class="text-slate-400 max-w-xl mx-auto">
                        {{ $t('helpCenter.getStarted.description') }}
                    </p>
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in $t('helpCenter.getStarted.items')" :key="item.name" class="flex">
                        <i data-feather="help-circle" class="fea icon-ex-md text-dropshiphub-primary-500 me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-xl font-semibold">
                                {{ item.name }} 
                                <span v-if="item.name2" class="text-dropshiphub-primary-500">{{ item.name2 }}</span>
                                {{ item.name3 }}
                            </h5>
                            <p class="text-slate-400">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <getintouch />
        <footers />
        <switcher />
        <cookies />
    </div>
</template>
<script>
import navbar from '@/components/navbar/navbar.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import cookies from '@/components/start-cookies.vue';
import getintouch from '@/components/get-in-touch/get-in-touch-helpcenter.vue'
export default {
    data() {
        return {
            helps: [
                {
                    icon: 'help-circle',
                    name: 'FAQs',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    to: '/helpcenter-faqs'
                },
                {
                    icon: 'bookmark',
                    name: 'Guides / Support',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    to: '/helpcenter-guides'


                },
            ],
            starts: [
                {
                    name: 'How our',
                    name2: 'Techwind',
                    name3: 'work ?',
                    desc: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.'
                },
                {
                    name: ' What is the main process open account ?',
                    desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact."
                },
                {
                    name: ' How to make unlimited data entry ?',
                    desc: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.'
                },
                {
                    name: ' Is',
                    name2: 'Techwind',
                    name3: 'safer to use with my account ?',
                    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin."
                },
            ]
        }
    },
    components: {
        navbar,
        footers,
        switcher,
        cookies,
        getintouch
    }
}
</script>