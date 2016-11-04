# single-react-loader

[中文版](https://github.com/sunOpar/single-react-loader/blob/master/README-zh.md)

write react in single file with webpack

## feature
1. combine jsx and css in single file
2. support less,sass
3. support style scoped

## example

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

## how to use

1.install the single-react-loader package with npm

```
npm install single-react-loader
```
2.config your webpack

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

3.write single file react,and import

```
import About from 'About.react'
```

### change stylesheet lang

```
// app.react
<script>
...
</script>
<style lang="sass(or less)">
...
</style>
```

### make styleSheet privatization(or scoped)

```
// app.react
<script>
...
</script>
<style scoped>
...
</style>

```

## highlight and snippet 

### vscode

Place the following snippet into your settings file.

```
{
  "files.associations": {
    "*.react": "html"
  }
}
```

### sublime

![show](http://7xqo7w.com1.z0.glb.clouddn.com/aa.gif)


1. open `*.react` file
2. click view-->syntax-->open all with current extension as.. --> HTML


## What next

1.support sourceMap
~~2.support style scope~~

And then i will write plugin with common editor such as `sublime` for code snnipets and highlight

You can contact me if you have any idea.You also can join us to help single-react stronger.
