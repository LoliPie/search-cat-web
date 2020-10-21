<template>
  <div id="app">
    <transition name="fade">
      <pop-up @dismiss="togglePopup" v-if="popupState"></pop-up>
    </transition>

    <img
      src="./assets/logo.png"
      alt=""
      srcset=""
      style="width: 18rem; padding: 40px;min-width: 5rem"
      @click="togglePopup"
      class="big-logo"
    />
    <form action="">
      <!-- 在桌面端的搜索框 -->
      <input
        type="text"
        class="search-bar desktop"
        placeholder="喵嗷~"
        v-model="searchText"
        @keydown.299="null"
        @keydown.13="doSearch()"
        v-focus
      />

      <!-- 在移动端的搜索框 -->
      <input
        type="search"
        class="search-bar mobile"
        placeholder="在手机上喵嗷~"
        v-model="searchText"
        @keydown.299="null"
        @keydown.13="doSearch()"
        v-focus
      />
    </form>

    <div class="select-container">
      <search-select
        v-for="item in engineList"
        :key="item.id"
        :logo-url="item.imgUrl"
        :engine="item"
      >
      </search-select>
    </div>
  </div>
</template>

<script>
import searchSelect from './components/SearchSelect.vue'
import baiduImgUrl from './assets/baidu.png'
import data from './assets/data.js'
import popup from './components/Popup.vue'

export default {
  data() {
    return {
      searchText: '',
      // imgUrl: baiduImgUrl,
      engineList: data.engineList, // 搜索引擎数组
      popupState: false
    }
  },
  methods: {
    // 执行搜索动作
    doSearch: function() {
      let queryRegex = /{query}/
      let url = this.engineList.find(item => {
        return item.id == this.$store.state.currentEngineIndex
      }).searchUrl
      console.log(queryRegex.test(url))
      window.location.href = url.replace(queryRegex, this.searchText)
    },
    // 显示弹窗
    togglePopup: function() {
      this.popupState = !this.popupState
    }
  },
  components: {
    'search-select': searchSelect,
    'pop-up': popup
  },
  beforeCreate() {
    data.engineList.forEach(item => {
      // 使用 require 访问 assets 中的静态文件
      // 获得的地址存在 item.imgUrl 属性中
      item.imgUrl = require(`./assets/${item.imgName}.png`)
    })
  },
  directives: {
    focus: {
      inserted(el, binding) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  padding: 0;
  margin: 0;
  // height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  position: absolute;
  top: 15%;
  align-items: center;
  font-size: 16px;
  input::-webkit-input-placeholder {
    color: $black-20;
    font-weight: 600;
    font-size: 2rem;
  }
}

.big-logo:hover {
  cursor: pointer;
}

form {
  width: 60%;
  max-width: 800px;
  min-width: 320px;
  margin-bottom: 3rem;
  display: flex;
  justify-items: center;
  align-content: center;
}

.search-bar {
  width: 100%;
  background-color: $gray-04;
  font-size: 2rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3rem;
  border: none;
  margin: 0;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: $black-87;
}

.select-container {
  width: 60%;
  max-width: 750px;
  min-width: 300px;
  right: 2rem;
  display: flex;
  flex-wrap: wrap;
}

// 针对移动端优化
@media only screen and (max-width: 500px) {
  form {
    width: 80%;
    transition: 0.2s;
  }
  .select-container {
    width: 85%;
  }
  #app {
    top: 5%;
  }
}

input {
  outline: none;
}
textarea {
  outline: none;
}
</style>
