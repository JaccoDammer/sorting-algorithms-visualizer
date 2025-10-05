import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const pigeonholeSortDescription = `
<b>Pigeonhole Sort</b> creates a “hole” (or bucket) for every possible value 
and places each element into its corresponding hole.  
After all elements are distributed, the holes are combined in order 
to produce the sorted list.
<br><br>
Complexity:
<ul>
  <li>Time: O(n + k)</li>
  <li>Space: O(n + k)</li>
</ul>
`;

export async function pigeonholeSort(container, array, state, delay = 10) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const range = max - min + 1;
  const holes = Array.from({ length: range }, () => []);

  for (let i = 0; i < array.length; i++) {
    if (state.stopped) return;

    const holeIndex = array[i] - min;
    holes[holeIndex].push(array[i]);

    const placed = holes.flat();
    renderChart(container, placed.concat(array.slice(placed.length)));
    await sleep(delay);
  }

  let i = 0;
  for (let hole of holes) {
    for (let val of hole) {
      if (state.stopped) return;
      array[i++] = val;
      renderChart(container, array);
      await sleep(delay);
    }
  }
}
