<template>		
    <section class="content-container">
        <div class="grid-content bg-purple-light">
            <el-col :span="24" class="breadcrumb-container">
                <!--<strong class="title">{{$route.name}}</strong>-->
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                        {{ item.name }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="content-wrapper">
                    <router-view></router-view>
            </el-col>
        </div>
    </section>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}

</script>

<style scoped lang="scss">
	@import '~commonstyle';
    .content-container {
        flex:1;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {
            .title {
                width: 200px;
                float: left;
                color: #475669;
            }
            // .breadcrumb-inner {
                // float: right;
            // }
        }
        .content-wrapper {
            background-color: #fff;
            box-sizing: border-box;
        }
    }
</style>