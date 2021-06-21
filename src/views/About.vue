<template>
  <el-container class="container">
    <el-main>
      <h1>Sobre</h1>
      <el-divider />

      <el-row :gutter="20">
        <el-col :span="8">
          <p>Desenvolvido por Daniel Melo Alencar</p>
          <p>Recursos utilizados:</p>
          <ul>
            <li>Vue Router</li>
            <li>Event Emit</li>
            <li>Methods</li>
            <li>Conditional Redering</li>
            <li>Watch</li>
            <li>Computed</li>
            <li>Components</li>
            <li>Acesso à API externa (Axios)</li>
            <li>Element UI</li>
          </ul>
        </el-col>

        <el-col :span="16">
          <img
            class="pokemon-logo"
            src="@/assets/pokemon-logo.png"
            alt="Pokemon VueJS"
            title="Pokemon VueJS"
          />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.pokemon-logo {
  width: 100%;
}
</style>
