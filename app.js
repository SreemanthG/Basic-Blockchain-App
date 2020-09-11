let Blockchain = require("./blockchain");
let hash = require("object-hash");    

let blockChain = new Blockchain();

let PROOF = 3;
let t =2;
let validProof = (proof)=>{
    let guessHash = hash(proof);
    console.log("Hash: "+guessHash+" "+proof);
    return guessHash === hash(PROOF);
}

let proofOfWork = () => {
    let proof = 0;
    while(true){
        if(!validProof(proof)){
            proof++;
        } else{
            break;
        }
    }
    return proof;
}

while(t--){  
    if(proofOfWork()==PROOF){
        blockChain.addNewTransaction("sreemanth","gshetty",100);
        let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
        blockChain.addNewBlock(prevHash);
    }
    
    console.log("Chain: ", blockChain.chain);
}
