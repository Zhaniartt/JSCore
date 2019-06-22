function solve(obj){
    let validMEthods = ['GET','POST','DELETE','CONNECT'];
    let validVersions = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0']
    //check inputs
    if(!('method' in obj)){
        throw new Error('Invalid request header: Invalid Method');

    }
    if(!('uri' in obj)){
        throw new Error('Invalid request header: Invalid URI');

    }
    if(!('version' in obj)){
        throw new Error('Invalid request header: Invalid Version');

    }
    if(!('message' in obj)){
        throw new Error('Invalid request header: Invalid Message');

    }
    //check method
    if(!validMEthods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(obj.uri.match(/^[a-zA-Z0-9_.]*$/) === null && obj.uri.match(/\*/) === null){
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!validVersions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(obj.message.match(/[<>\\&'"]/g)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}
console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }))