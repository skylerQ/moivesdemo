//根组件，整个页面的内容靠该组件完成
import MoiveList from "./movieList.js"
import Page from "./page.js"
import Modal from "./modal.js"
import Nav from "./nav.js"

const template = `
     <div>
        <p v-if="isLoading" >欢迎你，{{$store.state.loginUser.data}}
           <button @click="exit">退出</button>
        </p>
        <p v-else>
        <router-link to='/login'>请登录</router-link>
        </p>

        <Nav/>
        <router-view></router-view>
        <MoiveList :arr="pageCult"/>
        <Page @foots="foot" :total="total" :current="current" :pageSize="pageSize" />
        <Modal>
        <template v-slot:bcd>
        tttt
        </template>
        <template v-slot:abc>
        qqqq
        </template>
        </Modal>
     </div>
`

export default {
    template:template,
    components:{
        MoiveList,
        Page,
        Modal,
        Nav
    },
    data(){
        return {
            pageSize: 4,//总容量
            current: 1,
            total: 20,
            arr: [
                {title: '蝙蝠侠1', id: 1},
                {title: '蝙蝠侠2', id: 1},
                {title: '蝙蝠侠3', id: 1},
                {title: '蝙蝠侠4', id: 1},
                {title: '蝙蝠侠5', id: 1},
                {title: '蝙蝠侠6', id: 1},
                {title: '蝙蝠侠7', id: 1},
                {title: '蝙蝠侠8', id: 1},
                {title: '蝙蝠侠9', id: 1},
                {title: '蝙蝠侠10', id: 1},
                {title: '蝙蝠侠11', id: 1},
                {title: '蝙蝠侠12', id: 1},
                {title: '蝙蝠侠13', id: 1},
                {title: '蝙蝠侠14', id: 1},
                {title: '蝙蝠侠15', id: 1},
                {title: '蝙蝠侠16', id: 1},
                {title: '蝙蝠侠17', id: 1},
                {title: '蝙蝠侠18', id: 1},
                {title: '蝙蝠侠19', id: 1},
                {title: '蝙蝠侠20', id: 1},
            ],
            all:[]
        }
    },
    methods:{
        foot(n){
           this.current = n;
        // this.all =  this.arr.slice((n-1)*this.pageSize,this.pageSize*n)  
        //    const a = this.arr.slice((n-1)*this.pageSize,this.pageSize*n)
        // return a;
        },
        exit(){
            localStorage.removeItem("loginUser");
            // localStorage.loginUser = ""
            this.$store.commit("loginUser/setIsLoading",{
                data:null,//当前登录的用户为空
                isLoading: false //当前正在登录
            }  );
            // localStorage.removeItem = 89798
            console.log(localStorage)
        }
    },

    computed:{
        pageCult(){
            console.log('触发')
            return this.arr.slice((this.current-1)*this.pageSize,this.pageSize*this.current)
        },
        isLoading(){
            // debugger;
           return this.$store.state.loginUser.isLoading
        }
    },
    mounted(){
        console.log(localStorage);
        if(localStorage.loginUser){
            const data = JSON.parse(localStorage.loginUser);
            console.log(data);
           if(data.isLoading){
                   this.$store.commit("loginUser/setIsLoading",data);
           }
        }
    },
}