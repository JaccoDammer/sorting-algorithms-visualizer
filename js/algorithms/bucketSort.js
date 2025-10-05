import { renderChart } from "../chart.js";
import { sleep } from "../utils.js";

export const bucketSortDescription = `
<b>Bucket Sort</b> divides the input values into several “buckets” based on their range.
Each bucket is then sorted individually (for example, using Insertion Sort),
and all buckets are concatenated to produce the final sorted list.
<br><br>
Complexity:
<ul>
  <li>Average time: O(n + k)</li>
  <li>Space: O(n + k)</li>
</ul>
`;

export async function bucketSort(container, array, state, delay = 10) {
  const n = array.length;
  const max = Math.max(...array);
  const bucketCount = Math.ceil(Math.sqrt(n));
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Populate every bucket
  for (let i = 0; i < n; i++) {
    if (state.stopped) return;
    const index = Math.floor((array[i] / max) * (bucketCount - 1));
    buckets[index].push(array[i]);
    renderChart(container, buckets.flat().concat(array.slice(buckets.flat().length)));
    await sleep(delay);
  }

  // Sort each bucket
  for (let bucket of buckets) {
    for (let i = 1; i < bucket.length; i++) {
      if (state.stopped) return;
      let key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) {
        bucket[j + 1] = bucket[j];
        j--;
        renderChart(container, buckets.flat());
        await sleep(delay);
      }
      bucket[j + 1] = key;
      renderChart(container, buckets.flat());
      await sleep(delay);
    }
  }

  // Combine buckets
  const result = buckets.flat();
  for (let i = 0; i < n; i++) array[i] = result[i];
  renderChart(container, array);
}

