<template>
    <div>
        <navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
                        {{ $t('guides.pageTitle') }}
                    </h3>
                </div>
            </div>
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">{{ $t('guides.breadcrumb.home') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/helpcenter">{{ $t('guides.breadcrumb.helpcenter') }}</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                        <i class="uil uil-angle-right-b"></i>
                    </li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white">
                        {{ $t('guides.breadcrumb.guides') }}
                    </li>
                </ul>
            </div>
        </section>

        <section class="relative md:pt-24 pt-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div v-for="(category, index) in $t('guides.categories')" :key="index" class="">
                        <h5 class="font-semibold text-xl mb-4">{{ category.title }}</h5>
                        <ul v-for="(feature, featureIndex) in category.features" :key="featureIndex" class="list-none mt-2">
                            <li class="mt-2">
                                <router-link 
                                    :to="`/helpcenter-guides/${formatFeatureUrl(feature)}`"
                                    class="text-slate-400 hover:text-dropshiphub-primary-500"
                                >
                                    <i class="mdi mdi-arrow-right text-dropshiphub-primary-500 me-2"></i>
                                    {{ feature }}
                                </router-link>
                            </li>
                        </ul>
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
    name: "helpcenter-guides",
    methods: {
        formatFeatureUrl(feature) {
            return feature
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-');
        }
    },
    data() {
        return {
            guidesData: [
                {
                    title: 'Getting started',
                    features: [
                        'Deciding to purchase', 'List your space', 'Landing an experience or adventure', 'Top uses questions'
                    ]
                },
                {
                    title: 'Your calendar',
                    features: [
                        'Pricing & availability', 'Booking settings', 'Responding to enquiries & requests', 'Snoozing or deactivating your listing'
                    ]
                },
                {
                    title: 'Your listings',
                    features: [
                        'Updating your listing', 'Neighbourhoods', 'Listing photos & photography', 'Techwind Plus', 'API-connected software'
                    ]
                },
                {
                    title: 'How payouts work',
                    features: [
                        'Getting paid', 'Adding payout info', 'Your payout status', 'Donations', 'Taxes'
                    ]
                },
                {
                    title: 'Your reservations',
                    features: [
                        'Techwind safely', 'Techwind Experiences and Adventures', 'Changing a reservation', 'Cancelling a reservation', 'Long-term reservations'
                    ]
                },
                {
                    title: 'Reservation help',
                    features: [
                        'Help with a reservation or guest', 'Guest cancellations'
                    ]
                },
                {
                    title: 'Your account',
                    features: [
                        'Your profile', 'Account security', 'Identification & verifications', 'Reviews', 'Superhost status'
                    ]
                }
            ]
        }
    },
    components:{
        navbar,
        getintouch,
        footers,
        switcher
    }
}
</script>