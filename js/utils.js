// Shuffle an array in-place using Fisher–Yates algorithm.
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Small delay helper for animations
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Quick check if chart is already sorted
export function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false;
    }
    return true;
  }