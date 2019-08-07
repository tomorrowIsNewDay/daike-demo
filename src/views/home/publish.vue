<template>
  <div class="home">
    <h2>发布课程</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>

import store from '@/store/index'

export default {
  name: 'Publish',
  props: {
    
  },
  data(){
    return {
      name: store.state.user.account,
      form:{
        name: '',
        pwd: ''
      }
    }
  },
  created(){
    
  },
  methods:{
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
