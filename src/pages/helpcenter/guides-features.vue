<template>
    <div>
        <navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
                        {{ guideTitle }}
                    </h3>
                </div>
            </div>
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">{{ $t('guideFeature.breadcrumb.home') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/helpcenter">{{ $t('guideFeature.breadcrumb.helpcenter') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/helpcenter-guides">{{ $t('guideFeature.breadcrumb.guides') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white">
                        {{ guideTitle }}
                    </li>
                </ul>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container">
                <div class="lg:col-span-8 md:col-span-6 order-1 md:order-2">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800">
                        <div class="text-center mt-12">
                            <span class="bg-dropshiphub-primary-500 inline-block text-white text-xs font-semibold px-2.5 py-1.5 rounded-full h-7">
                                {{ guideTitle }}
                            </span>

                            <ul class="list-none mt-6">
                                <li class="inline-block font-semibold text-slate-400 mx-4"> 
                                    <span class="text-slate-900 dark:text-white block">{{ $t('guideFeature.content.metadata.client') }}</span>
                                    <span class="block">{{ $t('guideFeature.content.clientName') }}</span>
                                </li>
                                <li class="inline-block font-semibold text-slate-400 mx-4"> 
                                    <span class="text-slate-900 dark:text-white block">{{ $t('guideFeature.content.metadata.date') }}</span>
                                    <span class="block">{{ $t('guideFeature.content.date') }}</span>
                                </li>
                                <li class="inline-block font-semibold text-slate-400 mx-4"> 
                                    <span class="text-slate-900 dark:text-white block">{{ $t('guideFeature.content.metadata.readTime') }}</span>
                                    <span class="block">{{ $t('guideFeature.content.readTime') }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-6">
                            <p class="text-slate-400">{{ $t('guideFeature.content.mainText.paragraph1') }}</p>
                            <p class="text-slate-400 italic border-x-4 border-dropshiphub-primary-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                "{{ $t('guideFeature.content.mainText.quote') }}"
                            </p>
                            <p class="text-slate-400 mt-3">{{ $t('guideFeature.content.mainText.paragraph2') }}</p>
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
import switcher from '@/components/switcher.vue';

export default {
    name: 'GuideContent',
    components: {
        navbar,
        getintouch,
        footers,
        switcher
    },
    computed: {
        guideTitle() {
            return this.$route.params.guide.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
        }
    }
}
</script>
