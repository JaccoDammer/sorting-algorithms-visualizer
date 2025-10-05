import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const heapSortDescription = `
<b>Heap Sort</b> builds a <b>max-heap</b> from the data and then repeatedly removes 
the largest element (the root) from the heap.  
It combines the advantages of the heap data structure with in-place sorting, 
making it efficient and predictable.
<br><br>
Complexity:
<ul>
  <li>Time: O(n log n)</li>
  <li>Space: O(1)</li>
</ul>
`;

export async function heapSort(container, array, state, delay = 10) {
  const n = array.length;

  // Bouw max-heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(container, array, state, n, i, delay);
  }

  // Eén voor één element naar einde brengen
  for (let i = n - 1; i > 0; i--) {
    if (state.stopped) return;
    [array[0], array[i]] = [array[i], array[0]];
    renderChart(container, array);
    await sleep(delay);
    await heapify(container, array, state, i, 0, delay);
  }
}

async function heapify(container, array, state, n, i, delay) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) largest = left;
  if (right < n && array[right] > array[largest]) largest = right;

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    renderChart(container, array);
    await sleep(delay);
    await heapify(container, array, state, n, largest, delay);
  }
}
