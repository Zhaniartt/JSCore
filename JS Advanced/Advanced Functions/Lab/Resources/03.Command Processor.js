function solve() {
    let data = '';
    return {
        append(str) {
            data += str;
        },
        removeStart(n) {
            data = data.slice(n);
        },
        removeEnd(n) {
            data = data.slice(0, n);
        },
        print() {
            console.log(data);
        }

    }
}
let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);