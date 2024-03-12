# animerecord-vite-v2

在v1上的改进：
* 使用eslint+prettier来规范代码的编写格式，并且结合husky来对在git commit前对代码的格式规范进行检查和修正。
* 使用huksy+commitlint，对commit时所写的commit信息进行规范。
* 使用commitizen来代替git commit的提交，进而规范commit时信息格式。
* 使用vite+vue3+typescript来对前端项目进行重写，并且使用composition api。
* 网络请求库还是使用axios，但是使用类来对axios进行封装。
* 对整体的项目结构做了更仔细的区分。比如对于home组件来说，在view中创建home文件夹，里面再创建src文件夹来放vue组件，而在外面创建index.ts入口文件统一对home组件进行管理和导出。
* 使用pinia来作为状态管理工具。

