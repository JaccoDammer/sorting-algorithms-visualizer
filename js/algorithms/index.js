import { bogoSort, bogoSortDescription } from "./bogoSort.js";
import { bubbleSort, bubbleSortDescription } from "./bubbleSort.js";
import { bucketSort, bucketSortDescription } from "./bucketSort.js";
import { cocktailShakerSort, cocktailShakerSortDescription } from "./cocktailShakerSort.js";
import { gnomeSort, gnomeSortDescription } from "./gnomeSort.js";
import { heapSort, heapSortDescription } from "./heapSort.js";
import { insertionSort, insertionSortDescription } from "./insertionSort.js";
import { mergeSort, mergeSortDescription } from "./mergeSort.js";
import { pigeonholeSort, pigeonholeSortDescription } from "./pigeonholeSort.js";
import { quickSort, quickSortDescription } from "./quickSort.js";
import { radixSort, radixSortDescription } from "./radixSort.js";
import { selectionSort, selectionSortDescription } from "./selectionSort.js";
import { shellSort, shellSortDescription } from "./shellSort.js";

export const algorithms = {
  bogo: {
    name: "Bogo Sort",
    sortFn: bogoSort,
    description: bogoSortDescription,
  },
  bubble: {
    name: "Bubble Sort",
    sortFn: bubbleSort,
    description: bubbleSortDescription,
  },
  bucket: {
    name: "Bucket Sort",
    sortFn: bucketSort,
    description: bucketSortDescription,
  },
  cocktail: {
    name: "Cocktail Shaker Sort",
    sortFn: cocktailShakerSort,
    description: cocktailShakerSortDescription,
  },
  gnome: {
    name: "Gnome Sort",
    sortFn: gnomeSort,
    description: gnomeSortDescription,
  },
  heap: {
    name: "Heap Sort",
    sortFn: heapSort,
    description: heapSortDescription,
  },
  insertion: {
    name: "Insertion Sort",
    sortFn: insertionSort,
    description: insertionSortDescription,
  },
  merge: {
    name: "Merge Sort",
    sortFn: mergeSort,
    description: mergeSortDescription,
  },
  pigeonhole: {
    name: "Pigeonhole Sort",
    sortFn: pigeonholeSort,
    description: pigeonholeSortDescription,
  },
  quick: {
    name: "Quick Sort",
    sortFn: quickSort,
    description: quickSortDescription,
  },
  radix: {
    name: "Radix Sort",
    sortFn: radixSort,
    description: radixSortDescription,
  },
  selection: {
    name: "Selection Sort",
    sortFn: selectionSort,
    description: selectionSortDescription,
  },
  shell: {
    name: "Shell Sort",
    sortFn: shellSort,
    description: shellSortDescription,
  },
};
