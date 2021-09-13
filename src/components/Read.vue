
<template>
  <div class="Read">
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
        @blur="number($event)"
      ></a-input>
    </h2>
    <h3>
      <a-button type="primary" @click="getValue">Submit Now!</a-button>
    </h3>
  </div>
</template>


<script>
import * as API from "../requests/api";
export default {
  name: "Read",
  data() {
    return {
      inputUserID: "",
      outputTime: "[]",
      outputStatus: "",
      outputValue: "[]",
      inputValid: false,
      style: { width: "200px" },
    };
  },
  methods: {
    getValue() {
      //todo: 拿着id向后台要数据，然后显示到上面去
      if (this.inputValid) {
        // this.outputValue = "Server processed-" + this.inputValue;
        API.findUser({
          userId: this.inputUserID,
        })
          .then((res) => {
            this.$message("查询成功");
            if (res != null) {
              console.log("查询用户：" + res.name + " 成功");
              this.outputStatus = "查询成功";
              this.outputValue =
                "[" + res.userId + "-" + res.name + "-" + res.age + "]";
              this.outputTime = "[" + res.createTime + "]";
            } else {
              console.log("查询用户成功");
              this.outputStatus = "查询成功";
              this.outputValue = "[这个id对应的用户是空的]";
              this.outputTime = "[木大哒]";
            }
          })
          .catch((error) => {
            this.$message("查询失败");
            this.outputStatus = "查询失败";
            this.outputValue = "[]";
            this.outputTime = "[]";
            console.log(error);
          });
      }
    },
    number(e) {
      console.log(e.target.value);
      let flag = new RegExp("^[0-9]([0-9])*$").test(e.target.value);
      console.log(flag);
      if (!flag) {
        this.$message("请输入正整数！");
        this.inputValid = false;
      } else {
        this.inputValid = true;
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
