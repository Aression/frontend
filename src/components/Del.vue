
<template>
  <div class="Del">
    <h1>
      <div>当前状态：{{ outputStatus }}</div>
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
      <a-button type="primary" @click="getValue">Delete it Now!</a-button>
    </h3>
  </div>
</template>


<script>
import * as API from "../requests/api";
export default {
  name: "Del",
  data() {
    return {
      inputUserID: "",
      outputStatus: "还没提交呢",
      inputValid: false,
      style: { width: "200px" },
    };
  },
  methods: {
    getValue() {
      //todo: 拿着id向后台要数据，然后显示到上面去
      if (this.inputValid) {
        // this.outputValue = "Server processed-" + this.inputValue;
        API.deleteUser({
          userId: this.inputUserID,
        })
          .then((res) => {
            if (res == true) {
              this.$message("删除成功");
              this.outputStatus = "删除用户" + this.inputUserID + "成功";
            }
          })
          .catch((error) => {
            this.$message("删除失败");
            this.outputStatus = "删除用户" + this.inputUserID + "失败";
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
