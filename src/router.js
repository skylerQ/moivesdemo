import Home from "./pages/index.js"
import Movie from "./pages/moviePage.js"
import Movie1 from "./pages/moviePage1.js"
import MovieList from "./pages/moviePage2.js"
import Login from "./pages/login.js"
import store from "./store/index.js"

//1，路由配置
const router = new VueRouter({
    //路由配置对象
    routes:[
        {path:"/",component:Home},
        {path:"/movie",component:Movie,meta:{
            //自定义的数据，该数据通常会被导航守卫使用
            needLogin:true
        }},
        {path:"/movie1/:id",name:'movie1', component:Movie1},
        {path:"/movie/:id",component:MovieList},
        {path:"/login",component:Login},
    ]

})

router.beforeEach(function(to,from,next){
    // debugger;
    // console.log(to.meta.needLogin)
    // 第一个参数去的路径信息；第二个参数当前路由路径信息
    if(to.meta.needLogin){
        // 引入store才能使用
        store.state.loginUser.isLoading === true? next(): next('/login')
    }else{
        next();
    }
    
})
export default router;

