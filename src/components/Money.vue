<template>
    <div class="main">
        <div class="visible"></div>
        <div>{{amount}} рублей</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters(['amount'])
    },
    watch: {
        amount(){
            localStorage.amount = this.amount;
        }
    }  
}
</script>
<style scoped>
.visible {
    background: (255, 255, 255, 0);
    width: 80px;
    height: 20px;
}
.main {
    display: flex;
}
</style>
