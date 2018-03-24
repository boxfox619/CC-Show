export const insertItem = (array, index, item) =>{
    let newArray = array.slice();
    newArray.splice(index, 0, item);
    return newArray;
}