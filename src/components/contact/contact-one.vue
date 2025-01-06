<template>
    <section class="relative lg:py-24 py-16">
        <div class="container">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="lg:col-span-7 md:col-span-6">
                    <div class="lg:me-5">
                        <div class="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                            <h3 class="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>
                            <form @submit.prevent="submitForm">
                                <div class="grid lg:grid-cols-12 lg:gap-6">
                                    <div class="lg:col-span-6 mb-5">
                                        <div class="text-start">
                                            <label for="name" class="font-semibold">Your Name:</label>
                                            <input v-model="formData.name" type="text" id="name" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Name :">
                                        </div>
                                    </div>

                                    <div class="lg:col-span-6 mb-5">
                                        <div class="text-start">
                                            <label for="email" class="font-semibold">Your Email:</label>
                                            <input v-model="formData.email" type="email" id="email" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Email :">
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                        <div class="text-start">
                                            <label for="subject" class="font-semibold">Your Question:</label>
                                            <input v-model="formData.subject" type="text" id="subject" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Subject :">
                                        </div>
                                    </div>

                                    <div class="mb-5">
                                        <div class="text-start">
                                            <label for="message" class="font-semibold">Your Message:</label>
                                            <textarea v-model="formData.message" id="message" class="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                <div v-if="successMessage" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                    {{ successMessage }}
                                </div>
                                
                                <div v-if="errorMessage" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                    {{ errorMessage }}
                                </div>

                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-dropshiphub-primary-500 hover:bg-dropshiphub-primary-600 border-dropshiphub-primary-500 hover:border-dropshiphub-primary-600 text-white rounded-md">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { API_BASE_URL } from '@/config/config'

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            successMessage: '',
            errorMessage: ''
        }
    },
    methods: {
        async submitForm() {
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/v1/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: this.formData.email,
                    firstname: this.formData.name,
                    subject: this.formData.subject,
                    message: this.formData.message
                })
            })
            
            if (response.ok) {
                this.successMessage = 'Message sent successfully!'
                this.errorMessage = ''
                this.formData = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }
                setTimeout(() => {
                    this.successMessage = ''
                }, 5000)
            } else {
                const errorData = await response.json()
                throw new Error(errorData.message)
            }
        } catch (error) {
            this.errorMessage = error.message
            this.successMessage = ''
            setTimeout(() => {
                this.errorMessage = ''
            }, 5000)
        }
    }
}


}
</script>
