function solve() {
    let word = document.querySelector('#word').value;
    let text = document.querySelector('#text').value;
    text = JSON.parse("[" + text + "]")[0]
    let replacemantWord = text[0].split(' ')[2]
    text = text.map(txt => txt = txt.replace(new RegExp(replacemantWord, 'gi'), word))
    text.forEach(x=>{
        let p = document.createElement('p')
        p.textContent = x
        document.querySelector('#result').appendChild(p)
    })
}