let assert = require('chai').assert;
function isSymmetric(arr) {
        if (!Array.isArray(arr))
            return false; // Non-arrays are non-symmetric
        let reversed = arr.slice(0).reverse(); // Clone and reverse
        let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
        return equal;
    }
    describe('isSymtetric', function () {
        it('should take an symetric array with even arguments',
            () => {
                let numbers = [1, 2, 3, 3, 2, 1];
     
                let result = isSymmetric(numbers);
     
                expect(result).to.be.true;
            });
        it('should take an symetric array with odd arguments',
            () => {
                let numbers = [1, 2, 3, 2, 1];
     
                let result = isSymmetric(numbers);
     
                expect(result).to.be.true;
     
            });
        it('should take an symetric array with string arguments',
            () => {
                let input = ['a', [], {}, ()=>true, ()=>true, {}, [], 'a'];
     
                let result = isSymmetric(input);
     
                expect(result).to.be.true;
     
            });
        it('should return false for any input that isn’t of the correct type',
            () => {
                expect(isSymmetric()).to.be.false;
                expect(isSymmetric(null)).to.be.false;
                expect(isSymmetric({})).to.be.false;
                expect(isSymmetric(false)).to.be.false;
                expect(isSymmetric(0)).to.be.false;
                expect(isSymmetric({})).to.be.false;
                expect(isSymmetric(NaN)).to.be.false;
            });
        it('should return false if the array input is non symmetric',
            () => {
                let numbers = [1, 2, 3, 4];
     
                let result = isSymmetric(numbers);
     
                expect(result).to.be.false
        })
    })