<template>
  <div class="my">
    
    <van-popup
      class='popup-overlay'
      v-model="show"
      position="right"
      :overlay="false"
    >
      <Editor 
        @back="showEditorPage"
      />
    </van-popup>

    <van-image width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <h5>name</h5>
    <van-button type="primary" @click="showEditorPage(true)">
      编辑个人信息
    </van-button>
    <div class="my-infos">
      <p><span>学号</span> 123 </p>
      <p><span>学号</span> 123 </p>
    </div>
    
  </div>
</template>

<script>
import store from "@/store/index";
import Editor from '@/components/Editor'

export default {
  name: "My",
  props: {},
  data() {
    return {
      name: store.state.user.account,
      show: false,
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  created() {},
  mounted(){

  },
  components: {
    Editor
  },
  methods: {
    showEditorPage(falg){
      this.show = falg
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my {
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
}
.popup-overlay{
  width: 100%;
  height: 100%;
}
</style>
