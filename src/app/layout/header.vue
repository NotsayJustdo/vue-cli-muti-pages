<template>
    <header class="header">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
            {{collapsed?'':sysName}}
        </el-col>
        <el-col :span="14" class="headerContent">
            <div class="tools" @click.prevent="collapse">
                <i class="fa fa-align-justify"></i>
            </div>
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><a href="/  " class="no-underline">app1</a></el-menu-item>
                <el-menu-item index="2"><a href="/app2/" class="no-underline">app2</a></el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				sysName:'mutipages',
				sysUserName: '',
				sysUserAvatar: '',
                activeIndex: '1'
			}
		},
        computed: {
            ...mapGetters([
                'collapsed'
            ])
        },
		methods: {
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			collapse:function(){
				this.$store.commit('TOGGLE_SIDEBAR');
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			},
            handleSelect() {
                
            }
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
            switch(location.pathname.split('/')[1]) {
                case 'app2': 
                    this.activeIndex = '2';
                    break;
                case 'app3':
                    this.activeIndex = '3';
                    break;
                default:
                    this.activeIndex = '1';
            }
		}
	}

</script>

<style scoped lang="scss">
	@import '~commonstyle';
    .header {
        height: 60px;
        line-height: 60px;
        background: $darkcolor;
        color:#fff;
        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                cursor: pointer;
                color:#fff;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 0px 10px 10px;
                    float: right;
                }
            }
        }
        .logo {
            //width:230px;
            height:60px;
            font-size: 22px;
            padding-left:20px;
            padding-right:20px;
            border-color: rgba(238,241,146,0.3);
            border-right-width: 1px;
            border-right-style: solid;
            img {
                width: 40px;
                float: left;
                margin: 10px 10px 10px 18px;
            }
            .txt {
                color:#fff;
            }
        }
        .logo-width{
            width:230px;
        }
        .logo-collapse-width{
            width:60px
        }
        .headerContent {
            text-align: left;
            display: flex;
        }
        .tools{
            display: inline-block;
            vertical-align: middle;
            padding: 0px 23px;
            width:14px;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
            
        }
        .el-menu {
            flex: 1;
            margin-left: 10px;
            .el-menu-item {
                padding: 0;
                a {
                    display: block;
                    padding: 0 20px;
                }
            }
        }  
    }
</style>