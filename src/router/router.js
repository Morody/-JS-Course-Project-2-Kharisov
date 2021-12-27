import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/catalog/v-catalog'
import vBucket from '../components/bucket/v-bucket'
import vRegistration from '../components/registration/v-registration'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/bucket',
            name: 'bucket',
            component: vBucket,
            props: true
        },
        {
            path: '/registration',
            name: 'registration',
            component: vRegistration
        }
    ]
})

export default router;
