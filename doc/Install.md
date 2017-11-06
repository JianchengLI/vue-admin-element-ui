
# All commands for create the project manually ( a document from a to z )
Its just a doc for the person who want study webpack and Vue.js and create all project by himself.
If you want create a project by CLI Vue.js or other bundler or scaffold **forget me please !**

# 1. npm-init
Interactively create a package.json file
```sh
    npm init
```
Add node_modules to file .gitignore

# 2. Install Webpack
Document https://webpack.js.org/guides/
```sh
    npm install --save-dev webpack
```

# 3 Install Vue.js and other relate packages
```sh
    npm install vue 
    npm install vue-router
    npm install element-ui
```

# 4. Create project basic folder and files 
* Create Folder "config", "dist", "build", "src"
* Create "main.js" in this folder
* Create file index.html

# 5. Create webpack config files
please read the guide of webpack https://webpack.js.org/guides/ Production chapter

create config files:
* create config/index.js
* create config/dev.env.js
* create config/prod.env.js

create webpack files:
* create webpack.base.conf.js
* create webpack.dev.conf.js
* create webpack.prod.conf.js

## 5.1 Prepare webpack.base.conf
* install webpack-merge for merge config files
```sh
npm install --save-dev webpack-merge
npm install --save-dev vue-loader
npm install --save-dev html-webpack-plugin
```



