<template>
  <div>
    <div class="content">
      <el-menu default-active="1-4-1"
               class="el-menu-vertical-demo"
               :collapse="isCollapse"
               background-color="#000"
               :unique-opened="true"
               text-color="#fff"
              >
        <el-submenu :index="item.id"
                    v-for="(item,index) in list"
                    :key="index"
                    v-show="item.name!='首页'">
          <template slot="title">
            <span slot="title">{{ item.name }}</span>
          </template>
              <el-submenu :index="item2.id"
                      v-for="(item2,index2) in item.children"
                      :key="index2"
                      >
            <template slot="title">
              <span slot="title">{{item2.name}}</span>
            </template>
          
              <el-menu-item-group v-for="(item3,index3) in item2.children"
                                :key="index3">
              <el-menu-item :index="item3.id">{{item3.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <div class="right">
        <h1 @click="dianji" :class="{ rotate: isShow }" class="san">三</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Order from "../services/order.js";
const _order = new Order();
export default {
  data() {
    return {
      isCollapse: true,
      isShow: false,
      list: [] //列表
    };
  },
  methods: {
    dianji() {
      this.isCollapse = !this.isCollapse;
      this.isShow = !this.isShow;
    }
  },
  created() {
    _order.list_home().then(res => {
      console.log(res);
      if (res.data.code === 200) {
        this.list = res.data.data.sysMenu;
        console.log(this.list);
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
.content {
  display: flex;
}
.rotate {
  transform: rotate(180deg);
}
.san {
  transition: all 500ms;
}
</style>
