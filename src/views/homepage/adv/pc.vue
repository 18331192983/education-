<template>
  <div>
    <head-slot>
      <div slot="route">
        <el-breadcrumb-item :to="{ path: '/dashboard' }"
          >首页管理</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/dashboard' }"
          >首页轮播</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/dashboard' }"
          >PC端设置</el-breadcrumb-item
        >
      </div>
    </head-slot>
    <div>555</div>
  </div>
</template>

<script>
import HeadSlot from "../../head_slot";
export default {
  components: {
    HeadSlot
  }
};
</script>

<style></style>
