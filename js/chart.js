export function renderChart(container, values) {
  container.innerHTML = "";

  const maxValue = Math.max(...values);

  values.forEach(value => {
    const bar = document.createElement("div");
    bar.className = "bar";
    const heightPercentage = (value / maxValue) * 100;
    bar.style.height = `${heightPercentage}%`; // set bar height
    bar.title = value;
    container.appendChild(bar);
  });
}

