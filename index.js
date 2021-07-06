const del = require('del')
const validateOptions = require('schema-utils')
const path = require('path')


const schema = {
    type: 'object',
    properties: {
        exclude: {
            type: 'string'
        }
    }
}

module.exports = class CleanPlugin {
    constructor(options = {exclude :''}) {
        this.options = options
        validateOptions.validate(schema, options, 'CleanPlugin')
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('CleanPlugin',(complation, callback) => {
            let delFiles = [`${compiler.options.output.path}\\${this.options.include}`];
            console.log(delFiles);
            del(delFiles)
            .then(() => {
                callback()
            })
        })
    }
}

