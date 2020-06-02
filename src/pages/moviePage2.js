//电影部分
const template = `
<div class="modal">
<h4 style="color:red">电影详情页</h4>
<button @click="son2" style="color:blue">go-1</button>
<button @click="back" style="color:green">返回首页</button>
</div>


`;

export default{
    template,
    methods:{
        back(){
              this.$router.push("/")
              console.log(this.$router)
        },
        son2(){
            this.$router.go(-1)
        }
    },
    mounted(){
        console.log(this.$route.params)
    }
}