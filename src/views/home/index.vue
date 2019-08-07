<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to='/home/substitute'>代课</van-tabbar-item>
      <van-tabbar-item icon="search" to='/home/publish'>发布</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to='/home/course'>课程</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to='/home/my'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  name: "Home",
  props: {},
  data() {
    return {
      name: store.state.user.account,
      active: 0,
    };
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
