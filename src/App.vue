<template>
  <div id="app">
    <img
      src="./assets/logo.png"
      alt=""
      srcset=""
      style="width: 18rem; padding: 40px;min-width: 5rem"
    />

    <input
      type="text"
      class="search-bar desktop"
      placeholder="喵嗷~"
      v-model="searchText"
      @keydown.299="null"
      @keydown.13="doSearch()"
    />

    <input
      type="search"
      class="search-bar mobile"
      placeholder="在手机上喵嗷~"
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
  font-size: 16px;
  input::-webkit-input-placeholder {
    color: $black-20;
    font-weight: 600;
    font-size: 2rem;
  }
}

.search-bar {
  width: 60%;
  background-color: $gray-04;
  font-size: 2rem;
  padding: 1.5rem 2.5rem;
  border-radius: 3rem;
  border: none;
  margin-bottom: 3rem;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: $black-60;
  max-width: 800px;
  min-width: 320px;
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
  .search-bar {
    width: 80%;
    transition: 0.2s;
  }
  .select-container {
    width: 85%;
  }
}

input {
  outline: none;
}
textarea {
  outline: none;
}
</style>
