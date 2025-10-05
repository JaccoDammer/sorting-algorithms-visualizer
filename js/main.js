import { shuffle, isSorted, sleep } from "./utils.js";
import { renderChart } from "./chart.js";
import { algorithms } from "./algorithms/index.js";

document.addEventListener("DOMContentLoaded", async () => {
  // initialize variables
  const chartContainer = document.getElementById("chart");
  const buttonsContainer = document.getElementById("algorithm-buttons");
  const resetBtn = document.getElementById("reset-btn");
  const infoPanel = document.getElementById("algorithm-description");

  const versionElement = document.getElementById("version");

  // set version backed on version in package.json
  try {
    const response = await fetch("./package.json");
    if (!response.ok) throw new Error("Cannot load package.json");

    const pkg = await response.json();
    versionElement.textContent = `v${pkg.version}`;
  } catch (err) {
    console.error("Failed to load version:", err);
    versionElement.textContent = "";
  }

  // initialize shuffled array
  const N = 100;
  let values = shuffle(createSequentialArray(N));

  const sortState = { stopped: false, sorting: false };

  // render chart with shuffled array
  renderChart(chartContainer, values);

  // generate algorithm buttons
  Object.entries(algorithms).forEach(([key, algo]) => {
    const btn = document.createElement("button");
    btn.textContent = algo.name;
    btn.classList.add("algo-btn");

    // add event listeners
    btn.addEventListener("click", async () => {
      if (sortState.sorting) return;
      
      // if sorted, regenerate new array and render
      if (isSorted(values)) {
        values = shuffle(createSequentialArray(N))
        renderChart(chartContainer, values);
      }

      sortState.stopped = false;
      sortState.sorting = true;
      btn.classList.add("active");

      infoPanel.innerHTML = algo.description;
      disableAllButtons(true);

      // execute sort algorithm
      await algo.sortFn(chartContainer, values, sortState, 10);

      // reset state after sorting
      sortState.sorting = false;
      disableAllButtons(false);
      btn.classList.remove("active");
    });

    buttonsContainer.appendChild(btn);
  });

  resetBtn.addEventListener("click", () => {
    sortState.stopped = true;
    sortState.sorting = false;

    // reset array and render chart
    values = shuffle(createSequentialArray(N));
    renderChart(chartContainer, values);
    
    infoPanel.innerHTML = "Click on an algorithm to show the explanation.";

    // remove active class from all buttons
    const allButtons = buttonsContainer.querySelectorAll("button");
    allButtons.forEach(b => (b.classList.remove("active")));
  });

  function disableAllButtons(disabled) {
    const allButtons = buttonsContainer.querySelectorAll("button");
    allButtons.forEach(b => (b.disabled = disabled));
  }
});

// generate array 1 to N+1 (include value N)
function createSequentialArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}
