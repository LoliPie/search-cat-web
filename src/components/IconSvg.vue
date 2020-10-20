<template>
  <div class="icon-container">
    <!-- 调用 iconfont 中的 svg 图标 -->
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="wholeIconName"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    wholeIconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: white;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
