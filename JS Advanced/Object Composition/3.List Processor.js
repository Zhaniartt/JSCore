function listProcessor(params) {
    let collection = [];
    let commandProcessor = (()=>{
        let add = str => collection.push(str)
        let remove= str => (collection = collection.filter(x => x !== str))
        let print = ()=> console.log(collection.join(','))
        return {add,remove,print}
    })();
    params.map(x=> x.split(' '))
          .forEach(([command,str])=>commandProcessor[command](str))
}
listProcessor([
    'add hello',
    'add again',
    'remove hello',
    'add again',
    'print'
])