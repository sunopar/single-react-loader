# single-react-loader

通过该插件，你可以使用单文件形式编写react组件（将jsx与style组合在一起）

## 特性
1. 将jsx和css组合在一个文件内
2. 支持less，sass
3. 支持style样式的私有化

## 例子

```
//about.react
<script>
var About = ()=>{
  return (
    <div className='container'>
    about
    </div>
  )
}
export default About;
</script>

<style>
.container{
  color:red;
}
</style>
```

## 如何使用

1.用npm下载single-react-loader

```
npm install single-react-loader
```

2.配置你的webpack

```
//webpack.config.js
module: {
    loaders: [
        {
        test: /\.react$/,
        exclude: /node_modules/,
        loader: 'single-react'
        }
    ]
}

```

3.编写你的单文件组件（例子上面已经写了）,然后引入

```
import About from 'About.react'
```

### 如何使用css预编译

```
// app.react
<script>
...
</script>
<style lang="sass(或者 less)">
...
</style>
```

### 如何设置样式私有化

```
// app.react
<script>
...
</script>
<style scoped>
...
</style>

```

## 语法高亮和代码提示

### vscode

强烈推荐前端童鞋使用vscode编写代码，功能强大还很轻量，并且支持中文。

如何使`.react`文件在vscode下有语法高亮代码提示功能呢

1. 打开vscode，找到用户设置，这个文件名应该叫`settings.json`
2. 输入如下代码

```
{
  "files.associations": {
    "*.react": "html"
  }
}
```

### sublime

![演示](http://7xqo7w.com1.z0.glb.clouddn.com/aa.gif)

具体操作

1. 打开`*.react`的文件
2. 点击view-->syntax-->open all with current extension as.. --> HTML

## 下一步计划


~~1.支持组件样式的私有化~~
2.支持sourceMap

之后会编写常见编辑器的代码补全和语法高亮插件

如果你有任何好的想法请与我联系
