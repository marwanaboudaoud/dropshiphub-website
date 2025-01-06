<template>
    <div class="container relative md:mt-24 my-16">
        <div class="relative isolate overflow-hidden px-6 py-12 sm:px-24">
            <h3 class="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                {{ $t('newsletter.title') }}
            </h3>
            <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-900 dark:text-gray-400">{{$t('newsletter.description') }}</p>
            <form class="mx-auto mt-10 flex max-w-md gap-x-4" @submit.prevent="handleSubscribe">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" v-model="subscribeEmail" name="email" type="email" autocomplete="email" required
                        class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 outline-none text-gray-900 dark:text-white dark:bg-slate-800 shadow-sm ring-1 ring-inset ring-dropshiphub-primary-500/10 focus:ring-2 focus:ring-inset focus:ring-dropshiphub-primary-500 sm:text-sm/6"
                        :placeholder="$t('newsletter.placeholder')" />
                <button type="submit"
                    class="flex-none rounded-md bg-dropshiphub-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dropshiphub-secondary-500">
                    {{ $t('newsletter.buttonText') }}
                </button>
            </form>
            <div v-if="successMessage" class="mt-4 text-center text-sm text-green-600">
                {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="mt-4 text-center text-sm text-red-600">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>

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
    }
}
</script>
