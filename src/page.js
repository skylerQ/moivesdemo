// import axios from '../node_modules/axios/dist/axios.js'
//var axios = require('../node_modules/axios/index.js');


const template = `
    <div class="pager">
    <a @click="changePage(1)" class="pager-item" :class="{disabled:current === 1}">首页</a>
    <a @click="changePage(current - 1)" class="pager-item" :class="{disabled: current === 1}">◂</a>
    
    <a class="pager-item" @click="changePage(item)" :class="{active:item === current}" v-for="item in numbers">{{item}}</a>

    <a @click="changePage(current + 1)" class="pager-item" :class="{disabled: current === pageNumber}">▸</a>
    <a @click="changePage(pageNumber)" class="pager-item" :class="{disabled: current === pageNumber}">尾页</a>
    <span class="pager-text">
    <i>{{current}}</i>
    /
    <i>{{pageNumber}}</i>
    </span>
    </div>
`;


export default {
    template,
    // props:["total","pageSize","panelNumber","current"],
    props: {
        total: {
           type:Number,
           default:100
        },
        current:{
            type:Number,
            default:1
        },
        pageSize:{
            type:Number,
            default:4
        }
    },







    data() {
        return {//返回的结果时组件的状态
            // current:1,//当前页码
            // total:200,//总数据量
            // pageSize: 4,//总容量
            panelNumber: 3,//最多显示的数字的页码数量
            // className:'pager-item'
        }
    },
    computed: {
        pageNumber() {//总页数,天花板函数，做成向上取整的数据
            return Math.ceil(this.total / this.pageSize)
        },
        numbers() {
            //用于得到一个数字的数组
            var min = this.current - Math.floor(this.panelNumber / 2)
            if (min < 1) {
                min = 1;
            }
            //最大页码数字
            var max = min + this.panelNumber - 1;
            if (max > this.pageNumber) {
                max = this.pageNumber;
            }
            const arr = [];
            for (let i = min; i <= max; i++) {
                arr.push(i);
            }
            return arr;
        }
    },
    methods: {
        //    确认当前页数
        changePage(newPage) {
            if (newPage < 1) {
                newPage = 1;
            } else if (newPage > this.pageNumber) {
                newPage = this.pageNumber
            }
            // this.current = newPage;
            this.$emit("foots", newPage);
            console.log(newPage)
        },
    }
}