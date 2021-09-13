
<template>
  <div class="Update">
    <h1>
      <div>当前状态：{{ outputStatus }}</div>

      <div>创建时间：{{ outputTime }}</div>
      <div>用户信息：{{ outputValue }}</div>
    </h1>
    <h2>
      <a-input
        placeholder="input user id here"
        v-model="inputUserID"
        allowClear
        :style="style"
        @blur="id($event)"
      ></a-input>
    </h2>
    <h3>
      <a-input
        placeholder="input user name here"
        v-model="inputUserName"
        allowClear
        :style="style"
        @blur="name($event)"
      ></a-input>
    </h3>
    <h4>
      <a-input
        placeholder="input user age here"
        v-model="inputUserAge"
        allowClear
        :style="style"
        @blur="age($event)"
      ></a-input>
    </h4>

    <h5>
      <a-button type="primary" @click="getValue">Update Now!</a-button>
    </h5>
  </div>
</template>


<script>
import * as API from "../requests/api";
export default {
  name: "Update",
  data() {
    return {
      inputUserName: "",
      inputUserAge: "",
      inputUserID: "",
      outputStatus: "还没提交呐",
      outputTime: "[]",
      outputValue: "[]",
      userIdValid: false,
      userNameValid: false,
      userAgeValid: false,
      style: { width: "200px" },
    };
  },
  methods: {
    getValue() {
      //todo: 拿着id向后台要数据，然后显示到上面去
      if (this.userIdValid && this.userNameValid && this.userAgeValid) {
        // this.outputValue =
        //   "Server processed-" + this.inputUserName + "-" + this.inputUserAge;
        API.updateUser({
          userId: this.inputUserID,
          name: this.inputUserName,
          age: this.inputUserAge,
        })
          .then((res) => {
            this.$message("更改成功");
            console.log("用户：" + res.name + "更改成功");
            this.outputStatus = "更改成功";
            this.outputValue =
              "[" + res.userId + "-" + res.name + "-" + res.age + "]";
            this.outputTime = "[" + res.createTime + "]";
          })
          .catch((error) => {
            this.outputStatus = "更改失败";
            this.outputValue = "[]";
            this.outputTime = "[]";
            console.log(error);
            this.$message("没有这个用户！");
          });
      }
    },
    id(e) {
      console.log(e.target.value);
      let flag = new RegExp("^[0-9]([0-9])*$").test(e.target.value);
      console.log(flag);
      if (!flag) {
        this.$message("请输入为正整数的用户id！");
        this.userIdValid = false;
      } else {
        this.userIdValid = true;
      }
    },
    name(e) {
      console.log(e.target.value);
      let flag = e.target.value.length >= 2;
      console.log(flag);
      if (!flag) {
        this.$message("名称长度不能小于2！");
        this.userNameValid = false;
      } else {
        this.userNameValid = true;
      }
    },
    age(e) {
      console.log(e.target.value);
      let flag = new RegExp("^[1-9]([0-9])*$").test(e.target.value);
      console.log(flag);
      if (!flag) {
        this.$message("请输入为正整数的用户年龄！");
        this.userAgeValid = false;
      } else {
        this.userAgeValid = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h3 {
  font-weight: normal;
  color: #1890ff;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
