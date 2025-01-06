<template>
  <div class="container relative md:mt-24 my-16 gap-[30px">
    <div class="grid grid-cols-1 pb-8 pt-24 text-center">
      <h4 class="mb-4 text-3xl font-semibold font-semibold sm:text-4xl md:leading-normal leading-normal font-semibold"> 
        {{ $t('pricing.title') }}
      </h4>
      <p class="text-slate-400 max-w-xl mx-auto"> 
        {{ $t('pricing.description') }}
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 sm:gap-y-0 mt-8">
      <div class="col-span-1">
        <span>{{$t('pricing.rangerOrders')}} ({{ orderValue }})</span>
        <div class="relative mt-4 mb-12">
          <label for="orders-range-input" class="sr-only">Labels range</label>
          <input id="orders-range-input" type="range" v-model="orderValue" :min="tiers[0].order"  :max="tiers[tiers.length-1].order" @input="updatePricing"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-dropshiphub-primary-500">
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{{ tiers[0].order }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -bottom-6">{{ tiers[Math.floor(tiers.length/3)].order }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -bottom-6">{{ tiers[Math.floor(2*tiers.length/3)].order }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">{{ tiers[tiers.length-1].order }}</span>
        </div>
        <span>{{$t('pricing.rangerProducts')}} ({{ productValue }})</span>
        <div class="relative my-4">
          <label for="products-range-input" class="sr-only">Labels range</label>
          <input id="products-range-input" type="range" v-model="productValue" :min="tiers[0].products" :max="tiers[tiers.length-1].products"
            @input="updatePricing"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-dropshiphub-primary-500">
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{{ tiers[0].products }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -bottom-6">{{ tiers[Math.floor(tiers.length/3)].products }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -bottom-6">{{ tiers[Math.floor(2*tiers.length/3)].products }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">{{ tiers[tiers.length-1].products }}</span>
        </div>
      </div>
      <div class="h-full flex text-center ring-1 ring-inset ring-yellow-600/20 rounded-lg shadow col-span-1 border-2 border-gray-200 min-h-52">
        <div class="m-auto p-4">
          <span class="relative h6 -top-5 text-xl">€</span>
          <span class="text-5xl h6 font-bold"> {{ finalPrice }}</span>
          <br /> {{$t('pricing.cardLink')}}  / {{$t('pricing.cardMonth')}} 
          <a href=""
            class='py-2 mt-4 px-5 inline-block font-semibold border align-middle duration-500 text-base text-center rounded-md w-80 bg-dropshiphub-primary-500 hover:bg-dropshiphub-secondary-500 border-dropshiphub-primary-500 hover:border-dropshiphub-secondary-500 text-white'>
            {{$t('pricing.cardButton')}} 
          </a>
        </div>
      </div>
    </div>
    <div class="py-24 sm:pb-32">
      <div class="mx-auto max-w-7xl">
        <swiper 
           @init="onSwiperInit" 
           :slides-per-view="4.4" 
           :space-between="10" 
           ref="swiperRef"  
           :loop="false"
           :slides-offset-before="5" 
           :breakpoints="{
             0: {
               slidesPerView: 1.4,
             },
             576: {
               slidesPerView: 2.4,
             },
             1024: {
               slidesPerView: 3.4,
             }
          }" class="swiper swiper-container items-center gap-y-12">
          <swiper-slide v-for="(tier, index) in duplicatedTiers" :key="index" :data-tier-index="index"
            :class="['shadow rounded-md p-6 border-2',
            isSelected(index) ? 'bg-gradient-to-t bg-dropshiphub-primary-500/100 border-dropshiphub-primary-500' : 'bg-white border-gray-200']">
                <div class="mb-6" :class="isSelected(index) ? 'text-white' : 'text-gray-800'">
                  <span class="relative h6 -top-5 text-xl">€</span>
                  <span class="text-5xl h6 font-black"> {{ tier.price }}</span>
                  <span class="inline-block text-md ml-2">{{$t('pricing.cardLink')}} <br> {{$t('pricing.cardMonth')}} </span>
                  <a href=""
                    :class="['py-2 mt-4 px-5 inline-block font-bold tracking-wide border align-middle duration-500 text-base text-center rounded-md w-full',
                    isSelected(index)
                      ? 'text-gray-500  bg-white hover:bg-dropshiphub-secondary-500 hover:text-white'
                      : 'bg-dropshiphub-primary-500 hover:bg-dropshiphub-secondary-500 border-dropshiphub-primary-500 hover:border-dropshiphub-secondary-500 text-white']">
                   {{$t('pricing.cardButton')}} 
                  </a>
                </div>
                <div class="mb-6" :class="isSelected(index) ? 'text-white' : 'text-gray-600'">
                    <p>{{ tier.order }} {{$t('pricing.orders')}} </p>
                    <p>{{ tier.products }} {{$t('pricing.rangerProducts')}}</p>
                </div>
                <div class="border-b" :class="isSelected(index) ? 'border-white' : 'border-gray-200'"></div>
                <ul class="self-start pt-8">
                   <li v-for="(feature, featureIndex) in ['Complete documentation', 'Working materials in Figma', '100GB cloud storage', '500 team members', 'Free Support']"
                     :key="featureIndex" :class="['flex items-center pl-2', featureIndex === 0 ? 'mb-1' : 'my-1',
                     isSelected(index) ? 'text-white' : 'text-gray-600']">
                     <i class="uil uil-check-circle text-xl mr-2"
                        :class="isSelected(index) ? 'text-white' : 'text-dropshiphub-primary-500'"></i>
                     <span>{{ feature }}</span>
                    </li>
                </ul>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.css";
