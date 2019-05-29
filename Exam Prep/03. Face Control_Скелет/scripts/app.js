function getData () {
	let output = JSON.parse(document.querySelector('textarea').value)
	let criteria =  output.pop()
   
	let peopleIn = []
	let peopleOut = []
	let blacklist = []
  output.filter(x=> {if(x.action === "peopleIn"){
		peopleIn.push(x)
  }else if(x.action === 'peopleOut'){
		peopleOut.push(x)
  }else if(x.action === 'blacklist'){
		blacklist.push(x)
  }
  })
  for(let i = 0; i < blacklist.length;i++){
	let current = Object.entries(blacklist)[i][1]
	for(let n = 0; n < Object.entries(peopleIn).length;n++){
		  let current2 = Object.entries(peopleIn)[n][1]
		  if(current.firstName == current2.firstName && current.lastName === current2.lastName){
					let index = peopleIn.indexOf(current2)
				let temp =   peopleIn.splice(index,1)
				 peopleOut.push(temp)
		  }
	}
}
 for(let i = 0; i < peopleOut.length;i++){
	let current = Object.entries(peopleOut)[i][1]
	for(let n = 0; n < Object.entries(peopleIn).length;n++){
		  let current2 = Object.entries(peopleIn)[n][1]
		  if(current.firstName == current2.firstName && current.lastName === current2.lastName){
					let index = peopleIn.indexOf(current2)
					peopleIn.splice(index,1)
		  }
	}
}




		let actionCriteria = criteria.action
		let sortCriteria = criteria.criteria
		if(actionCriteria === 'peopleIn'){
			 peopleIn = Object.entries(peopleIn).sort((a,b)=>{
			  return a[1][sortCriteria].localeCompare(b[1][sortCriteria])
			 })
		}else if(actionCriteria === 'peopleOut'){
			 peopleOut = Object.entries(peopleOut).sort((a,b)=>{
				  return a[1][sortCriteria].localeCompare(b[1][sortCriteria])
				 })
		}else if(actionCriteria === 'blacklist'){
			 blacklist = Object.entries(blacklist).sort((a,b)=>{
				  return a[1][sortCriteria].localeCompare(b[1][sortCriteria])
				 })
		}

   peopleIn.forEach(x=> {
	   document.querySelector('#peopleIn p').textContent += `${JSON.stringify(x[1]).trim()}`
   })
   peopleOut.forEach(x=>{
	   document.querySelector('#peopleOut p').textContent += `${JSON.stringify(x).trim()}`
   })
   blacklist.forEach(x=>{
	   document.querySelector('#blacklist p').textContent += `${JSON.stringify(x).trim()}`
   })
}