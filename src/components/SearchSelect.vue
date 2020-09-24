<template>
  <button
    :class="
      this.$store.state.currentEngineIndex == this.index ? 'selected' : 'select'
    "
    @click="handle()"
    :style="
      this.$store.state.currentEngineIndex == this.index
        ? { backgroundColor: engine.themeColor }
        : { backgroundColor: '#f5f5f5' }
    "
  >
    <img :src="logoUrl" alt="" class="logo" />
    <p class="title">{{ title }}</p>
  </button>
</template>

<script>
export default {
  props: ['searchUrl', 'title', 'cmd', 'logoUrl', 'index', 'engine'],
  methods: {
    handle() {
      this.$store.commit('changeEngine', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  // 设置文字不折行
  word-wrap: none;
  white-space: nowrap;
}

@mixin select {
  display: flex;
  align-items: center;
  padding: 5px 30px;
  font-size: 17px;
  border-radius: 100px;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: $gray-04;
  transition: 0.5s;
}
.select {
  @include select;
}

.select:hover {
  transform: translate(0, -10px);
  box-shadow: 0px 10px 20px $black-08;
  transition: 0.2s;
}

.select:active {
  background-color: #fff;
  transform: translate(0, -5px);
  transition: 0.2s;
}

.selected {
  @include select;
  background-color: bisque;
}

.selected:hover {
  transform: translate(0, -10px);
  box-shadow: 0px 10px 20px $black-08;
  transition: 0.2s;
}

.selected:active {
  background-color: #fff;
  transform: translate(0, -5px);
  transition: 0.2s;
}

.logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
  padding-right: 20px;
}
</style>
