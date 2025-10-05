import { renderChart } from "../chart.js";
import { sleep, shuffle, isSorted } from "../utils.js";

export const bogoSortDescription = `
<b>Bogo Sort</b> (also called “stupid sort”) repeatedly checks whether the list is sorted.
If it is not, the list is shuffled uniformly at random and checked again.
This continues until the array happens to be sorted by chance.
<br><br>
Complexity:
<ul>
  <li>Expected time: Θ(n · n!) (often written as O((n+1)!))</li>
  <li>Space: O(1)</li>
</ul>
`;

export async function bogoSort(container, array, state, delay = 10) {
  while (!isSorted(array)) {
    if (state.stopped) return;
    shuffle(array);
    renderChart(container, array);
    await sleep(delay);
  }
}
