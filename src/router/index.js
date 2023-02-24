import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import taskview from '../views/projectpage.vue'
import signinView from '../views/signinView.vue'
import signUpView from '../views/signupView.vue'

const routes = [

	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/project/:projectName',
		name: 'project',
		component: taskview
	},
	{
		path: '/signin',
		component: signinView
	},
	{
		path: '/signup',
		component: signUpView
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router