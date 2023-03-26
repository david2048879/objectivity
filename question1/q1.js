function swapArrayElemet(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    
    // Return the modified array
    return arr;
  }
  
  let myArray = [1, 2, 3, 4, 5];
  let swappedArray = swapArrayElemet(myArray, 1, 3);
  console.log(swappedArray); // Output: [1, 4, 3, 2, 5]