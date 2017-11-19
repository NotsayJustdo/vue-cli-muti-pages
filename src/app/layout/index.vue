<template>
    <el-row class="container">
		 <!--这个可以作为所有页面的统一布局，如果不想用统一布局可以在再每个页面文件夹里进行单独的布局-->
		<page-header></page-header>
		<el-col :span="24" class="main">
			<page-sidebar></page-sidebar>
			<page-content></page-content>
		</el-col>
        <!--<page-footer></page-footer>-->
	</el-row>
</template>
<script>
//引入页面布局组件
import PageHeader from '@/app/layout/header'
import PageSidebar from '@/app/layout/sidebar'
import PageContent from '@/app/layout/content'
import PageFooter from '@/app/layout/footer'

export default {
  components: {
	  PageHeader,
      PageSidebar,
      PageContent,
      PageFooter
  },
  data() {
      return {

      }
  }
}
</script>
<style scoped lang="scss">
	@import '~commonstyle';
	
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
		}
	}
</style>
