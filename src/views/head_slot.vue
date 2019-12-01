<template>
  <div class="head">
    <el-breadcrumb separator="/">
      <slot name="route">
        <el-breadcrumb-item :to="{ path: '/dashboard' }"
          >订单管理</el-breadcrumb-item
        >
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </slot>
    </el-breadcrumb>
    <div class="head_quit" @click="quit">
      <img src="../assets/login_name.jpg" alt />
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>                         
</template>

<script>
export default {
  data() {
    return {}; 
  },
  methods: {
    quit() {
      console.log(22);
    }
  }
};
</script>

<style scoped lang="scss">
.head {
  height: 50px;
  width: 1800px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid slategrey;
  .head_nav {
    height: 50px;
    display: flex;
    align-items: center;
    span {
      color: slategrey;
    }
  }
  .head_quit {
    img {
      width: 50px;
      height: 50px;
    }
  }
}
.el-breadcrumb {
  height: 50px;
  line-height: 50px;
}
</style>
