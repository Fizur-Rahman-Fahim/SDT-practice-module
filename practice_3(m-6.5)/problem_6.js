const findGreatter = (array) => {
    let element = array[0];
    
    for(let i = 1; i < array.length; i++) {
        if(element.length < array[i].length) {
            element = array[i];
        }
    }
    return element;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const result = findGreatter(friends);

console.log(result);