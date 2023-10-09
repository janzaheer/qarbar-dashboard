import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Listing from '../components/propertyListing/Listing.vue';
import AgentList from '../components/agent/AgentList.vue';
import NewProjectsList from '../components/newProject/NewProjectsList.vue';
import AgentProfile from '../components/agent/AgentProfile.vue';
import AboutUs from '../components/aboutus/AboutUs.vue';
import DetailPage from '../components/propertyListing/DetailPage.vue';
import Login from '../components/auth/Login.vue';
import SignUp from '../components/auth/SignUp.vue';
import PageNotFound from '../router/PageNotFound.vue';
import BuyPage from '../components/propertyListing/BuyPage.vue';
import RentPage from '../components/propertyListing/RentPage.vue';
import AgentRegister from '../components/auth/AgentRegister.vue';
import NewProjectDetails from '../components/newProject/NewProjectDetails.vue'
// agent panel 
import AgentView from '../views/AgentView.vue'
import AgentDashboard from '../agentpanel/agentDashboard/AgentDashboard.vue';
import AddAdvertisement from '../agentpanel/addAdvertisement/AddAdvertisement.vue';
import UpdateAdvertisement from '../agentpanel/updateAdvertisement/UpdateAdvertisement.vue'
// import Dashboard from '../agentpanel/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Route for the 404 page
    {
      path: '/:catchAll(.*)',
      component: PageNotFound
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/listing',
      name: 'Listing',
      component: Listing
    },
    {
      path: '/buyPage',
      name: 'BuyPage',
      component: BuyPage
    },
    {
      path: '/rentPage',
      name: 'RentPage',
      component: RentPage
    },
    {
      path: '/detailPage/:id',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/agentsList',
      name: 'AgentList',
      component: AgentList
    },
    {
      path: '/agentprofile/:id',
      name: 'AgentProfile',
      component: AgentProfile
    },
    {
      path: '/newProjectsList',
      name: 'NewProjectsList',
      component: NewProjectsList
    },
    {
      path: '/newProjectDetails/:id',
      name: 'NewProjectDetails',
      component: NewProjectDetails
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/agentRegister',
      name: 'AgentRegister',
      component: AgentRegister
    },
    {
      path: '/agentpanel',
      name: 'AgentView',
      components: {
        default: AgentView,
        agentPanel: AgentView,
      }
    },
    {
      path: '/agentDashboard',
      name: 'AgentDashboard',
      component: AgentDashboard
    },
    {
      path: '/addAdvertisement',
      name: 'AddAdvertisement',
      component: AddAdvertisement
    },
    {
      path: '/updateAdvertisement/:id',
      name: 'UpdateAdvertisement',
      component: UpdateAdvertisement
    }
    // {
    //   path : '/agentdashboard',
    //   name: 'Dashboard',
    //   components: {
    //     default: Dashboard,

    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})


export default router
