<template>
  <div>
    <div class="content">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#000" text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div class="right">
        <h1 @click="dianji" :class="{rotate:isShow}" class="san">三</h1>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../list/list_home";
const _List = new List();
export default {
  data() {
    return {
      isCollapse: true,
      isShow:false
    };
  },
  methods: {
    dianji() {
      this.isCollapse = !this.isCollapse;
      this.isShow=!this.isShow
    }
  },
  created() {
    _List.list_home().then(res => {
      console.log(res);
      if (res.data.code === 200) {
        this.$store.state.list_home = res.data.data.sysMenu;
        console.log(this.$store.state.list_home);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.content{
  display: flex;
}
.rotate{
  transform: rotate(180deg);
}
.san{
  transition: all 500ms;
}
</style>
