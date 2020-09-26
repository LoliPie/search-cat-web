<template>
  <div id="app">
    <img
      src="./assets/logo.png"
      alt=""
      srcset=""
      style="width: 300px; padding: 40px"
    />

    <input
      type="text"
      class="search-bar"
      placeholder="喵嗷~"
      v-model="searchText"
      @keydown.299="null"
      @keydown.13="doSearch()"
    />

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

export default {
  data() {
    return {
      searchText: '',
      imgUrl: baiduImgUrl,
      engineList: data.engineList
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
    }
  },
  components: {
    'search-select': searchSelect
  },
  beforeCreate() {
    data.engineList.forEach(item => {
      // 使用 require 访问 assets 中的静态文件
      // 获得的地址存在 item.imgUrl 属性中
      item.imgUrl = require(`./assets/${item.imgName}.png`)
    })
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input::-webkit-input-placeholder {
    color: $black-20;
    font-weight: 500;
  }
}

.search-bar {
  height: 40px;
  width: 60%;
  background-color: $gray-04;
  font-size: 36px;
  padding: 20px 40px;
  border-radius: 40px;
  border: none;
  margin-bottom: 40px;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: $black-60;
}

.select-container {
  width: 50%;
  position: relative;
  right: 40px;
  display: flex;
}

input {
  outline: none;
}
textarea {
  outline: none;
}
</style>
