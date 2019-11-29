<template>
  <div class="home">
    <img class="login_img" src="../assets/login_1.png" alt />

    <div class="login_for">
      <img class="login_img_name" src="../assets/login_name.jpg" alt />
      <h1>领课教育系统-开源版</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="登录账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="登录密码"
            v-model="ruleForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Move from "../services/more-services";
const _move = new Move();
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输账号", trigger: "blur" },
          { min: 1, max: 11, message: "输入正确手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 8, message: "输入正确密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj = {
            clientId: "lkb65617f842ad4c37895a733b8de43cbb",
            ip: "127.0.0.0",
            mobile: this.ruleForm.name,
            password: this.ruleForm.password
          };
          _move.register(obj).then(res => {
            console.log(res);
            if (res.data.code === 200) {
              this.$store.state.token = res.data.data;
              this.$router.push("/dashboard");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    console.log("asdf");
  }
};
</script>
<style scoped lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background: #93defe;
  .login_img {
    margin: 100px 300px;
  }
}

.login_for {
  position: absolute;
  right: 10%;
  top: 150px;
  z-index: 10;
  width: 500px;
  height: 350px;
  background: white;
  border-radius: 10px;
  .login_img_name {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    top: -70px;
    left: 180px;
  }
  h1 {
    width: 100%;
    padding-top: 90px;
    text-align: center;
    font-size: 25px;
  }
}
.el-form-item {
  margin-left: 50px;
  .el-input {
    width: 80%;
    .el-input__inner {
      background: #000;
    }
  }
  .el-button {
    width: 80%;
  }
}
</style>
