const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    '6': 77,
    length: 7,
    'forEach': function(aaa) {  
        for(let i=0; i<this.length; i++) {
            aaa(this[i], i);
        }
    },
    'filter': function(fn) {
        const temp = [];
        // let a = 0;
        for (let i = 0; i < this.length; i++) {
            
            const result = fn(this[i], i);
            // if (result) { temp[a] = this[i]; a++ }
            if (result) { temp.push(this[i]) };
        }
        
        return temp;
    }
};

const arr2 = myArr.filter( (item, i) => item <= 70 );
console.log(arr2); // [ 3, 9, 34, 65 ]