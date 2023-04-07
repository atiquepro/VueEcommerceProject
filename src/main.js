import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ProductsPage from './views/ProductsPage.vue'
import ProductDetailPage from './views/ProductDetailPage.vue'
import CartPage from './views/CartPage.vue'



const routes = [
    {path: '/products', name:'Products', component: ProductsPage},
    {path: '/products/:id', name:'ProductDetail', component: ProductDetailPage},
    {path: '/cart', name:'Cart', component: CartPage},
    {path: '/', redirect: '/products'}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
