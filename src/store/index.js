import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        amount: 1,
        disabled: false
    },
    getters: {
        amount(store){
            return store.amount;
        },
        disabled(store){
            return store.disabled;
        }
    },
    mutations: {
       
        plus(store, data){
            const min = 2000;
            const max = 4000;
            // const min = 600000;
            // const max = 1800000;
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            store.disabled = true;
            setTimeout(() => {
                store.amount = store.amount + Number(data.forPlus);
                store.disabled = false;
            }, rand);
            
        },
        update(state, data){
            state.amount=Number(data);
        }
    },
    actions: {
        plus(store, data){
            
            store.commit('plus', data);
        }
    }
})