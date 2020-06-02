const template = `
    <div>
    <div>{{item.title}}</div>
    <div>{{item.id}}</div>
    </div>
`;

export default{
    template,
    props:{
        item:{
            type:Object,
            default:{}
        }
    }
}