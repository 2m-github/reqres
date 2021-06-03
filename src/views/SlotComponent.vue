<template>
    <div>
        <h1>title</h1>
        <slot name="title" :first_name="first_name"></slot>
    </div>
</template>
<script>
export default {
    
    data(){
        return {
            first_name: 'lee'
        }
    }
}
</script>