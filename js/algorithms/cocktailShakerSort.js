import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const cocktailShakerSortDescription = `
<b>Cocktail Shaker Sort</b> is an improved version of Bubble Sort.  
Instead of only traversing the list from left to right, it alternates 
between left-to-right and right-to-left passes.  
This allows both the largest and smallest elements to move toward their correct positions 
more quickly.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n²)</li>
  <li>Space complexity: O(1)</li>
</ul>
`;

export async function cocktailShakerSort(container, array, state, delay = 10) {
  let swapped = true;
  let start = 0;
  let end = array.length - 1;

  while (swapped) {
    if (state.stopped) return;

    swapped = false;

    // Van links naar rechts
    for (let i = start; i < end; i++) {
      if (state.stopped) return;
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
        renderChart(container, array);
        await sleep(delay);
      }
    }

    if (!swapped) break;

    swapped = false;
    end--;

    // Van rechts naar links
    for (let i = end - 1; i >= start; i--) {
      if (state.stopped) return;
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
        renderChart(container, array);
        await sleep(delay);
      }
    }

    start++;
  }
}
