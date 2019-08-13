<template>
  <div class="my">
    <van-popup class="popup-overlay" v-model="show" position="right" :overlay="false">
      <Editor @back="showEditorPage" />
    </van-popup>
    <van-row type="flex">
      <van-col span="8">
        <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-col>
      <van-col span="8">
        <h5>{{ userInfo.account }}</h5>
      </van-col>
      <van-col span="8">
        <van-button type="primary" @click="showEditorPage(true)">编辑个人信息</van-button>
      </van-col>
    </van-row>
    <van-row v-for='(k,v) in userStrMap' :key='k' type='flex'>
      <van-col span="5" offset='1'>
        {{k}}
      </van-col>
      <van-col span="8">
          {{userInfo[v]}}
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Editor from "@/components/Editor";

const userStrMap = {
  studentId: '学号',
  school: '学校',
  college: '学院',
  major: '专业',
  phone: '电话',
  email: '邮箱',
  wechat: '微信号',
  qq: 'QQ'
}

export default {
  name: "My",
  props: {},
  data() {
    return {
      // userInfo: store.state.user,
      show: false,
      userStrMap: userStrMap
    };
  },
  created() {},
  computed: {
    userInfo: {
      get(){
        return this.$store.getters['user/user']
      }
    }
  },
  mounted() {},
  components: {
    Editor
  },
  methods: {
    showEditorPage(falg) {
      this.show = falg;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .my {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
}
.my-infos{
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
}
.my-infos>p{
  flex-basis: 100%
} */
.popup-overlay {
  width: 100%;
  height: 100%;
}
</style>
