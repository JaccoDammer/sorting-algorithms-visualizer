import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const shellSortDescription = `
<b>Shell Sort</b> is an extension of Insertion Sort that starts by comparing elements 
separated by a specific <b>gap</b>.  
The gap is gradually reduced until it becomes 1, at which point the list is nearly sorted 
and the algorithm quickly finishes.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n log² n)</li>
  <li>Space: O(1)</li>
</ul>
`;

export async function shellSort(container, array, state, delay = 10) {
  let n = array.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      if (state.stopped) return;
      const temp = array[i];
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        if (state.stopped) return;
        array[j] = array[j - gap];
        renderChart(container, array);
        await sleep(delay);
      }
      array[j] = temp;
      renderChart(container, array);
      await sleep(delay);
    }
  }
}
