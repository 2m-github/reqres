<template>
    <div>
        json = 
        <div class="abc" v-for="(item,index) in jsondata" :key="index">
            {{ item }}
        </div>
        
        <b-table
            fixed
             :items="users"
             stacked="md"
        >
            <template slot="table-colgroup">
            <col style="width:5%">
            <col style="width:30%">
            <col style="width:20%">
            <col style="width:20%">
            <col >
            </template>
            <template v-slot:cell(first_name)="{item}">
                <b-input :value="item.first_name" />
            </template>
            <template v-slot:cell(last_name)="{item}">
                <b-input :value="item.last_name" />
            </template>
            <template v-slot:cell(avatar)="{item}">
                <img :src="item.avatar" alt="">
            </template>
        </b-table>
        <p>firstName = {{firstName}}</p>
        <p>fullName = {{fullName}}</p>
        <p>aPlus = {{aPlus}}</p>
        <p>a = {{a}}</p>
        <v-text-field v-model="firstName"></v-text-field>
        <v-text-field v-model="fullName"></v-text-field>
    </div>
</template>
<script>
import { getUsersAPI } from "@/store/api";
import { mapState } from "vuex";
import  datas  from "@/files/datas.json"
export default {
    name: 'BoardDetail',
    
    data(){
        return {
            myUser: {},
            users:{},
            people:{
                name:'a',
                sex:'m'
            },
            peopleInfo:{
                age:'16'
            },
            firstName:0,
            lastName:'',
            a:1,
            testArr:{},
            jsondata:datas
        }
    },
    computed:{
        ...mapState({
            drawer: 'drawer'
        }),
        // fullName:{
        //     set(v){
        //         console.log('this is SET function = ',v)
        //         // let names = v.split("-");
        //         // this.firstName = names[0];
        //         // this.lastName = names[1];
                
        //     },
        //     get(){
        //          console.log('this is GET function = ')
        //          return this.firstName + "-" + this.lastName;
        //     }
        // },
        fullName:{
            set(v){
                console.log('zhe shi set')
            },
            get(){
                console.log('zhe shi get')
                return parseInt(this.firstName) + 1
            }
        },
        
        aPlus:{
            get(){
                return this.a + 1
            }
        }
    },
    created(){
        getUsersAPI().then(res => {
            this.users = res.data.filter( user => {
                return user.id == this.$route.params.uid
            })
            
            
            //console.log('usersss==',this.users)
        });

        console.log('1111111111111111111111111111111',{...this.people,...this.peopleInfo})
        
        this.delay(2,(result) => {
            console.log(1,result)
        })

        this.delayP(1).then(res => {
            console.log('Promise1',res)
            return this.delayP(1)
        }).then(res=>{
            console.log('Promise2',res)
            return this.delayP(1)
        }).then(res=>{
            console.log('Promise3',res)
            
        })
        
        this.testArr.name = 'mingzi'
        //console.log()
        console.log('222222222222222222222222222222222222',this.testArr)
        
        
        
        
    },
    methods:{
        delay(sec, callback){
            setTimeout(() => {
                callback(new Date().toDateString())
            }, sec * 1000);
        },

        delayP(sec){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(sec+'================',new Date().toISOString())
                }, sec * 1000);
            })
        }
    },
    mounted(){
        
        //test
        console.log("test===");
        const arr = [
        {name:"a",age:"11"},
        {name:"b",age:"12"},
        {name:"c",age:"13"}
        ]
        arr.map(e => {
        console.log("test=>",e)
        })
        const set = new Set('hello')
        
        console.log('set',set.size)

        var ss = 3;
        switch(ss){
            case 1:
                console.log('1ss',ss)
            case 2:
                console.log('2ss',ss)
            case 38:
                console.log('3ss',ss)
            case 4:
                console.log('4ss',ss)
            default:
                console.log('5ss',ss)
        }
        function Str(e){
            this.name = e
        }
        var str = new Str('limin')
        console.log('-----', str.name);
        async function testAsync(){
            var a = 'test async'
            return a
        }
        testAsync().then(e => {
            
        })

        

        var y = 'abcde';
        
        var obj1 = {a:1};
        var obj2 = [{a:1}];
        obj2.push({c:2});
        //obj2[0].key3 = 33;
        var obj3 = {
            a:1,
            test:function(){
                console.log("word====","hahaha")
            }
        };
        
        console.log('Object=',obj3)
        console.log('params=',this.$route.path)
        obj3.test()
    }
}
</script>