<template>
    <div class="container relative md:my-24 my-16">
        <div class="grid grid-cols-1 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                {{ $t('getInTouch.helpCenter.title') }}
            </h3>    
            <p class="text-slate-400 max-w-xl mx-auto">
                {{ $t('getInTouch.helpCenter.description') }}
            </p>
            <div class="mt-6">
                <router-link 
                    to="/contact" 
                    class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-dropshiphub-primary-500 hover:bg-dropshiphub-secondary-500 text-white rounded-md me-2 mt-2"
                >
                    <i :class="$t('getInTouch.helpCenter.button.icon')"></i> 
                    {{ $t('getInTouch.helpCenter.button.text') }}
                </router-link>
            </div>
        </div>
    </div>
</template>


<script setup></script>
