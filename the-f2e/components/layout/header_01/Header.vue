<template lang="pug">
    header
        .container
            a.active(href="javascript:;") MyTasks
            a(href="javascript:;") In Progress
            a(href="javascript:;") Completed
</template>

<style lang="scss" scoped>
header {
  font-family: Roboto-Medium;
  font-weight: bold;
  background-color: #4a90e2;
  width: 100%;
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #00408b;
      padding: 17px 30px;
      margin:0 20px;
      border-bottom: 5px solid transparent;
      text-decoration: none;
      font-size: 24px;
    }
    a.active {
      color: #fff;
      border-bottom: 5px solid #00408b;
    }
  }
}
</style>
