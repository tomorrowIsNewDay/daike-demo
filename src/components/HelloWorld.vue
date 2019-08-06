<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="pp">
      name: <input type="text" v-model="form.name" />
      pwd: <input type="text" v-model="form.pwd" />
      <input value="提交" type='submit' />
    </form>
    <button @click="post1">button</button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      form:{
        name: '',
        pwd: ''
      }
    }
  },
  created(){
    this.$http('get', '/api/get').then(res => {
      console.log(res)
    }).catch(err=>{
      console.error(err)
    })
  },
  methods:{
    pp(){
      this.$http('post', '/api/register', {
        ...this.form
      },{'Content-Type': 'application/x-www-form-urlencoded'}).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.error(err)
      })
    },
    post1() {
      let data = {
        msg: 'hellowd',
        age: 12
      }
      this.$http('post', '/api/register', data, { 'Content-Type': 'application/json;charset=utf-8' }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
