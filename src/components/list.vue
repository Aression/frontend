<template>
  <div class="list">
    <h1>Result for input:{{ outputValue }}</h1>
    <h2>
      <a-button type="primary" @click="sendRequest"
        >Get everything now!</a-button
      >
    </h2>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      outputValue: "",
    };
  },
  methods: {
    sendRequest() {
      this.outputValue = "Everything!";
    },
  },
};
</script>