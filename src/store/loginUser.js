export default{
    namespaced:true,//开启命名空间
    state:{
            data:null,//当前登录的用户为空
            isLoading: false, //当前正在登录
            name:'yu'  
    },
    mutations: {//配置的是状态有哪些变化，每一个变化是一个函数
        setIsLoading(state,payload){ //用于改变是否正在登录的状态
            //参数state:表示当前的状态
            //payload(负载)：可选的，该参数表示额外的信息
            state.isLoading = payload.isLoading;
            state.data = payload.data;
            
        },
    },
    actions:{
        login(context,payload){
            const data = {
                data:'tutu',//当前登录的用户为空
                isLoading: true //当前正在登录
            }
            //额外的操作，保存用户信息到localStorage
            localStorage.setItem("loginUser",JSON.stringify(data));
            context.commit("setIsLoading", data)
        }
    }
}