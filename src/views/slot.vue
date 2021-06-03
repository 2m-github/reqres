<template>
    <div>
        <slot-component>
            <template #title="props">
                <div>
                    <span>123123123 {{props.first_name}}</span>
                    <p>asnfiwenf</p>
                </div>
           </template>
        </slot-component>
    </div>
</template>
<script>
import SlotComponent from './SlotComponent.vue'
export default {
    name: 'slot',
    components:{
        SlotComponent
    }
}
</script>