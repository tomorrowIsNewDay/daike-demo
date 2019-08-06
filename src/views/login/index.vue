<template>
  <div class="login">
    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <van-cell-group class="box">
      <van-field
        v-model="user.account"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field
        v-if="!isLoginStatus"
        v-model="repassword"
        type="password"
        label="重复密码"
        placeholder="请再次输入密码"
        required
      />
    </van-cell-group>
    <van-row>
      <van-col span="5" offset="6">
        <van-button
          type="default"
          size="small"
          @click="handleRegister"
        >{{ isLoginStatus ? '注册' : '已有账号' }}</van-button>
      </van-col>
      <van-col span="5" offset="1">
        <van-button
          type="primary"
          size="small"
          @click="handleLogin"
        >{{ isLoginStatus ? '登录' : '注册并登录'}}</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        account: "",
        password: ""
      },
      repassword: "",
      isLoginStatus: true
    };
  },
  created() {},
  methods: {
    handleRegister() {
      this.isLoginStatus = !this.isLoginStatus;
    },
    handleLogin() {
      let url = "/api/login";

      if (!this.isLoginStatus) {
        url = "/api/register";
        if ( this.user.password !== this.repassword ){
            this.$toast('密码不一致')
            return
        }
      }

      this.$http(
        "post",
        url,
        { ...this.user },
        { "Content-Type": "application/x-www-form-urlencoded" }
      )
        .then(res => {
          console.log(res);
          const responese = JSON.parse(res.data)
          if(responese.code == 1){
            this.$toast(responese.msg)
            store.mutations.setUser(responese.data)
            
            this.$router.push('./home')
          }else {
            this.$toast(responese.msg)
          }
          
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  padding: 0 20px;
  margin: 20px 
}
</style>
