<template>
  <div class="mask">
    <div class="card" @click="$emit('dismiss')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mask {
  height: 100vh;
  width: 100vw;
  // filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
}

.card {
  min-width: 400px;
  min-height: 600px;
  background-color: #fff;
  box-shadow: 10px 10px 30px $black-08;
  border-radius: 2rem;
}
</style>
