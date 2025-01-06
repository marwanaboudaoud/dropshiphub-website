<template>
    <div>
        <navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 bg-[url('../../assets/images/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-75"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Contact Us</h3>
                </div>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <contactone />
        <fooTer/>
        <switcher />
    </div>
</template>

<script>
import navbar from '../components/navbar/navbar.vue';
import contactone from '../components/contact/contact-one.vue';
import fooTer from '../components/footer/footer.vue';
import switcher from '../components/switcher.vue'
    export default {
        data() {
            return {
               
            }
        },
        components:{
            navbar,
            contactone,
            fooTer,
            switcher
        },
       
    }
</script>