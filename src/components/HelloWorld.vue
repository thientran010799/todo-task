<template>
  <div class="hello">
    <div>
      <input type="text" v-model="message" />
      <h1>{{ message }}</h1>

      <div v-if="message == 'show'">
        <h1>aaaaa</h1>
      </div>
      <input type="button" @click="say()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      message: "",
    };
  },

  methods: {
    say() {
      alert(this.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
