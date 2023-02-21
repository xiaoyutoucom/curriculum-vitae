// 所以关于你的信息都在这配置, 之后会自动放入项目中
export default {
    global: {
        title: "于鑫在线简历",  // 浏览器标签页名 和 footer中的版权内容
        name: "于鑫",   // 你的名字
        nickName: "YuXin",   // 英文名或昵称
    },

    header: {
        // 介绍自己的几个主题
        intro_items: [
            {
                title: "简历首页",
                anchor: "#home",
            },
            {
                title: "基本信息",
                anchor: "#aboutme",
            },
            {
                title: "我的能力",
                anchor: "#skills",
            },
            {
                title: "个人作品",
                anchor: "#works",
            },
            {
                title: "联系方式",
                anchor: "#contact",
            },
        ],
    },

    intro: {
        home: {
            expect_position: "java高级工程师",     // 期望岗位
            me: require("@/assets/home/me.png"),   // 你的头像的路径, 注意储存路径及其写法, @/ 等价于 src/
            blogs: {
                gitee: "https://gitee.com/xiaoyutou_647",
            }
        },

        aboutme: {
            me: require("@/assets/aboutme/me.png"),   // 上半身照
            introduce: `
                        毕业于临沂大学, 专业是软件工程(本科)。
                        从事软件开发工作六年时间，主要从事java后端代码的编写
						在工作过程中中也参与了，vue与.net以及cs客户端程序的编写
						主要工作的领域是工业互联网、智慧城市与金融相关
                        `,
        },

        skills: {
            // 最熟悉的技术栈一般3-5个
            /* 
                该项目可以直接使用 https://boxicons.com/ 中的icon 和 https://element.eleme.cn/#/zh-CN/component/icon 中的 icon, 只需要bxs-icon-name即可
                使用默认icon就用undefined代替
                不适用icon就用""代替
            */
            main_skills: [
                {
                    skill_name: "springBoot",
                    progress_of_master: 90, // 技能掌握程度
                    icon: "bxl-java",  // icon类名
                },
                {
                    skill_name: "Redis",
                    progress_of_master: 75,
                   icon: "bxl-postgresql",  // icon类名
                },
              
				{
				    skill_name: "Jenkins",
				    progress_of_master: 70,
				   icon: "bxl-postgresql",  // icon类名
				}
				,
                {
                    skill_name: "JVM",
                    progress_of_master: 70,
                   icon: "bxl-java",  // icon类名
                },
				{
				    skill_name: "postgresql",
				    progress_of_master: 70,
				  icon: "bxl-postgresql",  // icon类名
				},
				{
				    skill_name: "mongodb",
				    progress_of_master: 70,
				      icon: "bxl-postgresql",  // icon类名
				}
            ],
            //其他一些能够说得上东西的技能, 最好列举5个
            sub_skills: [
				{
				    skill_name: "springCloud",
				    progress_of_master: 80,
				   icon: "bxl-java",  // icon类名
				},
				{
				    skill_name: "设计模式",
				    progress_of_master: 75,
				   icon: "bxl-java",  // icon类名
				},
				{
				    skill_name: "RocketMQ",
				    progress_of_master: 80,
				     icon: "bxl-postgresql",  // icon类名
				}
				,
				{
				    skill_name: "Elasticsearch",
				    progress_of_master: 70,
				    icon: undefined,
				}
				,
              {
                  skill_name: "VUE+element-UI",
                  progress_of_master: 70,
                  icon: undefined,
              },
			  {
			      skill_name: "Mysql",
			      progress_of_master: 70,
			    icon: "bxl-mysql",  // icon类名
			  },
			  {
			      skill_name: ".net+winfrom",
			      progress_of_master: 60,
			     icon: "bxl-c",  // icon类名
			  },
			  {
			      skill_name: "Linux",
			      progress_of_master: 60,
			     icon: "bxl-c",  // icon类名
			  },
			  
            ],
            // 对自己会的技能做简单的介绍
            skills_introduction: `
               主要技术栈是java后台开发，在公司担任项目经理的角色
               负责项目开发流程的把控、技术预演、带领过多个项目开发维护工作
			   也参与过vue、.net、winfrom项目的开发工作
            `,
        },

        works: [
            {
                title: "仪表平台",
                pic: require("@/assets/works/仪表平台.jpg"),
                url: "https://jlqy.yibiao163.cn/",				
				time: "2021/12/30",
				tag:"开发组长",
				db: "mysql",
					js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins","Mysql"],
				 text: "工业互联网标识解析二级节点（大陆通工业互联网仪表平台）（www.yibiao163.cn）\
				 是工信部2019年工业互联网创新发展工程项目，为仪表行业企业和用户提供灵活的标识编码注册和标识解析服务\
				 ，打造仪表行业特定应用场景，促进仪器仪表的质量管理、重要产品追溯、产品全生命周期管理等应用。\
				  主要功能有：用户的注册与统一登录、仪表商城、标识中心（器具的创建、流转和赋码）、在线客服与消息通知、数据统计"
				 ,
				 srcList: [
				    require("@/assets/works/仪表平台1.jpg"),
					require("@/assets/works/仪表平台11.jpg"),
					require("@/assets/works/仪表平台2.jpg")
				]
            },
            {
                title: "计量服务平台",
               pic: require("@/assets/works/仪表平台.jpg"),
               url: "https://jlqy.yibiao163.cn/",				
               time: "2021/12/30",
			   tag:"后端开发",
               db: "mysql",
              	js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
                text: "http://wanghong.fitzlovexx.top/",
                srcList: [
                   require("@/assets/works/仪表平台1.jpg"),
               	require("@/assets/works/仪表平台11.jpg"),
               	require("@/assets/works/仪表平台2.jpg")
               ]
            },
            {
                title: "计量专项企业端",
                pic: require("@/assets/works/仪表平台.jpg"),
                url: "https://jlqy.yibiao163.cn/",				
                time: "2021/12/30",
				tag:"后端开发",
                db: "mysql",
             	js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
                 text: "http://wanghong.fitzlovexx.top/",
                 srcList: [
                    require("@/assets/works/仪表平台1.jpg"),
                	require("@/assets/works/仪表平台11.jpg"),
                	require("@/assets/works/仪表平台2.jpg")
                ]
            },
            {
                title: "计量专项监管端",        // 作品标题
              pic: require("@/assets/works/仪表平台.jpg"),
              url: "https://jlqy.yibiao163.cn/",				
              time: "2021/12/30",
			  tag:"后端开发",
              db: "mysql",
            	js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
               text: "http://wanghong.fitzlovexx.top/",
               srcList: [
                  require("@/assets/works/仪表平台1.jpg"),
              	require("@/assets/works/仪表平台11.jpg"),
              	require("@/assets/works/仪表平台2.jpg")
              ]
            },
			{
			    title: "编码中心",        // 作品标题
			   pic: require("@/assets/works/仪表平台.jpg"),
			   url: "https://jlqy.yibiao163.cn/",				
			   time: "2021/12/30",
			   tag:"后端开发",
			   db: "mysql",
				js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			    text: "http://wanghong.fitzlovexx.top/",
			    srcList: [
			       require("@/assets/works/仪表平台1.jpg"),
			   	require("@/assets/works/仪表平台11.jpg"),
			   	require("@/assets/works/仪表平台2.jpg")
			   ]
			},
			{
			    title: "强检平台系统",        // 作品标题
			   pic: require("@/assets/works/仪表平台.jpg"),
			   url: "https://jlqy.yibiao163.cn/",				
			   time: "2021/12/30",
			   tag:"后端开发",
			   db: "mysql",
			 	js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			    text: "http://wanghong.fitzlovexx.top/",
			    srcList: [
			       require("@/assets/works/仪表平台1.jpg"),
			   	require("@/assets/works/仪表平台11.jpg"),
			   	require("@/assets/works/仪表平台2.jpg")
			   ]
			},
			{
			    title: "巡查养护系统",        // 作品标题
			pic: require("@/assets/works/仪表平台.jpg"),
			url: "https://jlqy.yibiao163.cn/",				
			time: "2021/12/30",
			tag:"后端开发",
			db: "mysql",
			js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			 text: "http://wanghong.fitzlovexx.top/",
			 srcList: [
			    require("@/assets/works/仪表平台1.jpg"),
				require("@/assets/works/仪表平台11.jpg"),
				require("@/assets/works/仪表平台2.jpg")
			]
			},
			{
			    title: "物联网统一配置管理系统",        // 作品标题
			 pic: require("@/assets/works/仪表平台.jpg"),
			 url: "https://jlqy.yibiao163.cn/",				
			 time: "2021/12/30",
			 tag:"后端开发",
			 db: "mysql",
				js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			  text: "http://wanghong.fitzlovexx.top/",
			  srcList: [
			     require("@/assets/works/仪表平台1.jpg"),
			 	require("@/assets/works/仪表平台11.jpg"),
			 	require("@/assets/works/仪表平台2.jpg")
			 ]
			},
			{
			    title: "桥梁监测系统",        // 作品标题
			   pic: require("@/assets/works/仪表平台.jpg"),
			   url: "https://jlqy.yibiao163.cn/",				
			   time: "2021/12/30",
			   tag:"后端开发",
			   db: "mysql",
			 	js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			    text: "http://wanghong.fitzlovexx.top/",
			    srcList: [
			       require("@/assets/works/仪表平台1.jpg"),
			   	require("@/assets/works/仪表平台11.jpg"),
			   	require("@/assets/works/仪表平台2.jpg")
			   ]
			},
			{
			    title: "海航财务管理平台",        // 作品标题
			  pic: require("@/assets/works/仪表平台.jpg"),
			  url: "https://jlqy.yibiao163.cn/",				
			  time: "2021/12/30",
			  tag:"后端开发",
			  db: "mysql",
				js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			   text: "http://wanghong.fitzlovexx.top/",
			   srcList: [
			      require("@/assets/works/仪表平台1.jpg"),
			  	require("@/assets/works/仪表平台11.jpg"),
			  	require("@/assets/works/仪表平台2.jpg")
			  ]
			},
			{
			    title: "动态管控平台",        // 作品标题
			   pic: require("@/assets/works/仪表平台.jpg"),
			   url: "https://jlqy.yibiao163.cn/",				
			   time: "2021/12/30",
			   tag:"后端开发",
			   db: "mysql",
				js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			    text: "http://wanghong.fitzlovexx.top/",
			    srcList: [
			       require("@/assets/works/仪表平台1.jpg"),
			   	require("@/assets/works/仪表平台11.jpg"),
			   	require("@/assets/works/仪表平台2.jpg")
			   ]
			},
			{
			    title: "大幕影业",        // 作品标题
			    pic: require("@/assets/works/仪表平台.jpg"),
			    url: "https://jlqy.yibiao163.cn/",				
			    time: "2021/12/30",
				tag:"后端开发",
			    db: "mysql",
			 	js:  ["SpringCloud","RocketMQ","webSocket","Elasticsearch","Redis","Jenkins"],
			     text: "http://wanghong.fitzlovexx.top/",
			     srcList: [
			        require("@/assets/works/仪表平台1.jpg"),
			    	require("@/assets/works/仪表平台11.jpg"),
			    	require("@/assets/works/仪表平台2.jpg")
			    ]
			},
        ],

        contact: {
            full_info: [
                {
                    item: "姓名",
                    content: "于鑫",
                    icon: "el-icon-user",  // 注意不同网站icon的用法, 具体可以去网站中查看
                },
                {
                    item: "电话号码",
                    content: "13031709341",
                    icon: "el-icon-mobile-phone", 
                },
                {
                    item: "微信号",
                    content: "xiaoyutoucom",
                    icon: "bx bxl-twitter", 
                },
                {
                    item: "邮箱",
                    content: "576165539@qq.com",
                    icon: "el-icon-location-outline", 
                }
            ]
        },
    },

    footer: {
        record_num: "",  // 备案号
    },
}
