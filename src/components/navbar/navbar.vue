<template>
    <nav id="topnav" class="defaultscroll is-sticky" :class="issticky">
        <div v-if="showBanner" class="flex items-center gap-x-6 bg-dropshiphub-primary-500 px-6 sm:px-3.5 sm:before:flex-1">
            <p class="text-sm/6 text-white">
                <a href="#">
                    <strong class="font-semibold">GeneriCon 2023</strong><svg viewBox="0 0 2 2" class="mx-2 inline size-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Join us in Denver from June 7 – 9 to see what's coming next&nbsp;<span aria-hidden="true">&rarr;</span>
                </a>
            </p>
            <div class="flex flex-1 justify-end">
                <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]" @click="closeBanner">
                    <span class="sr-only">Dismiss</span>
                    <span class="size-5 text-white" aria-hidden="true">X</span>
                </button>
            </div>
        </div>
        <div class="container relative">
            <div class="flex justify-between items-center"><div>
            <router-link v-if="lightlogo" class="logo" to="/">
                <img src="../../assets/images/logos/Dropshiphub_Logo_Horizontal.png" class="w-32 h-10 mb-2 inline-block dark:hidden" alt="">
                <img src="../../assets/images/logos/Dropshiphub_Logo_Black_background_Horizontal.png" class="w-32 h-10 mb-2 hidden dark:inline-block" alt="">
            </router-link>
            <router-link v-else class="logo" to="/">
                <span class="inline-block dark:hidden">
                    <img src="../../assets/images/logos/Dropshiphub_Logo_Horizontal.png" class="w-32 h-10 mb-2 l-dark" alt="">
                    <img src="../../assets/images/logos/Dropshiphub_Logo_Black_background_Horizontal.png" class="w-32 h-10 mb-2 l-light" alt="">
                </span>
                <img src="../../assets/images/logos/Dropshiphub_Logo_Black_background_Horizontal.png" class="w-32 h-10 mb-2 hidden dark:inline-block" alt="">
            </router-link>

            <div id="navigation" :class="toggle === false ? 'none' : 'block'">
                <ul class="navigation-menu " :class="navLight">
                    <li class="has-submenu parent-parent-menu-item  hover:text-dropshiphub-primary-500"
                        :class="['/portfolio-masonry-six', '/portfolio-detail-one', '/portfolio-detail-two', '/portfolio-detail-three', '/portfolio-detail-four'].includes(activeMenu) ? 'active' : ''">
                        <router-link to="" @click="submenu(menuOpen === '/index-portfolio-all' ? '' : '/index-portfolio-all')" class="hover:text-dropshiphub-primary-500">
                            Portfolio 
                            <span class="menu-arrow block md:hidden"></span> 
                        </router-link><span class="menu-arrow hidden md:block"></span>
                        
                        <ul class="submenu megamenu" :class="['/index-portfolio-all'].includes(menuOpen) ? 'open' : ''">
                            <li>
                                <ul>
                                    <li class="megamenu-head">Portfolio Detail</li>
                                    <li :class="activeMenu === '/portfolio-detail-one' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-one" class="sub-menu-item">
                                            Portfolio One
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-two' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-two" class="sub-menu-item">
                                            Portfolio Two
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-three' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-three" class="sub-menu-item">
                                            Portfolio Three
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-four' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-four" class="sub-menu-item">
                                           Portfolio Four
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li class="megamenu-head">Portfolio Detail</li>
                                    <li :class="activeMenu === '/portfolio-detail-one' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-one" class="sub-menu-item">
                                            Portfolio One
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-two' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-two" class="sub-menu-item">
                                            Portfolio Two
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-three' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-three" class="sub-menu-item">
                                            Portfolio Three
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-four' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-four" class="sub-menu-item">
                                           Portfolio Four
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <ul>
                                    <li class="megamenu-head">Portfolio Detail</li>
                                    <li :class="activeMenu === '/portfolio-detail-one' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-one" class="sub-menu-item">
                                            Portfolio One
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-two' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-two" class="sub-menu-item">
                                            Portfolio Two
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-three' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-three" class="sub-menu-item">
                                            Portfolio Three
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-four' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-four" class="sub-menu-item">
                                           Portfolio Four
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li class="megamenu-head">Portfolio Detail</li>
                                    <li :class="activeMenu === '/portfolio-detail-one' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-one" class="sub-menu-item">
                                            Portfolio One
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-two' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-two" class="sub-menu-item">
                                            Portfolio Two
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-three' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-three" class="sub-menu-item">
                                            Portfolio Three
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-four' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-four" class="sub-menu-item">
                                           Portfolio Four
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li class="megamenu-head">Portfolio Detail</li>
                                    <li :class="activeMenu === '/portfolio-detail-one' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-one" class="sub-menu-item">
                                            Portfolio One
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-two' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-two" class="sub-menu-item">
                                            Portfolio Two
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-three' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-three" class="sub-menu-item">
                                            Portfolio Three
                                        </router-link>
                                    </li>
                                    <li :class="activeMenu === '/portfolio-detail-four' ? 'active' : ''">
                                        <router-link to="/portfolio-detail-four" class="sub-menu-item">
                                           Portfolio Four
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li :class="activeMenu === '/helpcenter' ? 'active' : ''">
                    <router-link to="/helpcenter" class="sub-menu-item"> Helpcenter</router-link></li>
                </ul>
            </div>
            </div>
            <div class="flex items-center">
                <LanguageSwitcher />
                <ul class="navigation-menu" :class="navLight">
    <li :class="activeMenu === '/contact' ? 'active' : ''">
        <router-link :to="getLocalizedPath('/contact')" class="sub-menu-item">
            Contact
        </router-link>
    </li>
</ul>
            </div>
            <div class="lg:hidden menu-extras" @click="handler">
                <div class="menu-item">
                    <a class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
</template>

<script>
import feather from 'feather-icons'
import LanguageSwitcher from '../LanguageSwitcher.vue'
export default {
    props: {
        issticky: {
            type: String,
            required: true
        },
        lightlogo: {
            type: Boolean,
            required: true
        },
        navLight: {
            type: String,
            required: true
        },
        loginButton:{
            type: Boolean,
            required: true
        }
    },
    name: 'HelloWorld',
    data() {
        return {
            toggle: false,
            id: 1,
            activeMenu: '',
            menu: true,
            menuOpen: '',
            showBanner: true
        }
    },
    components: {
        LanguageSwitcher
    },
    mounted() {
        feather.replace()
        this.screenTop()
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.activeMenu = window.location.pathname;
        window.addEventListener("click", this.close);

    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        currentLocale() {
            return this.$i18n.locale.value;
        }
    },

    methods: {
        handler: function () {
            this.toggle = !this.toggle;
        },
        submenu(item) {
            this.menu = !this.menu
            this.menuOpen = item
        },
        handleScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
            }
        },
        screenTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        closeBanner() {
        this.showBanner = false
        },
        getLocalizedPath(path) {
            return this.currentLocale === 'nl' ? path : `/${this.currentLocale}${path}`;
        }
    },
}
</script>


