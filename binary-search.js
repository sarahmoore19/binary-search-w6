function linearSearch (arr, target) {

  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;

};

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  while (min <= max) {
    if (arr[mid] === target) return mid;
    else if (target < arr[mid]) max = mid - 1;
    else if (target > arr[mid]) min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }
  return -1;
}


module.exports = [linearSearch, binarySearch]
