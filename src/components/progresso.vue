<template>
  <div class="progresso">
    <el-steps :active="etapa" finish-status="success">
      <el-step title="Escolher Pokemon"></el-step>
      <el-step title="Ver Detalhes"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  props: {
    etapa: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style scoped>
.progresso {
  text-align: left;
}
</style>