<template>
  <div id="app" class="container">
    <div class="col col-sm-9">
      <div class="row">
        <ul class="list-group">
          <router-link :to="{name: 'Money'}" tag="li" class="list-group-item "></router-link>
          <router-link :to="{name: 'Plus'}" tag="li" class="list-group-item"></router-link>
        </ul>
            </div>
      <div class="row info">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppMoney from './components/Money';
import AppPlus from './components/Plus';

export default {
  name: 'app',
  components: {
    AppMoney,
    AppPlus
  },
  mounted(){
    if(localStorage.amount > 1) {
      this.$store.commit('update', localStorage.amount)
    }
  },
  updated(){
    localStorage.amount = this.$store.getters.amount;
  }
}
</script>

<style lang="scss">
body {
  font-family:  Tahoma,  sans-serif;
  font-size: 12px;
}
.container {
  width: 1600px;
  height: 900px;
  background-image: url('assets/back.jpg');
  background-size: 1600px 900px;
  background-repeat: no-repeat;
  position: relative;
}
.menu{
		border-right: 1px solid #ddd;
	}
  .list-group {
    position: absolute;
    left: 424px;
    top: 196px;
    display: flex;
  }
  .info {
    position: absolute;
    left: 458px;
    top: 296px;
  }

	.list-group-item{
		transition: background 0.3s, color 0.3s;
    width: 87px;
    height: 36px;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    margin-right: 120px;
	}
</style>
