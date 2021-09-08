
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>The detailed functions are as flows:</h2>
    <h3>
      <router-link to="/Create">
        <a-button type="primary">Create</a-button>
      </router-link>

      <router-link to="/Read">
        <a-button type="primary">Read</a-button>
      </router-link>

      <router-link to="/Update">
        <a-button type="primary">Update</a-button>
      </router-link>

      <router-link to="/Del">
        <a-button type="primary">Delete</a-button>
      </router-link>

      <router-link to="/list">
        <a-button type="primary">List</a-button>
      </router-link>
    </h3>
  </div>
</template>


<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to MongoDB modify frontend",
    };
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
