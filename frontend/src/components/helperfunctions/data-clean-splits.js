//O(n)
//Loops to make sure both symbols are present
export default function DataCleanSplit(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].target_symbol) {
      arr.push(data[i]);
    }
  }
  return arr;
}
