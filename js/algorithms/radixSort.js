import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const radixSortDescription = `
<b>Radix Sort</b> sorts numbers by their individual digit positions, 
starting from the least significant digit and moving toward the most significant one.  
It uses Counting Sort as a stable subroutine for each digit pass.
<br><br>
Complexity:
<ul>
  <li>Time: O(d · (n + k))</li>
  <li>Space: O(n + k)</li>
</ul>
`;

export async function radixSort(container, array, state, delay = 10) {
  const max = Math.max(...array);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    if (state.stopped) return;
    await countingSortByDigit(container, array, state, delay, exp);
  }
}

async function countingSortByDigit(container, array, state, delay, exp) {
  const output = new Array(array.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < array.length; i++) {
    const index = Math.floor(array[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) count[i] += count[i - 1];

  for (let i = array.length - 1; i >= 0; i--) {
    if (state.stopped) return;
    const index = Math.floor(array[i] / exp) % 10;
    output[--count[index]] = array[i];
    renderChart(container, output.concat(array.slice(output.length)));
    await sleep(delay);
  }

  for (let i = 0; i < array.length; i++) array[i] = output[i];
  renderChart(container, array);
  await sleep(delay);
}
