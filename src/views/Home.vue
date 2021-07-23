<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :mix='mix' @changemessage='changeAttr'>
          <!-- <template slot='book' slot-scope='info'>
                {{info.childinfo}}
          </template> -->

          <div slot="book" slot-scope="info">
            {{info.childinfo}}
          </div>
    </HelloWorld>
    <button @click="sendMessage2">改变信息—父组件改变</button>
    <router-view />
    <button @click="getStoreMessage">获取Vuex信息</button>
    <p>{{ getMessage }}</p>
    <ul>
      <li v-for="book,key in getBooks" :key='key'>{{ book.title }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld from '../components/HelloWorld.vue';
import {mapState, mapGetters} from 'vuex' // 首先导入mapState函数,直接使用展开法获取大量数据。

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    info: String
  },
  methods: {
    changeAttr() {
      this.mix = '我谁都不是'
    },
    sendMessage2() {
      this.$emit('changemessage');
    },
    getStoreMessage() {
      console.log(this.$store.state.messageCount);// 能够再store对象中共享数据。
      
    }
  },
  computed: {
    ...mapState({
      count: (state) => state.messageCount,
      Books: 'Books',
    }),
    ...mapGetters(['getMessage','getBooks']),  // 公用获取数据方法。
  },

  data() {
    return {
      mix: '我是谁？',
      books: [
        {
          author: 'John Smith',
          title: 'Best Of Times'
        },
        {
          author: 'Jane Doe',
          title: 'Go West Young Man'
        },
        {
          author: 'Avery Katz',
          title: 'The Life And Times Of Avery'
        }
      ]
    };
  },
  mounted() {
    this.$on('changemessage',this.changeAttr);
    
  },


  
}
</script>
