<template>
  <div class="head">
    <div class="head_nav">
      <span>订单管理</span>
      <span>/订单列表</span>
    </div>
    <div class="head_quit">
      <img src="../assets/login_name.jpg" alt />
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>

<style scoped lang="scss">
.head {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid slategrey;
  .head_nav {
    height: 50px;
  }
  .head_quit {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
