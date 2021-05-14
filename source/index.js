"use strict";

var fs = require("fs");
var parseString = require("xml2js").parseString;

var parse = {};

function getCounter(source, type) {
    source.counter = source.counter || [];
    return source.counter.filter(function (counter) {
        return counter.$.type === type;
    })[0] || {
        $: {
            covered: 0,
            missed: 0
        }
    };
}

var unpackage = function (report) {
    var packages = report.package;

    var output = {};

    packages.forEach(function (pack) {
        pack.sourcefile.forEach(function (s) {
            var fullPath = pack.$.name + '/' + s.$.name;

            var methods = getCounter(s, "METHOD");
            var lines = getCounter(s, "LINE");
            var branches = getCounter(s, "BRANCH");
            var classes = getCounter(s, "CLASS");

            var classCov = {
                title: s.$.name,
                file: fullPath,
                functions: {
                    found: Number(methods.$.covered) + Number(methods.$.missed),
                    hit: Number(methods.$.covered),
                },
                lines: {
                    found: Number(lines.$.covered) + Number(lines.$.missed),
                    hit: Number(lines.$.covered),
                    details: {
                        cov: !s.line ? [] : s.line.map((l) => {
                            return Number(l.$.nr)
                        }),
                        uncov: !s.line ? [] : s.line.map((l) => {
                            return Number(l.$.ci)
                        })
                    }
                },
                classes: {
                    found: Number(classes.$.covered) + Number(classes.$.missed),
                    hit: Number(classes.$.covered),
                },
                branches: {
                    found: Number(branches.$.covered) + Number(branches.$.missed),
                    hit: Number(branches.$.covered)
                }
            };
            output[classCov.file] = classCov
        });

    });

    return output;
};

parse.parseContent = function (xml, cb) {
    parseString(xml, function (err, parseResult) {
        if (err) {
            return cb(err);
        }

        var result = unpackage(parseResult.report);

        cb(err, result);
    });
};

parse.parseFile = function (file, cb) {
    fs.readFile(file, "utf8", function (err, content) {
        if (err) {
            return cb(err);
        }

        parse.parseContent(content, cb);
    });
};

module.exports = parse;
