import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const selectionSortDescription = `
<b>Selection Sort</b> repeatedly finds the smallest element in the unsorted portion 
of the list and places it at the beginning.  
This process continues until the entire list is sorted.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n²)</li>
  <li>Space complexity: O(1)</li>
</ul>
`;

export async function selectionSort(container, array, state, delay = 10) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    if (state.stopped) return;
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (state.stopped) return;
      if (array[j] < array[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      renderChart(container, array);
      await sleep(delay);
      if (state.stopped) return;
    }
  }
}
