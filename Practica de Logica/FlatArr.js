function flattenArray(nestedArray) {
    let flatArray = []; 
    for (let element of nestedArray) {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flattenArray(element));
        } else {
            flatArray.push(element);
        }
    }

    return flatArray; 
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

let flattenedArray = flattenArray(multiDimension);

console.log(flattenedArray); 
