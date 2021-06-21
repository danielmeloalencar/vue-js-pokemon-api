<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        ><el-button type="primary">Home</el-button>
      </router-link>
      |
      <router-link to="/about">
        <el-button type="warning">Sobre</el-button></router-link
      >
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  text-align: center;
  margin-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #b69b01;
  border-radius: 10px;
  padding: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
<script >
export default {
  data() {
    return {
      etapa: 0,
    };
  },
};
</script>

