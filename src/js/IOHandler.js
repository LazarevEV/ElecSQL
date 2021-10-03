const fs = require('fs')
const path = require('path')

class IOHandler {
    constructor(args) {
        this.path = args.path
        this.fname = args.fname
    }
    
    loadJSON() { 
        try {
            return JSON.parse(fs.readFileSync(path.join(this.path, this.fname)))
        } catch(error) {
            return {}
        }
    }

    // TODO
    // findBySequence(keySequence, doc) {
    //     keySequence = keySequence.split('->')
        
    //     let doc = this.loadJSON()
    //     for (const key in doc) {
    //         if (doc != Object) return doc
            

    //     }

    //     return doc
    // }

    // findByKey(key) {
    //     return this.loadJSON()[key]
    // }

    // saveJSON(doc) {
    //     let doc = this.loadJSON()
    //     doc = Object.assign({}, doc, {key:value})

    //     fs.writeFileSync(this.path, JSON.stringify(doc))
    // }
}

exports.IOHandler = IOHandler
