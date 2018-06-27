<template>
  <div class="my1">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style scoped>



  .my1{width:100%; height: 45px; background:#f9f9f9;text-align: center;
    border-bottom: 1px solid #bbb; font-size: 19px; line-height: 45px;
    color: #616161; margin: 0; padding: 0;

  }
</style>
