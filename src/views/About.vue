<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ mesg }}</p>
    <button @click="mesgdadd">添加</button>
    <button @click="printMessage">打印消息</button>
    <router-link to="/123456" tag="li" @click.native="sayHello"><a>About</a></router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mesg: 1,
    }
  },
  methods: {    
    mesgdadd() {
      this.mesg++
      console.log(this.$route.path);
    },
    sayHello() {
      this.$router.push('/')
    },
    printMessage() {
      console.log(this.$router)
    }
  },
  mounted() {
    console.log(this.$route.params.UserId);
  },
  beforeUpdate() {
    console.log(this.$route.params.UserId);  
  },
  destroyed() {
    console.log('我要被销毁了');
  },
  beforeRouteUpdate(to, from, next) { // 只有通过router-link标签才能发生响应。 // 路由导航钩子
    console.log('路由发生改变');
    console.log(to);
    console.log(from)
    next()
  }
}
</script>
