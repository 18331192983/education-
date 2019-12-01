<template>
  <div>
    <Head_slot></Head_slot>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120"
        ></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
        ></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import List from "../../services/orderlist/list";
const _list = new List();
import Head_slot from "../head_slot";
export default {
  components: {
    Head_slot
  },
  data() {
    return {
      page: 1,
      lists: []
    };
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      _list.lists(this.page).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.lists = res.data.data.list;
        }
      });
    },
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style>

</style>
