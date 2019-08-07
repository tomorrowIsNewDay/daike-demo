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
      <van-field v-for='(item,index) in form' :key='index' v-bind="item.value" :label='item.label' placeholder="请输入信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {

  },
  data() {
    return {
      form: {
        // userId: {
        //   label: '用户名',
        //   value: ''
        // },
        // account: {
        //   label: '用户名',
        //   value: ''
        // },
        userName: {
          label: '姓名',
          value: ''
        },
        email: {
          label: '邮箱',
          value: ''
        },
        phone: {
          label: '电话',
          value: ''
        },
        // headerImg: {
        //   label: '',
        //   value: ''
        // },
        studentId: {
          label: '学号',
          value: ''
        },
        school: {
          label: '学校',
          value: ''
        },
        // schoolId: {
        //   label: '学院',
        //   value: ''
        // },
        // provinceId: {
        //   label: '专业',
        //   value: ''
        // },
        major: {
          label: '专业',
          value: ''
        },
        college: {
          label: '学院',
          value: ''
        },
        wechat: {
          label: '微信',
          value: ''
        },
        qq: {
          label: 'QQ',
          value: ''
        }
      }
    };
  },
  created() {},
  methods: {
    handleback() {
      this.$emit("back", false);
    },
    saveInfo() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
