function getData () {
	let input = JSON.parse(document.querySelector('#input textarea').value);
	 let pplInP = document.querySelector('#peopleIn p');
	  let pplOutP = document.querySelector('#peopleOut p');
	  let blacklistP = document.querySelector('#blacklist p');
	  let lastElement = input.pop();
	  let peopleIn = [];
	  let peopleOut = [];
	  let blacklist = [];
	  for(let inp of input){
		  let action = inp.action;
		  let currentName = {
			  firstName: inp.firstName,
			  lastName: inp.lastName
		  }
		  if(action === 'peopleIn'){
			  if(!blacklist.find(p=> p.firstName === currentName.firstName && p.lastName === currentName.lastName)){
				  peopleIn.push(currentName);
			  }
		  }else if(action === 'peopleOut'){
			if(peopleIn.find(p=> p.firstName === currentName.firstName && p.lastName === currentName.lastName)){
			let index =  peopleIn.findIndex(x => x.firstName === currentName.firstName && x.lastName === currentName.lastName);
			  peopleIn.splice(index,1);
			  peopleOut.push(currentName);
			}
		  }else if(action === 'blacklist'){
			if(peopleIn.find(p=> p.firstName === currentName.firstName && p.lastName === currentName.lastName)){
			  let index =  peopleIn.findIndex(x => x.firstName === currentName.firstName && x.lastName === currentName.lastName);
				peopleIn.splice(index,1);
				peopleOut.push(currentName);
			  }
			  blacklist.push(currentName);
		  }
		}
		let output = {}
		output['peopleIn'] = peopleIn;
		output['peopleOut'] = peopleOut;
		output['blacklist'] = blacklist;
		if(lastElement.action !== '' && lastElement.criteria !== ''){
		  let criteria = lastElement.criteria
		  output[lastElement.action] = output[lastElement.action].sort((a,b)=> a[criteria].localeCompare(b[criteria]));
		}
		pplInP.textContent = output.peopleIn
        .map(x => JSON.stringify(x))
        .join(' ');
		pplOutP.textContent = output.peopleOut
        .map(x => JSON.stringify(x))
        .join(' ')
		blacklistP.textContent = output.blacklist
        .map(x => JSON.stringify(x))
        .join(' ');
  }
