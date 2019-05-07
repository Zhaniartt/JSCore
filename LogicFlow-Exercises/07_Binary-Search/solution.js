function binarySearch() {
    let arr = document.querySelector('#arr').value
    let num = Number(document.querySelector('#num').value)
    arr = arr.split(', ').map(x=>Number(x))
    let index = arr.indexOf(num)
    document.querySelector('#result').textContent = index !== -1
    ? `Found ${num} at index ${index}`
    : `${num} is not in the array`;
}