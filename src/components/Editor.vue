<template>
  <div class="editor">
    <van-nav-bar
      title="个人信息"
      left-text="返回"
      right-text="保存"
      left-arrow
      @click-left="handleback"
      @click-right="saveInfo"
    />
    <van-cell-group>
      <van-field v-model="editInfo.userName" label="姓名" placeholder="请输入信息" />
      <van-field v-model="editInfo.email" label="邮箱" placeholder="请输入信息" />
      <van-field v-model="editInfo.phone" label="电话" placeholder="请输入信息" />
      <van-field v-model="editInfo.studentId" label="学号" placeholder="请输入信息" />
      <van-field v-model="editInfo.school" label="学校" placeholder="请输入信息" @focus="showSchoolList" />
      <van-field v-model="editInfo.major" label="专业" placeholder="请输入信息" />
      <van-field v-model="editInfo.college" label="学院" placeholder="请输入信息" />
      <van-field v-model="editInfo.wechat" label="微信" placeholder="请输入信息" />
      <van-field v-model="editInfo.qq" label="QQ" placeholder="请输入信息" />
    </van-cell-group>
    <van-action-sheet v-model="isShowSchoolList" title="选择学校">
      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onLoad"
      >
        <div slot="action" @click="onLoad">搜索</div>
      </van-search>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" style='maxHeight:50vh'>
        <van-cell v-for="item in list" :key="item.id" :title="item.name" @click="handleSelectSchool(item)" :class="[editInfo.school === item.name ?'selected': '']"/>
      </van-list>
    </van-action-sheet>
  </div>
</template>

<script>
import store from "@/store/index";
export default {
  name: "Editor",
  props: {},
  data() {
    return {
      editInfo: {},
      isShowSchoolList: false,
      loading: false,
      finished: false,
      list: [],
      searchVal: '',
    };
  },
  mounted() {
    const userInfo = (this.editInfo = { ...store.state.user });
  },
  created() {},
  methods: {
    handleback() {
      this.$emit("back", false);
    },
    saveInfo() {
      const user = JSON.parse(window.localStorage.getItem("user"));

      if (!this.editInfo.userId) {
        this.$toast("请先登录");
        this.$router.push('/')
        return;
      }
      const postData = { ...user, ...this.editInfo };

      this.$http("post", "/api/user/update", postData, {
        "Content-Type": "application/x-www-form-urlencoded"
      }).then(res => {
        store.mutations.setUser(postData);
        this.$toast(JSON.parse(res.data).msg);
      });
    },
    showSchoolList() {
      this.isShowSchoolList = true;
      this.searchVal = ''
      this.onLoad()
    },
    onLoad(){
      const data = {schoolName: this.searchVal}
      this.$http('get', `/api/school`, data).then(res=>{
          this.list = JSON.parse(res.data).data
          this.loading = false
          this.finished = true
        })
    },
    handleSelectSchool(e){
      console.log(e)
      this.editInfo.school = e.name
      this.$forceUpdate()
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .selected{
    color:aqua
  }
</style>
