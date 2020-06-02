// import store from "../store";

const template = `
<div class="modal">
<h4 style="color:red">登录页面</h4>
<button @click="son" style="color:blue">登录</button>
</div>
`;

export default{
    template,
    methods:{
        son(){
            this.$store.dispatch("loginUser/login")
            //第一个参数是触发这个函数，第二参数是改变登录状态
            // this.$store.commit("setIsLoading",{
            //     data:'tutu',//当前登录的用户为空
            //     isLoading: true //当前正在登录
            // });
            console.log(this.$store.state.loginUser);
            this.$router.push('/')
        }
    },
    mounted(){
        console.log(this.$store.state.loginUser);
    }
}