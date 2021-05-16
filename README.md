# jacoco-parse-new


基于jacoco-parse做了一些定制化的更新

* 新增了class的统计
* 更改lines.details
* 删除function，branches的details的统计
* 返回格式由Array转换成key为file的object

#### 使用

```js
var jacoco = require( "jacoco-parse-new" );

// parse by file path
jacoco.parseFile( "filepath.xml", function( err, result ) { ... } );

// or parse file contents
jacoco.parseContent( "<?xml version="1.0" ?><report>...</report>",
    function( err, result ) { ... } );
```
#### 返回结果
```json
[{
    "title":"StringTrim.java",
    "file":"net/uniform/html/filters/StringTrim.java",
    "functions":{
        "found":2,
        "hit":2
    },
    "lines":{
        "found":4,
        "hit":4,
        "details":{
            "cov":[
                25,
                29,
                30,
                32
            ],
            "uncov":[
                3,
                2,
                3,
                2
            ]
        }
    },
    "classes":{
        "found":1,
        "hit":1
    },
    "branches":{
        "found":2,
        "hit":2
    }
}]
```

