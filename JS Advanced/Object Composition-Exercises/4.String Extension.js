let str = (()=>{
    let list = [];
     return {
         ensureStart = str => {
             if(!list.includes(str)){
                 list.shift(str);
             }
         },
         ensureEnd = str =>{
            if(!list.includes(str)){
                list.push(str);
            }
        },
        
     }
})();