import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const quickSortDescription = `
<b>Quick Sort</b> selects a <b>pivot</b> element, partitions the list into 
values smaller and greater than the pivot, and then recursively sorts each part.  
It is one of the fastest and most commonly used sorting algorithms in practice.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n log n)</li>
  <li>Worst case: O(n²)</li>
  <li>Space: O(log n)</li>
</ul>
`;

export async function quickSort(container, array, state, delay = 10, left = 0, right = array.length - 1) {
  if (state.stopped) return;
  if (left >= right) return;

  const index = await partition(container, array, state, delay, left, right);
  if (state.stopped) return;

  await quickSort(container, array, state, delay, left, index - 1);
  await quickSort(container, array, state, delay, index, right);
}

async function partition(container, array, state, delay, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;

    if (state.stopped) return left;

    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      renderChart(container, array);
      await sleep(delay);
      left++;
      right--;
    }
  }
  return left;
}
