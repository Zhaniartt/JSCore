function solve() {
    let [text,value] = document.querySelector('#string').value.split(', ')
    
    let nameRegex = /\s([A-Z][A-Za-z]*-([A-Z][A-Za-z]*\.-)?[A-Z][A-Za-z]*)\s/
    let airPort = /\s(([A-Z]{3})\/([A-Z]{3}))\s/
    let flightRegex = /\s([A-Z]{1,3}\d{1,5})\s/
    let companyName = /-\s([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)\s/

    let output = ''
    if(value === 'name'){
        let name = nameRegex.exec(text)[1]
         name = name.replace(new RegExp('-', 'g'),' ')
        output = `Mr/Ms, ${name}, have a nice flight!`
    }else if(value === 'flight'){
        let flightDirection = airPort.exec(text)
        let flightNumber = flightRegex.exec(text)[1]
        output = `Your flight number ${flightNumber} is from ${flightDirection[2]} to ${flightDirection[3]}.`
    }else if(value === 'company'){
        let company = companyName.exec(text)[1]
         company = company.replace('*',' ')
        output = `Have a nice flight with ${company}.`
    }else if(value === 'all'){
        let flightDirection = airPort.exec(text)
        let flightNumber = flightRegex.exec(text)[1]
        let name = nameRegex.exec(text)[1]
        let company = companyName.exec(text)[1]
        company = company.replace('*',' ')
        name = name.replace(new RegExp('-', 'g'),' ')
         output = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${flightDirection[2]} to ${flightDirection[3]}. Have a nice flight with ${company}.`
    }
  document.querySelector('#result').textContent = output      
}