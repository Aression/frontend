<template>
  <div class="list">
    <h2>
      <a-button type="primary" @click="sendRequest"
        >Get everything now!</a-button
      >
    </h2>
    <h3>
      <a-table :columns="columns" :data-source="data"></a-table>
    </h3>
  </div>
</template>


<script>
import * as API from "../requests/api";
const columns = [
  {
    title: "Id",
    dataIndex: "userId",
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: "20%",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "20%",
  },
  {
    title: "CreateTime",
    dataIndex: "createTime",
    width: "20%",
    ellipsis: true,
  },
];

export default {
  name: "list",
  data() {
    return {
      data: [],
      columns,
    };
  },
  methods: {
    sendRequest() {
      API.findAllUser({}).then((res) => {
        if (res == null) {
          this.$message("一个用户也没有了。。。");
        } else {
          this.$message("查询用户成功！");
          this.data = res;
          ind = 1;
          this.data.forEach((el) => {
            el.key = ind;
            ind = ind + 1;
          });
          console.log(this.data);
        }
      });
    },
  },
};
</script>