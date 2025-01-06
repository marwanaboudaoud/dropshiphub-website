import { createWebHistory, createRouter } from "vue-router";
import { i18n } from '../plugins/i18n'

const routes = [
  {
    path: "/:locale?",
    name: "index",
    component: () => import('../pages/index.vue'),
  },
  {
    path: "/:locale?/contact",
    name: "contact",
    component: () => import('../pages/contact-one.vue'),
  },
  {
    path: "/:locale?/helpcenter",
    name: "helpcenter",
    component: () => import('../pages/helpcenter/helpcenter.vue'),
  },
  {
    path: "/:locale?/helpcenter-faqs",
    name: "helpcenter-faqs",
    component: () => import('../pages/helpcenter/helpcenter-faqs.vue'),
  },
  {
    path: "/:locale?/helpcenter-guides",
    name: "helpcenter-guides",
    component: () => import('../pages/helpcenter/helpcenter-guides.vue'),
  },
  {
    path: "/:locale?/helpcenter-guides",
    name: "helpcenter-guides",
    component: () => import('../pages/helpcenter/helpcenter-guides.vue'),
},
{
    path: "/:locale?/helpcenter-guides/:guide",
    name: "guide-content",
    component: () => import('../pages/helpcenter/guides-features.vue'),
}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const savedLocale = localStorage.getItem('locale');
  const locale = to.params.locale || savedLocale || 'nl';
  
  if (!['en', 'nl'].includes(locale)) {
    return;
  }
  
  i18n.changeLanguage(locale);
  
  if (locale === 'en' && !to.path.startsWith('/en')) {
    next(`/en${to.path}`);
    return;
  }
  
  next();
});

export default router;
