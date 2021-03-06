//如果是非路径形式的模块标识
//路径形式
/*
 	./ 当前目录
 	../
 	/XXX
 	d:/
	首位的/在这里表示的是当前文件木块所属的磁盘路径
	.js后缀名是可以省略
 */
//require("./foo.js")

//核心模块
/*
 	核心模块的本质就是文件
 	核心模块文件已经被编译到二进制文件中,我们只需要按照名字进行加载即可
 	如果想查看核心模块的文件
 	https://github.com/nodejs/node/blob/master/lib/fs.js
// * */
//require("fs")
//require("http")


/*
 //第三方模块 查找机制
 * 1- 凡是第三方模块都必须通过npm进行下载\
 * 2- 使用的时候就可以通过require("包名")的方式来进行加载使用即可
 * 3- 任何一个第三方的包与核心模块的名字是不一样的
 * 4- 既不是核心模块,也不是路径形式的模块
 * 	先找到当前文件所在目录中的 node_modules目录
 *  node_modules/art-template
 *  node_modules/art-template/package.json文件
 *  node_modules/art-template/package.json文件中是否有main这个属性
 *  node_modules/art-template/package.json文件中是否有main这个属性 记载了art-template的一个入口模块
 *  然后加载使用这个第三方的包 
 * */
require("art-template")
require("a")

/*
 * 如果package.json文件中不存在或者main指定的入口模块也没有
 * node会自动去找该目录下的index.js
 * index.js被默认为一个备选项
 * 
 * 如果没有找到指定文件或者index.js文件,则会进入上一级目录中的node_modules目录中查找
 * 
 * 如果直到磁盘根目录还找不到,最后报错:
 * Cannot find module 'F:\win10资料\HBuilderProjects\win7\1903\0421 -- day46
 * 
 * 注意:一个项目只有一个node_modules,放在项目的根目录中,这样项目中的子目录中的代码都可以加载到第三方包
 * */
