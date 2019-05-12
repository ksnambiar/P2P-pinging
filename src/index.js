let multiaddr = require("multiaddr")
const PeerInfo = require("peer-info")
const {P2PNode} = require("./p2p")
function createPeer(callback) {
    // create a new PeerInfo object with a newly-generated PeerId
    PeerInfo.create((err, peerInfo) => {
      if (err) {
        return callback(err)
      }
  
      // add a listen address to accept TCP connections on a random port
      const listenAddress = multiaddr(`/ip4/127.0.0.1/tcp/0`)
      peerInfo.multiaddrs.add(listenAddress)
  
      const peer = new P2PNode({peerInfo})
      // register an event handler for errors.
      // here we're just going to print and re-throw the error
      // to kill the program
      peer.on('error', err => {
        console.error('libp2p error: ', err)
        throw err
      })
  
      callback(null, peer)
    })
  }
