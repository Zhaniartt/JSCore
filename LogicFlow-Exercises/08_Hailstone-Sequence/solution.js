function getNext() {
    let n = document.querySelector('#num').value
    let seq= [n]

    while(n!=1){
        if(n%2==0) n/=2
        else n=(n*3)+1

        seq.push(n)
    }
    seq=  seq.join(' ')
    document.querySelector('#result').textContent = seq + ' '
}