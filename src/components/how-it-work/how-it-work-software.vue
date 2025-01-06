<template>
    <section class="relative md:py-24 py-16 overflow-hidden">
      <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3 class="mb-6 text-3xl font-semibold font-semibold sm:text-4xl md:leading-normal leading-normal font-semibold">
            {{ $t('howItWorks.title') }}
          </h3>
        </div>
        <!-- Desktop -->
        <div class="hidden md:block">
          <div class="grid md:grid-cols-3 justify-items-center">
            <div v-for="step in topSteps" :key="step.title"
                 class="group hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 rounded-xl overflow-hidden text-center w-full max-w-md">
              <div class="relative overflow-hidden text-transparent -m-3">
                <i data-feather="hexagon" class="size-28 fill-dropshiphub-primary-500/5 dark:fill-white/5 mx-auto rotate-[30deg]"></i>
                <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-dropshiphub-primary-500 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                  <i :class="step.icon"></i>
                </div>
              </div>
              <div class="mt-6 px-2 lg:px-12 xl:px-16">
                <a href="" class="text-xl font-medium hover:text-dropshiphub-primary-500 duration-500 ease-in-out">
                  {{ step.title }}
                </a>
                <p class="text-slate-400 duration-500 mt-3">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 justify-items-center mt-8 px-32">
            <div v-for="step in bottomSteps" :key="step.title"
                 class="group hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center w-full max-w-md">
              <div class="relative overflow-hidden text-transparent -m-3">
                <i data-feather="hexagon" class="size-28 fill-dropshiphub-primary-500/5 dark:fill-white/5 mx-auto rotate-[30deg]"></i>
                <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-dropshiphub-primary-500 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                  <i :class="step.icon"></i>
                </div>
              </div>
              <div class="mt-6 px-2 lg:px-12 xl:px-16">
                <a href="" class="text-xl font-medium hover:text-dropshiphub-primary-500 duration-500 ease-in-out">
                  {{ step.title }}
                </a>
                <p class="text-slate-400 duration-500 mt-3">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Mobile -->
        <div class="md:hidden grid grid-cols-1 gap-[30px] justify-items-center">
          <div v-for="step in mobileSteps" :key="step.title"
               class="group hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center w-full max-w-md">
            <div class="relative overflow-hidden text-transparent -m-3">
              <i data-feather="hexagon" class="size-28 fill-dropshiphub-primary-500/5 dark:fill-white/5 mx-auto rotate-[30deg]"></i>
              <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-dropshiphub-primary-500 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i :class="step.icon"></i>
              </div>
            </div>
            <div class="mt-6 px-12">
              <a href="" class="text-xl font-medium hover:text-dropshiphub-primary-500 duration-500 ease-in-out">
                {{ step.title }}
              </a>
              <p class="text-slate-400 duration-500 mt-3">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    computed: {
      allSteps() {
        return [
          {
            icon: 'uil uil-airplay',
            title: this.$t('howItWorks.steps.products.title'),
            description: this.$t('howItWorks.steps.products.description')
          },
          {
            icon: 'uil uil-cog',
            title: this.$t('howItWorks.steps.orders.title'),
            description: this.$t('howItWorks.steps.orders.description')
          },
          {
            icon: 'uil uil-envelope',
            title: this.$t('howItWorks.steps.sending.title'),
            description: this.$t('howItWorks.steps.sending.description')
          },
          {
            icon: 'uil uil-shutter',
            title: this.$t('howItWorks.steps.dataMerging.title'),
            description: this.$t('howItWorks.steps.dataMerging.description')
          },
          {
            icon: 'uil uil-comment',
            title: this.$t('howItWorks.steps.orderRouting.title'),
            description: this.$t('howItWorks.steps.orderRouting.description')
          }
        ]
      },
      topSteps() {
        return [this.allSteps[0], this.allSteps[1], this.allSteps[2]]
      },
      bottomSteps() {
        return [this.allSteps[3], this.allSteps[4]]
      },
      mobileSteps() {
        return [
          this.allSteps[0], 
          this.allSteps[3], 
          this.allSteps[1], 
          this.allSteps[4], 
          this.allSteps[2]  
        ]
      }
    }
  }
  </script>
  