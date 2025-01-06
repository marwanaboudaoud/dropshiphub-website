<template>
    <div class="container relative my-8">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <img src="../../assets/images/shape-image.png" alt="">
            <div class="lg:ms-8">
                <h4 class="mb-4 text-3xl font-semibold font-semibold  sm:text-4xl leading-normal font-medium" v-html="$t('softwareAnalytics.title')"></h4>
                <p class="text-slate-400">
                    {{ $t('softwareAnalytics.description') }}
                </p>
                <ul class="list-none text-slate-400 mt-4">
                    <li v-for="(feature, index) in translatedFeatures" :key="index" class="mb-1 flex">
                        <i class="uil uil-check-circle text-dropshiphub-primary-500 text-xl me-2"></i> {{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SoftwareAnalytics',
    computed: {
        translatedFeatures() {
            return this.$t('softwareAnalytics.features');
        }
    }
}
</script>
