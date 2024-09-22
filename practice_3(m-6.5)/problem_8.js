const findGreatter = (array) => {
    let element = array[0];
    
    for(let i = 1; i < array.length; i++) {
        if(element < array[i]) {
            element = array[i];
        }
    }
    return element;
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const result = findGreatter(numbers);

console.log(result);