<template>
  <div class="container">
    <h4 class="title">终端工具</h4>
    <div class="flexbox">
      <div class="box-item">
        <p>终端重启</p>
      </div>
      <div class="box-item">
        <p>终端重启</p>
      </div>
      <div class="box-item">
        <p>终端重启</p>
      </div>
      <div class="box-item">
        <p>终端重启</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flexbox'
}
</script>

<style lang="scss" scoped>
.container {
  width: 410px;
  margin: auto;
  padding: 0 32px 16px 16px;
  border: 1px solid #eee;
  height: 300px;
  box-sizing: border-box;
}

.title {
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #eee;
}

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .box-item {
    flex: 0 0 120px;
    padding: 32px 0;
    cursor: pointer;
    text-align: center;

    &:hover {
      box-shadow: 0 0 10px 0 rgba(26, 26, 26, 0.24);
      border-radius: 4px;
    }
  }
}
</style>
