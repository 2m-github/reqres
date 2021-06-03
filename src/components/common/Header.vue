<template>
<div>
    <nav>
        <div class="skipnavi">
            <a href="#contents">본문 바로가기</a>
            <a href="#menu">주메뉴 바로가기</a>
        </div>
        <ul id="menu" class="gnb">
            <li>
                <router-link to="/">HOME</router-link>
                <ul class="sub-menu">
                    <li>
                        <a href="#">A</a>
                    </li>
                    <li>
                        <a href="#">B</a>
                    </li>
                    <li>
                        <a href="#">C</a>
                    </li>
                </ul>
            </li>
            <li>
                <router-link to="/about">ABOUT</router-link>
            </li>
            <li>
                <router-link to="/boardlist">BOARD</router-link>
                <ul class="sub-menu">
                    <li>
                        <a href="#">A</a>
                    </li>
                    <li>
                        <a href="#">B</a>
                    </li>
                    <li>
                        <a href="#">C</a>
                    </li>
                </ul>
            </li>
            <li>
                <router-link to="/login">LOGIN</router-link>
            </li>
        </ul>
        <div id="contents">123123</div>
    </nav>
</div>
</template>

<script>

export default {
    name: 'Head',
    data() {
        return {
            
        }
    },
    computed:{
        
    },
    methods:{
        
    },
    mounted(){
        $('.gnb > li').mouseenter(function(){
            
        })
    }
}
</script>
