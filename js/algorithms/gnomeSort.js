import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const gnomeSortDescription = `
<b>Gnome Sort</b> is similar to Insertion Sort but uses a simpler approach.  
It compares the current element with the previous one:  
if they are in the correct order, it moves forward;  
otherwise, it swaps them and steps one position back.  
This process continues until the entire list is sorted.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n²)</li>
  <li>Space complexity: O(1)</li>
</ul>
`;

export async function gnomeSort(container, array, state, delay = 10) {
  let index = 0;

  while (index < array.length) {
    if (state.stopped) return;

    if (index === 0) {
      index++;
    } else if (array[index] >= array[index - 1]) {
      index++;
    } else {
      [array[index], array[index - 1]] = [array[index - 1], array[index]];
      index--;
      renderChart(container, array);
      await sleep(delay);
    }
  }
}
