# jacoco-parse-new


基于jacoco-parse做了一些定制化的更新

* 新增了class的统计
* 更改lines.details
* 删除function，branches的details的统计
* 返回格式由Array转换成key为file的object

## Use

```js
var jacoco = require( "jacoco-parse-new" );

// parse by file path
jacoco.parseFile( "filepath.xml", function( err, result ) { ... } );

// or parse file contents
jacoco.parseContent( "<?xml version="1.0" ?><report>...</report>",
    function( err, result ) { ... } );
```


