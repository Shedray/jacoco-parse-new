"use strict";

var assert = require("assert");
var parse = require("../source");
var path = require("path");

describe("parseFile", function () {
    it("测试", function (done) {
        parse.parseFile(path.join(__dirname, "assets", "sample2.xml"), function (err, result) {
            let a = JSON.stringify(result['net/uniform/html/filters/StringTrim.java'])
           console.dir(a)
            done();
        });
    });
    it("should parse a file - sourcefiles without branches", function (done) {
        parse.parseFile(path.join(__dirname, "assets", "sample2.xml"), function (err, result) {
            assert.equal(err, null);
            assert.equal(result.length, 53);

            var sourceFile = null;

            result.forEach(function (f) {
                if(f.title === 'HiddenRenderer.java'){
                    sourceFile = f;
                }
            });

            assert.notEqual(sourceFile, null);
            assert.deepEqual(sourceFile, {
                "title": "HiddenRenderer.java",
                "file": "net/uniform/html/renderers/HiddenRenderer.java",
                "functions": {
                    "found": 2,
                    "hit": 2,
                    "details": [
                        {
                            "name": "values",
                            "line": 36,
                            "hit": 0
                        },
                        {
                            "name": "valueOf",
                            "line": 36,
                            "hit": 0
                        },
                        {
                            "name": "<init>",
                            "line": 42,
                            "hit": 1
                        },
                        {
                            "name": "getType",
                            "line": 47,
                            "hit": 1
                        },
                        {
                            "name": "<clinit>",
                            "line": 36,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 32,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 36,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 53,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 63,
                            "hit": 1
                        },
                        {
                            "name": "getOptionTag",
                            "line": 104,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 31,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 35,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 35,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 39,
                            "hit": 1
                        },
                        {
                            "name": "renderOptionGroup",
                            "line": 77,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 31,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 35,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 31,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 35,
                            "hit": 1
                        },
                        {
                            "name": "<init>",
                            "line": 31,
                            "hit": 1
                        },
                        {
                            "name": "render",
                            "line": 35,
                            "hit": 1
                        }
                    ]
                },
                "lines": {
                    "found": 9,
                    "hit": 9,
                    "details": [
                        {
                            "line": 31,
                            "hit": 3
                        },
                        {
                            "line": 35,
                            "hit": 4
                        },
                        {
                            "line": 36,
                            "hit": 4
                        },
                        {
                            "line": 37,
                            "hit": 6
                        },
                        {
                            "line": 38,
                            "hit": 5
                        },
                        {
                            "line": 40,
                            "hit": 6
                        },
                        {
                            "line": 42,
                            "hit": 4
                        },
                        {
                            "line": 43,
                            "hit": 4
                        },
                        {
                            "line": 45,
                            "hit": 2
                        }
                    ]
                },
                "branches": {
                    "found": 0,
                    "hit": 0,
                    "details": []
                }
            });
            done();
        });
    });
});
