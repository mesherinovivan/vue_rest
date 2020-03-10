<template>
    <div>
        <button v-on:click="childInc">ChildInc</button>
        <slot></slot>
        
        <table>
            <tr>
                <td>
                    <slot name="title_slot"></slot>
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
        </table>
        
        </div>
</template>
<script>

export default {
    name: 'child',
    methods:{
        childInc(){
            this.$emit('inc-me');
        }
    }
    
}
</script>
<style scoped>

</style>