import 'swiper/css';

const PRICING_TIERS = [
  { price: 19, order: 2500, products: 10000 },
  { price: 39, order: 5000, products: 20000 },
  { price: 59, order: 10000, products: 40000 },
  { price: 79, order: 15000, products: 80000 },
  { price: 99, order: 30000, products: 100000 },
  { price: 119, order: 40000, products: 150000 },
  { price: 139, order: 50000, products: 180000 },
  { price: 159, order: 60000, products: 200000 },
  { price: 179, order: 80000, products: 250000 },
];

export default {
  components: { Swiper, SwiperSlide },

  setup() {
    const orderValue = ref(0);
    const productValue = ref(1);
    const selectedIndex = ref(0);
    const swiperInstance = ref(null);
    const finalPrice = ref(PRICING_TIERS[0].price);

    const findSelectedTierIndex = () => {
      for (let i = PRICING_TIERS.length - 1; i >= 0; i--) {
        const currentTier = PRICING_TIERS[i];
        const nextTier = PRICING_TIERS[i + 1];

        if (orderValue.value > currentTier.order || productValue.value > currentTier.products) {
          if (!nextTier || (orderValue.value <= nextTier.order && productValue.value <= nextTier.products)) {
            return i + 1;
          }
        }
      }
      return 0;
    };

    const updateSwiper = (index) => {
      if (swiperInstance.value) {
        swiperInstance.value.slideTo(index - 1, 300, false);
      }
    };

    const updatePricing = () => {
      const newIndex = findSelectedTierIndex();
      selectedIndex.value = newIndex;
      
      const currentTier = PRICING_TIERS[newIndex] || PRICING_TIERS[PRICING_TIERS.length - 1];
      finalPrice.value = currentTier.price;
      
      updateSwiper(newIndex);
    };

    const isSelected = (index) => index % PRICING_TIERS.length === selectedIndex.value;

    const onSwiperInit = (swiper) => {
      swiperInstance.value = swiper;
      updatePricing();
    };

    watchEffect(updatePricing);

    return {
      onSwiperInit,
      tiers: PRICING_TIERS,
      orderValue,
      finalPrice,
      productValue,
      isSelected,
      duplicatedTiers: [...PRICING_TIERS]
    };
  }
};
</script>

