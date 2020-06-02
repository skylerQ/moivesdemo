//仅负责启动vue时的配置，所有界面交给app组件来渲染
import App from "./app.js"
import router from "./router.js"
import store from "./store/index.js"



new Vue({
    template:`<App/>`,
    components:{
        App
    },
    el:"#app", 
    router: router, //2，路由配置
    store,
})