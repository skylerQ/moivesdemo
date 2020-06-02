//电影部分
const template = `
<div class="modal">
<h4 style="color:red">电影分页1</h4>
<button @click="son1" style="color:blue">go1</button>
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
        son1(){
            this.$router.go(1)
            console.log(this.$router)
      }
    },
    mounted(){
        console.log(this.$route.params)
    }
}