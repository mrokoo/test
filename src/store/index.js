import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageCount: 10,
    Books: [
      {
        author: '罗贯中',
        title: '三国演义'
      },
      {
        author: '施耐庵',
        title: '水浒传'
      },
      {
        author: '曹雪芹',
        title: '红楼梦'
      },
      {
        author: '吴承恩',
        title: '西游记'
      }
    ],
    name: '你好世界'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getMessage: (state) => state.messageCount,
    getBooks: state => state.Books
  }
})
