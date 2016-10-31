# webpack-react-loader

通过该插件，你可以使用单文件形式编写react组件（将jsx与style组合在一起）

## 特性
1. 将jsx和css组合在一个文件内
2. 支持less，sass

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

1.用npm下载webpack-react-loader

```
npm install webpack-react-loader
```

2.配置你的webpack

```
//webpack.config.js
module: {
    loaders: [
        {
        test: /\.react$/,
        exclude: /node_modules/,
        loader: 'react-loader'
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
<style lang="scss(or less)">
...
</style>
```

## 下一步计划

1. 支持sourceMap
2. 支持组件样式的私有化

如果你有任何好的想法请与我联系