import Moive from "./moive.js"

const template = `
    <div>
    <div @click="moive">btn</div>
    <div v-for="(item,index) in arr">
    <Moive :item="item" />
    </div>

    </div>
`;


export default {
    template,
    components:{
        Moive
    },
    props:{
        arr:{
            type:Array,
            default:[],
        }
    },
    methods:{
        moive(){
            console.log(this.arr);
        }
    }
}