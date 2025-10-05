import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const mergeSortDescription = `
<b>Merge Sort</b> divides the list into two halves, recursively sorts them, 
and then merges them back together into a single sorted list.  
It follows the <em>divide and conquer</em> principle and is known for being a stable and reliable sorting algorithm.
<br><br>
Complexity:
<ul>
  <li>Time: O(n log n)</li>
  <li>Space: O(n)</li>
  <li>Stable: Yes</li>
</ul>
`;

export async function mergeSort(container, array, state, delay = 10, left = 0, right = array.length - 1) {
  if (state.stopped) return;
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  await mergeSort(container, array, state, delay, left, mid);
  await mergeSort(container, array, state, delay, mid + 1, right);
  await merge(container, array, state, delay, left, mid, right);
}

async function merge(container, array, state, delay, left, mid, right) {
  const leftArr = array.slice(left, mid + 1);
  const rightArr = array.slice(mid + 1, right + 1);
  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (state.stopped) return;
    if (leftArr[i] <= rightArr[j]) {
      array[k++] = leftArr[i++];
    } else {
      array[k++] = rightArr[j++];
    }
    renderChart(container, array);
    await sleep(delay);
  }

  while (i < leftArr.length) {
    if (state.stopped) return;
    array[k++] = leftArr[i++];
    renderChart(container, array);
    await sleep(delay);
  }
  while (j < rightArr.length) {
    if (state.stopped) return;
    array[k++] = rightArr[j++];
    renderChart(container, array);
    await sleep(delay);
  }
}
