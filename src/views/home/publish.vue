<template>
  <div class="publishWrap">
    <h5>发布课程</h5>
    <van-cell-group>
      <van-field v-model="userInfo.school" label="学校名" disabled />
      <van-field v-model="courseInfo.courseName" label="课程名称" required />
      <van-field v-model="courseInfo.courseTime" label="上课课时" required />
      <van-field v-model="courseInfo.coursePlace" label="上课地点" required />
    </van-cell-group>
    <h5>分享以下信息给代课人：</h5>
    <van-cell-group>
      <van-field v-model="userInfo.userName" label="姓名" disabled />
      <van-field v-model="userInfo.studentId" label="学号" disabled/>
      <van-field v-model="userInfo.phone" label="电话" disabled/>
      <van-field v-model="courseInfo.reward" label="赏金" />
      <van-field
        v-model="courseInfo.remark"
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        rows="2"
        autosize
      />
    </van-cell-group>
    <p class="text-right">
      <van-button @click="handlePublish" type='primary' size="small">发布</van-button>
    </p>
    
  </div>
</template>

<script>
import store from "@/store/index";
import { userInfo } from 'os';

export default {
  name: "Publish",
  props: {},
  data() {
    return {
      courseInfo: {}
    };
  },
  created() {},
  computed: {
    userInfo: {
      get() {
        return this.$store.getters["user/user"];
      }
    }
  },
  methods: {
    handlePublish() {
      let params = {...this.courseInfo, ...this.userInfo, ...{publisher: this.userInfo.userId}}
      this.$store.dispatch("course/publish", params);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.publishWrap {
  padding: 10px;
}
.text-right{
  text-align: right
}
</style>
