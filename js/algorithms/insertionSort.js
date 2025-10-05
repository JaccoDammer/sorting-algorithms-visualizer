import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const insertionSortDescription = `
<b>Insertion Sort</b> gradually builds the sorted portion of the list.  
It takes one element at a time from the unsorted part and inserts it 
into its correct position within the sorted section.  
This makes it efficient for small datasets or nearly sorted data.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n²)</li>
  <li>Best case: O(n)</li>
  <li>Space complexity: O(1)</li>
</ul>
`;

export async function insertionSort(container, array, state, delay = 10) {
  for (let i = 1; i < array.length; i++) {
    if (state.stopped) return;

    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      if (state.stopped) return;
      array[j + 1] = array[j];
      j--;
      renderChart(container, array);
      await sleep(delay);
    }

    array[j + 1] = key;
    renderChart(container, array);
    await sleep(delay);
  }
}
