export default function DataCleanMerge(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].initiating_symbol && data[i].target_symbol) {
      arr.push(data[i]);
    }
  }
  return arr;
}
