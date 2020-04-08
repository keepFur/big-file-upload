# big-file-upload

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 配置 eslint + pretty + airbnb

### 整个的实现思路就是：前端将文件进行分片,然后批量发送发送切片，最终通知服务器进行切片的合并。
