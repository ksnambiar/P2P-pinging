let libp2p = require("libp2p");
const TCP = require("libp2p-tcp")

const defaultsDeep = require("@nodeutils/defaults-deep")

const DEFAULT_OPTS= {
    modules:{
        transport:[
            TCP
        ]
    }
}

class P2PNode extends libp2p{
    constructor(opts){
        super(defaultsDeep(opts,DEFAULT_OPTS))
    }
}
module.exports={
    P2PNode
}