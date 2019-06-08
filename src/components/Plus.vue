<template>
    <div class="main">
        <div class="left">
            <div class="line">Сколько получить</div>
            <div class="line mbot"></div>
            <div class="line"></div>
        </div>
        <div class="right">
            <input type="text" v-model="forPlus" class="inp">
            <br>
            <button @click="onClick" class="btn btn-primary" :disabled="disabled">Подтвердить</button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            forPlus: 0
        }
    },
    computed: {
        ...mapGetters(['amount', 'disabled'])
    },
    methods: {
        onClick(){
            this.$store.dispatch('plus', {forPlus: this.forPlus});
            localStorage.amount = this.$store.getters.amount;
        }
    },
    watch: {
        amount(){
            localStorage.amount = this.amount;
        }
    }
}
</script>
<style scoped>
.main {
    display: flex;
}
.left {
    margin-right: 15px;
}
.line {
    min-width: 80px;
    height: 30px;
    background: rgba(240, 240, 240, 1);
}
.mbot {
    margin-bottom: 15px;
}
.inp {
    margin-bottom: 50px;
}
.btn.disabled {
    opacity: 1;

}
</style>
