<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

# 设置github账号

1. `vim ~/.ssh/`， 确认有公钥和私钥， 退出 `:q` \
   2.复制 GitHub 公钥文件内容, `cat ~/.ssh/github_id_rsa.pub`，到github ssh中粘贴 \
   3.设置全局git提交账号和邮箱: `git config --global user.name "your_name"`; `git config --global user.email "1613430161@qq.com"`;

# 将本地代码上传到github

1. 准备本地项目​

git init
在项目根目录执行，初始化Git仓库

2. 添加文件到暂存区​

git add .
跟踪所有文件（.代表当前目录所有文件）

3. 提交到本地仓库​

git commit -m "提交信息"
将暂存区文件正式保存到本地版本库

4. 连接远程仓库​

git remote add origin [仓库地址]
将本地仓库与GitHub上的仓库关联

5. 推送到GitHub​

git push -u origin main
将本地代码上传到GitHub（分支名可能是main或master）

# 创建项目

1.`npx create-react-app my-app --template typescript` 2.`cd my-app` 3.启动 `npm start`

# 配置路由

1.安装react-router-dom: `npm install react-router-dom`;\
2.在 src 目录下创建一个 router 文件夹; router 文件夹下创建 index.tsx文件;\
3.在 src 目录下创建一个 pages 文件夹; 并创建各个页面相关组件代码;\
4.在 src/router/index.tsx 文件中配置路由;\
 4.1根据你的页面创建路由配置数组 routes，里面包含你的菜单页面，
4.2导出路由对象 const router = createBrowserRouter(routes); export default router;\
5.在 src/index.tsx 文件中引入路由对象，并使用 RouterProvider 组件包裹路由对象，并传入路由对象作为参数;
