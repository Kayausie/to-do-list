// Import the main CSS file for global styles
import './assets/main.css'

// Import core Vue functions
import { createApp } from 'vue'       // Used to create a Vue application instance
import { createPinia } from 'pinia'   // Pinia is the state management library

// Import the root component and the router
import App from './App.vue'           // The main Vue component (entry point)
import router from './router'         // The router configuration file

// Create a new Vue application instance using the App component
const app = createApp(App)

// Register Pinia (state management) and the Router (for page navigation)
app.use(createPinia())
app.use(router)

// Mount the app to the <div id="app"> element in index.html
app.mount('#app')
