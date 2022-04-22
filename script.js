//TASK 1 hazir

let str = 'abbcabcdefef';

let resultStr = '';

for(let i = 0; i < str.length; i++) {
    if(!resultStr.includes(str[i])) {
        resultStr += str[i]; 
    }
}

console.log(resultStr);


//Task2 hazir

let arr = [2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1];

let numArr = [];
let stringArr = [];
let resultArr = [];

for(let el of arr) {
    if(typeof el === 'number') {
        numArr.push(el);
    }
    else {
        stringArr.push(el);
    }
}

resultArr = numArr.concat(stringArr);

console.log(resultArr);


//Task 3 hazir

let m = [[0,1,2], [3,4,5], [6,7,8]];

let newArr = [];

let queue = m.length;

for(let i = 0; i <= m.length - 1; i++) {
    let queue = m.length;
    newArr.push([]);
    for(let j = 0; j <= m.length - 1; j++) {
        queue--;
        newArr[i].push(m[queue][i]);
    }
}

console.log(newArr);



//Task 4 hazir

function anagram(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();

    if(firstWord.length === secondWord.length) {
        for(let i = 0; i < firstWord.length; i++) {
            if(secondWord.includes(firstWord[i])) {
                let index = secondWord.indexOf(firstWord[i]);
                let count1 = 0;
                let count2 = 0;
                for(let j = 0; j < firstWord.length; j++) {
                    if(firstWord[i] === firstWord[j]) {
                        count1++;
                    }
                    
                    if(firstWord[i] === secondWord[j]) {
                        count2++;
                    }
                }

                if(count1 === count2) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else { 
                return false;
            }
        }
    }
    else {
        return false;
    }
}

console.log(anagram('KENAn', 'naNek'));


//Task 5 hazir
function checkSum(arr, value) {
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = i + 1; j <= arr.length - 1; j++) {
            if((arr[i] + arr[j]) === value) {
                return `${arr[i]} ${arr[j]}`;
            }
        }
    }

    return [];
} 

console.log(checkSum([1, 4, 3, 5, 20], 7));


// Task 6 hazir

function losingItems() {
    let loseItems = [];

    for(let j = 1; j <= n; j++) {
        if(!arr.includes(j)) {
            loseItems.push(j);
        }
    }

    return loseItems;

}


console.log(missingItems([1,5,3,2,4, 11, 14, 15], 17));
  