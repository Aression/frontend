
<template>
  <div class="Create">
    <h1>Result for input:{{ outputValue }}</h1>
    <h2>
      <a-input
        placeholder="input user name here"
        v-model="inputUserName"
        allowClear
        :style="style"
        @blur="len($event)"
      ></a-input>
    </h2>
    <h3>
      <a-input
        placeholder="input user age here"
        v-model="inputUserAge"
        allowClear
        :style="style"
        @blur="number($event)"
      ></a-input>
    </h3>
    <h4>
      <a-button type="primary" @click="getValue">Submit Now!</a-button>
    </h4>
  </div>
</template>


<script>
export default {
  name: "Create",
  data() {
    return {
      inputUserName: "",
      inputUserAge: "",
      outputValue: "",
      userNameValid: false,
      userAgeValid: false,
      style: { width: "200px" },
    };
  },
  methods: {
    getValue() {
      //todo: 拿着id向后台要数据，然后显示到上面去
      if (this.userNameValid && this.userAgeValid) {
        this.outputValue =
          "Server processed-" + this.inputUserName + "-" + this.inputUserAge;
      }
    },
    len(e) {
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
    number(e) {
      console.log(e.target.value);
      let flag = new RegExp("^[1-9]([0-9])*$").test(e.target.value);
      console.log(flag);
      if (!flag) {
        this.$message("请输入正整数！");
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
