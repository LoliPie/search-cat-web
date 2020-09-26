<template>
  <button
    :class="isSelected ? 'selected' : 'select'"
    @click="handle()"
    :style="
      isSelected
        ? { backgroundColor: engine.themeColor }
        : { backgroundColor: '#f5f5f5' }
    "
  >
    <!-- <img :src="logoUrl" alt="" class="logo" /> -->
    <icon-svg
      :icon-class="isSelected ? `${engine.imgName}-white` : engine.imgName"
      class="logo"
    ></icon-svg>
    <p class="title">{{ engine.name }}</p>
  </button>
</template>

<script>
export default {
  props: ['logoUrl', 'engine'],
  methods: {
    handle() {
      this.$store.commit('changeEngine', this.engine.id)
    }
  },
  computed: {
    isSelected() {
      return this.$store.state.currentEngineIndex == this.engine.id
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
  padding: 0.4rem 2rem;
  font-size: 1rem;
  border-radius: 10rem;
  margin: 0.6rem;
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

// 选定状态下的样式
.selected {
  @include select;
  background-color: bisque;
  p {
    color: #fff;
  }
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
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  margin-right: 1rem;
}
</style>
