import { sleep } from "../utils.js";
import { renderChart } from "../chart.js";

export const bubbleSortDescription = `
<b>Bubble Sort</b> is a simple sorting algorithm that repeatedly 
passes through the list, compares adjacent elements, and swaps them 
if they are in the wrong order.  
With each full pass, the largest unsorted element “bubbles up” to its correct position 
at the end of the list.  
This process repeats until no more swaps are needed.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n²)</li>
  <li>Best case: O(n) (when the list is already sorted)</li>
  <li>Space complexity: O(1)</li>
</ul>
`;

export async function bubbleSort(container, array, state, delay = 10) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (state.stopped) return;

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        renderChart(container, array);
      }

      await sleep(delay);

      if (state.stopped) return;
    }
  }
}