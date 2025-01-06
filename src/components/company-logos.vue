<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <swiper
        :modules="[Autoplay]" 
        :slides-per-view="6"
        :space-between="50"
        :loop="true"
        :autoplay="{ delay: 2800 }"
        class="swiper grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <swiper-slide v-for="(image, index) in images" :key="index" class="flex justify-center items-center">
            <img :src="image" 
                 class="h-8 object-contain filter grayscale transition-all duration-300 ease-in-out hover:filter-none dark:brightness-100 dark:invert dark:hover:brightness-100 dark:hover:invert"
                 alt="">
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import activeAnts from '../assets/images/client/active-ants.png';
import amazon from '../assets/images/client/amazon.svg';
import axihandel from '../assets/images/client/axihandel.png';
import bol from '../assets/images/client/bol.png';
import bumbal from '../assets/images/client/bumbal.png';
import difox from '../assets/images/client/difox.png';
import effectconnect from '../assets/images/client/effectconnect.webp';
import goedgepickt from '../assets/images/client/goedgepickt.png';
import kaufland from '../assets/images/client/kaufland.png';
import lightspeed from '../assets/images/client/lightspeed.svg';
import logic4 from '../assets/images/client/logic4.png';
import magento from '../assets/images/client/magento.png';
import mediastore from '../assets/images/client/mediastore.png';
import montant from '../assets/images/client/monta.png';
import picqer from '../assets/images/client/picqer.svg';
import productflow from '../assets/images/client/productflow.webp';
import qls from '../assets/images/client/qls.png';
import shopwedo from '../assets/images/client/shopwedo.png';
import woocommerce from '../assets/images/client/woocommerce.svg';
export default {
    components: {
    Swiper,
    SwiperSlide,
  },
 data() {
    return {
        images: [
                activeAnts,
                amazon,
                axihandel,
                bol,
                bumbal,
                difox,
                effectconnect,
                goedgepickt,
                kaufland,
                lightspeed,
                logic4,
                magento,
                mediastore,
                montant,
                picqer,
                productflow,
                qls,
                shopwedo,
                woocommerce
            ]
    }
 },
 setup() {
      return {
        Autoplay,
      };
    }
}
</script>
