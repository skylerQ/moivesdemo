//电影部分
const template = `
<div class="modal">
<h4 style="color:red">电影</h4>
<button @click="btn">push</button>
<router-link :to="{name:'movie1',params:{id:9496}}">router-link</router-link>
<button @click="chongzhi" style="color:green">replace</button>
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
        chongzhi(){
            // 不传值404，瞎传值提升错误，不显示对应内容
            this.$router.push("/movie1")
        },
        btn(){
            this.$router.push({name:'movie1',params:{id:996,hh:999}})
        }
    },

}