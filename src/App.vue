<template>
  <div id="app">
    <img
      src="./assets/logo.png"
      alt=""
      srcset=""
      style="width: 30%; padding: 40px"
    />

    <input type="text" class="search-bar" v-model="searchText" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss">
// transparent black for text
$black-87: rgba(0, 0, 0, 0.87);
$black-60: rgba(0, 0, 0, 0.6);
$black-38: rgba(0, 0, 0, 0.38);
$black-20: rgba(0, 0, 0, 0.2);
$black-08: rgba(0, 0, 0, 0.08);
$black-04: rgba(0, 0, 0, 0.04);

// gray
$gray-87: #212121;
$gray-60: #666666;
$gray-38: #9e9e9e;
$gray-08: #d8d8d8;
$gray-04: #f5f5f5;

// white
$white-70: rgba(255, 255, 255, 0.7);
$white-50: rgba(255, 255, 255, 0.5);
$white-30: rgba(255, 255, 255, 0.3);

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.search-bar {
  height: 40px;
  width: 40%;
  background-color: $gray-04;
  font-size: 36px;
  padding: 20px 40px;
  border-radius: 40px;
  border: none;
}

input {
  outline: none;
}
textarea {
  outline: none;
}
</style>
