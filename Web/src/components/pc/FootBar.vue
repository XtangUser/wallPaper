<template>
   <div class="foot-bar">
    <el-descriptions
    title="好时光留言墙"
    :column="4"
    direction="horizontal"
  >
    <el-descriptions-item  class="header"  label="留言墙">与你所想</el-descriptions-item>
    <el-descriptions-item label="联系电话">18236292785</el-descriptions-item>
    <el-descriptions-item class="Useimg" label="赞助" :span="2"><img src="../../assets/images/pay01.jpg" alt=""><el-divider direction="vertical" /><img src="../../assets/images/pay02.jpg" alt=""></el-descriptions-item>
    <el-descriptions-item label="logo">
      <el-tag size="small">《好时光》</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="我们畅想">
      1.在这里，每一个字都是心灵的印记，每一次留言都是情感的传递。让我们的留言墙成为连接你我的桥梁<br>
      2.让我们在这里留下足迹，无论未来我们身在何方，这段留言墙的记忆，将永远伴随着我们前行
    </el-descriptions-item>
  </el-descriptions>
</div>
</template>
<style lang="less" scoped>
.foot-bar{
    width: 100%;
    height: 200px;
    background:lightblue;
    box-sizing: border-box;
    margin-top: 40px;
}
.el-descriptions__content img{
width: 75px;
display: inline-block;
height: 75px;
}

.Useimg{
  margin-left: 30px;
}
.el-descriptions__content:not(.is-bordered-label) {
     color: aliceblue;
  font-size: 16px;
  font-weight: 500;
}
</style>
