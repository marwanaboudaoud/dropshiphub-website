<template>
    <div>
        <navbar :lightlogo=true :loginButton=true />
        <section class="relative before:content-[''] before:absolute xl:before:-top-[30%] lg:before:-top-[50%] sm:before:-top-[80%] before:-top-[90%] before:-start-80 before:end-0 before:w-[140rem] before:h-[65rem] ltr:before:-rotate-12 rtl:before:rotate-12 before:bg-dropshiphub-primary-500/5 dark:before:bg-indigo-600/10 before:z-1 items-center overflow-hidden">
            <div class="container relative z-2">
                <div class="grid grid-cols-1 md:mt-44 mt-32 text-center">
                    <div class="wow animate__animated animate__fadeIn">
                            <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl">
                                {{ $t('hero.title') }}
                            </h1>
                            <p class="text-slate-400 text-lg max-w-2xl mx-auto my-8">
                                {{ $t('hero.description') }}
                            </p>
                    </div>
                    <div class="subcribe-form mt-6 mb-3">
                        <form class="relative max-w-xl mx-auto" @submit.prevent="handleSubscribe">
                            <input 
                                type="email" 
                                v-model="subscribeEmail" 
                                id="subcribe" 
                                name="email" 
                                class="form-input border-0 py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" 
                                placeholder="Your Email Address :">
                            <button 
                                type="submit" 
                                class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-full">
                                Try it for free <i class="uil uil-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                    <div class="relative mt-8 z-3 wow animate__animated animate__fadeIn">
                        <img src="../assets/images/classic01.png" alt="" class="mover">
                    </div>
                </div>
                <div class="bg-dropshiphub-primary-500 w-8 h-16 z-2 absolute start-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"> </div>
                <div class="bg-dropshiphub-primary-500/20 w-8 h-16 z-2 absolute start-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>
                <div class="bg-dropshiphub-primary-500/20 w-8 h-16 z-2 absolute end-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
                <div class="bg-dropshiphub-primary-500 w-8 h-16 z-2 absolute end-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-dropshiphub-primary-500/5 dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>  
        <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700" >
            <div class="container relative">
                <companylogo />
            </div>
        </section>
        <section class="relative overflow-hidden" >
            <analytics />
            <howitwork />  
            <secondAnalusticsSection />
            <pricing />
            <askedquesions />
        </section>
        <newsletter />
        <fooTer :email=true />
        <switcher />
        <cookies />
    </div>
</template>

<script>
import companylogo from '../components/company-logos.vue';
import navbar from '../components/navbar/navbar.vue';
import howitwork from '../components/how-it-work/how-it-work-software.vue';
import analytics from '../components/analytics/software-analytics.vue';
import secondAnalusticsSection from '../components/analytics/second-analytics-section.vue';
import pricing from '../components/software-pricing-plans.vue';
import askedquesions from '../components/software-questions.vue';
import fooTer from '../components/footer/footer.vue';
import newsletter from '../components/contact/newsletter.vue';
import switcher from '../components/switcher.vue';
import cookies from '../components/start-cookies.vue'

import { API_BASE_URL } from '@/config/config'

export default {
    data() {
        return {
            subscribeEmail: '',
            successMessage: '',
            errorMessage: ''
        }
    },
    methods: {
        async handleSubscribe() {
            try {
                const response = await fetch(`${API_BASE_URL}/api/v1/send-updates`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.subscribeEmail
                    })
                })

                if (response.ok) {
                    this.successMessage = 'Successfully subscribed!'
                    this.subscribeEmail = ''
                    setTimeout(() => {
                        this.successMessage = ''
                    }, 5000)
                } else {
                    throw new Error('Subscription failed')
                }
            } catch (error) {
                this.errorMessage = 'Failed to subscribe. Please try again.'
                setTimeout(() => {
                    this.errorMessage = ''
                }, 5000)
            }
        }
    },
    components: {
        navbar,
        companylogo,
        howitwork,
        analytics,
        secondAnalusticsSection,
        pricing,
        askedquesions,
        fooTer,
        switcher,
        cookies,
        newsletter
    }
}
</script>


<style lang="scss" scoped>
    .mover {
        animation: mover 1.45s infinite alternate;
    }
    @keyframes mover {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(10px);
        }
    }

</style>