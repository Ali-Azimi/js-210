
const sampleArr = Array.from({length: 100}, (_,i) => i)


function binarySearch(arr, target) {
    console.time();
  let start = 0;
  let end = arr.length - 1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) { 
        console.timeEnd();
        return target 
    }

    if (target < arr[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }
}


function linearSearch(arr,target) {
    console.time();
    const result = arr.find(item => item === target)
    console.timeEnd();
    return result;
}