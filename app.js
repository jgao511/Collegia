const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  active: "coin",
  coinCount: 100,
  diceCount: 500,
  piCount: 5000,
  running: false
};

const palette = {
  ink: "#172027",
  muted: "#5e6b75",
  line: "#d8e0e6",
  teal: "#0f8b8d",
  coral: "#f25f5c",
  gold: "#f4b942",
  blue: "#3a6ea5",
  green: "#2f9e44"
};

function setStatus(text) {
  $("#globalStatus").textContent = text;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatPct(value, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setChoice(groupSelector, value, key) {
  $$(groupSelector + " button").forEach((button) => {
    const active = Number(button.dataset.count) === value;
    button.classList.toggle("active", active);
  });
  state[key] = value;
}

function setupTabs() {
  $$("#tabs .tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.panel;
      state.active = target;
      $$("#tabs .tab").forEach((item) => item.classList.toggle("active", item === tab));
      $$(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === target));
      setStatus("Ready");
      redrawActiveCharts();
    });
  });
}

function drawLineChart(canvas, values, options) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const pad = { left: 56, right: 22, top: 24, bottom: 42 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const min = options.min;
  const max = options.max;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 1;
  ctx.font = "600 22px system-ui, sans-serif";
  ctx.fillStyle = palette.muted;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (plotH * i) / 4;
    const label = max - ((max - min) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(`${Math.round(label * 100)}%`, pad.left - 10, y);
  }

  const expectedY = pad.top + plotH * (1 - (options.expected - min) / (max - min));
  ctx.strokeStyle = palette.gold;
  ctx.lineWidth = 3;
  ctx.setLineDash([12, 12]);
  ctx.beginPath();
  ctx.moveTo(pad.left, expectedY);
  ctx.lineTo(width - pad.right, expectedY);
  ctx.stroke();
  ctx.setLineDash([]);

  if (values.length > 1) {
    ctx.strokeStyle = palette.teal;
    ctx.lineWidth = 5;
    ctx.beginPath();
    values.forEach((value, index) => {
      const x = pad.left + (plotW * index) / Math.max(1, values.length - 1);
      const y = pad.top + plotH * (1 - (value - min) / (max - min));
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  ctx.fillStyle = palette.ink;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.font = "800 24px system-ui, sans-serif";
  ctx.fillText(options.title, pad.left, 30);
}

function drawBarChart(canvas, labels, counts, options = {}) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const pad = { left: 54, right: 24, top: 34, bottom: 50 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const max = Math.max(1, ...counts) * 1.12;
  const barGap = 6;
  const barW = plotW / labels.length - barGap;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 1;
  ctx.font = "600 20px system-ui, sans-serif";
  ctx.fillStyle = palette.muted;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (plotH * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  labels.forEach((label, i) => {
    const x = pad.left + (plotW * i) / labels.length + barGap / 2;
    const h = (counts[i] / max) * plotH;
    const y = pad.top + plotH - h;
    ctx.fillStyle = options.colors?.[i] || palette.blue;
    ctx.fillRect(x, y, Math.max(4, barW), h);
    ctx.fillStyle = palette.muted;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(label, x + barW / 2, pad.top + plotH + 12);
  });

  ctx.fillStyle = palette.ink;
  ctx.textAlign = "left";
  ctx.font = "800 24px system-ui, sans-serif";
  ctx.fillText(options.title || "", pad.left, 28);
}

let coinSeries = [0.5];
function setupCoin() {
  setChoice("#coinChoices", state.coinCount, "coinCount");
  $("#coinChoices").addEventListener("click", (event) => {
    if (event.target.matches("button")) setChoice("#coinChoices", Number(event.target.dataset.count), "coinCount");
  });
  $("#coinRun").addEventListener("click", runCoin);
  drawLineChart($("#coinChart"), coinSeries, { min: 0, max: 1, expected: 0.5, title: "Running heads rate" });
}

async function runCoin() {
  if (state.running) return;
  state.running = true;
  $("#coinRun").disabled = true;
  setStatus("Flipping");
  const coin = $("#coinSprite");
  const limit = state.coinCount;
  let heads = 0;
  let tails = 0;
  coinSeries = [];
  const frameEvery = Math.max(1, Math.floor(limit / 120));
  coin.classList.add("flipping");

  for (let i = 1; i <= limit; i++) {
    const isHeads = Math.random() < 0.5;
    heads += isHeads ? 1 : 0;
    tails += isHeads ? 0 : 1;
    if (i % frameEvery === 0 || i === limit) {
      coinSeries.push(heads / i);
      $("#coinReadout").textContent = isHeads ? "Heads" : "Tails";
      $("#coinTotal").textContent = i.toLocaleString();
      $("#coinHeads").textContent = heads.toLocaleString();
      $("#coinTails").textContent = tails.toLocaleString();
      $("#coinPct").textContent = formatPct(heads / i);
      drawLineChart($("#coinChart"), coinSeries, { min: 0, max: 1, expected: 0.5, title: "Running heads rate" });
      await sleep(limit <= 5 ? 460 : 16);
    }
  }

  coin.classList.remove("flipping");
  setStatus(`Finished: ${formatPct(heads / limit)} heads`);
  $("#coinRun").disabled = false;
  state.running = false;
}

let diceCounts = Array(16).fill(0);
function setupDice() {
  setChoice("#diceChoices", state.diceCount, "diceCount");
  $("#diceChoices").addEventListener("click", (event) => {
    if (event.target.matches("button")) setChoice("#diceChoices", Number(event.target.dataset.count), "diceCount");
  });
  $("#diceRun").addEventListener("click", runDice);
  drawDiceChart();
}

function drawDiceChart() {
  const labels = Array.from({ length: 16 }, (_, index) => String(index + 3));
  const colors = labels.map((label) => (Number(label) === 10 || Number(label) === 11 ? palette.coral : palette.blue));
  drawBarChart($("#diceChart"), labels, diceCounts, { title: "Frequency of three-dice sums", colors });
}

async function runDice() {
  if (state.running) return;
  state.running = true;
  $("#diceRun").disabled = true;
  setStatus("Rolling");
  diceCounts = Array(16).fill(0);
  const dice = $$("#diceSprites .die");
  dice.forEach((die) => die.classList.add("rolling"));
  const limit = state.diceCount;
  let totalSum = 0;
  const frameEvery = Math.max(1, Math.floor(limit / 120));

  for (let i = 1; i <= limit; i++) {
    const values = [rollDie(), rollDie(), rollDie()];
    const sum = values.reduce((a, b) => a + b, 0);
    diceCounts[sum - 3]++;
    totalSum += sum;

    if (i % frameEvery === 0 || i === limit) {
      values.forEach((value, index) => {
        dice[index].textContent = value;
      });
      $("#diceSum").textContent = `Sum: ${sum}`;
      $("#diceTotal").textContent = i.toLocaleString();
      $("#diceMean").textContent = (totalSum / i).toFixed(2);
      const modeIndex = diceCounts.indexOf(Math.max(...diceCounts));
      $("#diceMode").textContent = String(modeIndex + 3);
      drawDiceChart();
      await sleep(limit <= 10 ? 360 : 16);
    }
  }

  dice.forEach((die) => die.classList.remove("rolling"));
  setStatus(`Finished: mean ${(totalSum / limit).toFixed(2)}`);
  $("#diceRun").disabled = false;
  state.running = false;
}

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function setupBirthday() {
  $("#birthdayCount").addEventListener("input", () => {
    updateBirthdayStats();
    renderBirthdayPeople([]);
  });
  $("#birthdayRun").addEventListener("click", runBirthday);
  updateBirthdayStats();
  renderBirthdayPeople([]);
}

function birthdayProbability(n) {
  let noMatch = 1;
  for (let i = 0; i < n; i++) noMatch *= (365 - i) / 365;
  return 1 - noMatch;
}

function updateBirthdayStats() {
  const n = Number($("#birthdayCount").value);
  $("#birthdayCountLabel").textContent = n;
  $("#birthdayProbability").textContent = formatPct(birthdayProbability(n));
  const pairs = (n * (n - 1)) / 2;
  $("#birthdayPairs").textContent = pairs.toLocaleString();
}

function renderBirthdayPeople(matches = [], options = {}) {
  const n = Number($("#birthdayCount").value);
  const holder = $("#birthdayPeople");
  holder.innerHTML = "";
  const matchSet = new Set(matches);
  const centerX = 50;
  const centerY = 50;
  const radiusX = options.final ? 28 : 42;
  const radiusY = options.final ? 24 : 36;
  let displayIndex = 0;
  const displayTotal = options.final ? Math.max(1, matches.length) : n;
  for (let i = 0; i < n; i++) {
    const isMatch = matchSet.has(i);
    if (options.final && !isMatch) continue;
    const angle = (Math.PI * 2 * displayIndex) / displayTotal - Math.PI / 2;
    const person = document.createElement("div");
    person.className = "person";
    if (isMatch) person.classList.add("match");
    if (options.dimNonMatches && !isMatch) person.classList.add("dimmed");
    if (options.scanningIndex === i) person.classList.add("scanning");
    person.style.left = `${centerX + Math.cos(angle) * radiusX}%`;
    person.style.top = `${centerY + Math.sin(angle) * radiusY}%`;
    person.textContent = i + 1;
    if (options.birthdays?.[i]) person.title = `Day ${options.birthdays[i]}`;
    holder.appendChild(person);
    displayIndex++;
  }
}

async function runBirthday() {
  if (state.running) return;
  state.running = true;
  $("#birthdayRun").disabled = true;
  setStatus("Checking birthdays");
  const n = Number($("#birthdayCount").value);
  const groups = new Map();
  const birthdays = [];
  let matches = [];
  $("#birthdayBurst").textContent = "Guests entering...";

  for (let i = 0; i < n; i++) {
    const day = Math.floor(Math.random() * 365) + 1;
    birthdays.push(day);
    const group = groups.get(day) || [];
    group.push(i);
    groups.set(day, group);
    renderBirthdayPeople([], { scanningIndex: i, birthdays });
    await sleep(Math.max(10, 92 - n));
  }

  const matchedGroups = [...groups.entries()].filter(([, people]) => people.length > 1);
  matches = matchedGroups.flatMap(([, people]) => people);

  if (matches.length) {
    const groupText = matchedGroups
      .map(([day, people]) => `Day ${day}: ${people.map((person) => person + 1).join(", ")}`)
      .join(" | ");
    $("#birthdayMatch").textContent = matches.length.toLocaleString();
    $("#birthdayBurst").textContent = `${matchedGroups.length} birthday group${matchedGroups.length === 1 ? "" : "s"} found`;
    $("#birthdayBurst").title = groupText;
    renderBirthdayPeople(matches, { final: true, birthdays });
    setStatus("Birthday match found");
  } else {
    $("#birthdayMatch").textContent = "none";
    $("#birthdayBurst").textContent = "No shared birthday this run";
    $("#birthdayBurst").title = "";
    renderBirthdayPeople([], { final: true, birthdays });
    setStatus("No match this time");
  }

  $("#birthdayRun").disabled = false;
  state.running = false;
}

function setupVirus() {
  $("#virusCount").addEventListener("input", updateVirusProjection);
  $("#virusRun").addEventListener("click", runVirus);
  updateVirusProjection();
  renderPopulation(0, 0, false);
  drawVirusChart(5, 50);
}

function updateVirusProjection() {
  const people = Number($("#virusCount").value);
  const actual = Math.round(people / 10000);
  const falsePositives = Math.round((people - actual) / 1000);
  const positives = actual + falsePositives;
  $("#virusCountLabel").textContent = people.toLocaleString();
  $("#virusActual").textContent = actual.toLocaleString();
  $("#virusFalse").textContent = falsePositives.toLocaleString();
  $("#virusPositive").textContent = positives.toLocaleString();
  $("#virusPrecision").textContent = positives ? formatPct(actual / positives) : "--";
  $("#virusCaption").textContent = "Expected model: prevalence 1/10,000, false positive rate 1/1,000, and infected people are detected. Press Run screening to see one random batch.";
  drawVirusChart(actual, falsePositives);
}

function renderPopulation(actual, falsePositives, filtered) {
  const holder = $("#population");
  holder.innerHTML = "";
  const totalIcons = 250;
  const infectedIcons = Math.max(1, Math.round((actual / Math.max(actual + falsePositives, 1)) * 18));
  const falseIcons = Math.max(1, Math.round((falsePositives / Math.max(actual + falsePositives, 1)) * 60));

  for (let i = 0; i < totalIcons; i++) {
    const icon = document.createElement("div");
    icon.className = "pixel-person";
    if (filtered && i < infectedIcons) icon.classList.add("infected");
    else if (filtered && i < infectedIcons + falseIcons) icon.classList.add("false-positive");
    else if (filtered) icon.classList.add("cleared");
    holder.appendChild(icon);
  }
}

function drawVirusChart(actual, falsePositives) {
  drawBarChart(
    $("#virusChart"),
    ["True +", "False +"],
    [actual, falsePositives],
    { title: "Among positive tests", colors: [palette.coral, palette.gold] }
  );
}

async function runVirus() {
  if (state.running) return;
  state.running = true;
  $("#virusRun").disabled = true;
  setStatus("Screening population");
  const people = Number($("#virusCount").value);
  const actual = sampleBinomial(people, 1 / 10000);
  const falsePositives = sampleBinomial(Math.max(0, people - actual), 1 / 1000);
  const positives = actual + falsePositives;
  const stage = $(".virus-stage");

  renderPopulation(actual, falsePositives, false);
  stage.classList.add("scanning");
  await sleep(1150);
  stage.classList.remove("scanning");
  renderPopulation(actual, falsePositives, true);
  $("#virusActual").textContent = actual.toLocaleString();
  $("#virusFalse").textContent = falsePositives.toLocaleString();
  $("#virusPositive").textContent = positives.toLocaleString();
  $("#virusPrecision").textContent = positives ? formatPct(actual / positives) : "0.0%";
  $("#virusCaption").textContent = `This random batch tested ${people.toLocaleString()} people. Positive accuracy asks: among everyone who tested positive, how many truly had the virus?`;
  drawVirusChart(actual, falsePositives);
  setStatus(`${falsePositives.toLocaleString()} false positives vs ${actual.toLocaleString()} true positives`);
  $("#virusRun").disabled = false;
  state.running = false;
}

function sampleBinomial(trials, probability) {
  let hits = 0;
  for (let i = 0; i < trials; i++) {
    if (Math.random() < probability) hits++;
  }
  return hits;
}

let piSeries = [];
let piPoints = [];

function setupMonteCarlo() {
  setChoice("#piChoices", state.piCount, "piCount");
  $("#piChoices").addEventListener("click", (event) => {
    if (event.target.matches("button")) setChoice("#piChoices", Number(event.target.dataset.count), "piCount");
  });
  $("#piRun").addEventListener("click", runPi);
  drawPiCanvas([]);
  drawPiChart();
}

function drawPiCanvas(points) {
  const canvas = $("#piCanvas");
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const pad = 34;
  const size = width - pad * 2;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f8fbfb";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 4;
  ctx.strokeRect(pad, pad, size, size);
  ctx.beginPath();
  ctx.arc(pad, height - pad, size, -Math.PI / 2, 0);
  ctx.strokeStyle = palette.ink;
  ctx.lineWidth = 5;
  ctx.stroke();

  const visible = points.slice(-2400);
  visible.forEach((point) => {
    ctx.fillStyle = point.inside ? palette.teal : palette.coral;
    ctx.globalAlpha = 0.64;
    ctx.beginPath();
    ctx.arc(pad + point.x * size, height - pad - point.y * size, 2.2, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function drawPiChart() {
  const canvas = $("#piChart");
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const pad = { left: 60, right: 22, top: 30, bottom: 44 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const min = 2.7;
  const max = 3.55;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 1;
  ctx.font = "600 20px system-ui, sans-serif";
  ctx.fillStyle = palette.muted;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (plotH * i) / 4;
    const label = max - ((max - min) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(label.toFixed(2), pad.left - 10, y);
  }

  const piY = pad.top + plotH * (1 - (Math.PI - min) / (max - min));
  ctx.strokeStyle = palette.gold;
  ctx.lineWidth = 3;
  ctx.setLineDash([12, 12]);
  ctx.beginPath();
  ctx.moveTo(pad.left, piY);
  ctx.lineTo(width - pad.right, piY);
  ctx.stroke();
  ctx.setLineDash([]);

  if (piSeries.length > 1) {
    ctx.strokeStyle = palette.teal;
    ctx.lineWidth = 5;
    ctx.beginPath();
    piSeries.forEach((value, index) => {
      const x = pad.left + (plotW * index) / Math.max(1, piSeries.length - 1);
      const y = pad.top + plotH * (1 - (clamp(value, min, max) - min) / (max - min));
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  ctx.fillStyle = palette.ink;
  ctx.textAlign = "left";
  ctx.font = "800 24px system-ui, sans-serif";
  ctx.fillText("Pi estimate over time", pad.left, 28);
}

async function runPi() {
  if (state.running) return;
  state.running = true;
  $("#piRun").disabled = true;
  setStatus("Throwing points");
  const limit = state.piCount;
  const frameEvery = Math.max(1, Math.floor(limit / 140));
  let inside = 0;
  piSeries = [];
  piPoints = [];

  for (let i = 1; i <= limit; i++) {
    const x = Math.random();
    const y = Math.random();
    const hit = x * x + y * y <= 1;
    if (hit) inside++;
    if (i <= 2400 || i % Math.ceil(limit / 2400) === 0) piPoints.push({ x, y, inside: hit });

    if (i % frameEvery === 0 || i === limit) {
      const estimate = 4 * inside / i;
      piSeries.push(estimate);
      $("#piEstimate").textContent = estimate.toFixed(5);
      $("#piAccuracy").textContent = formatPct(1 - Math.abs(estimate - Math.PI) / Math.PI, 2);
      $("#piInside").textContent = inside.toLocaleString();
      $("#piTotal").textContent = i.toLocaleString();
      drawPiCanvas(piPoints);
      drawPiChart();
      await sleep(limit <= 1000 ? 20 : 10);
    }
  }

  setStatus(`Pi estimate ${$("#piEstimate").textContent}`);
  $("#piRun").disabled = false;
  state.running = false;
}

function redrawActiveCharts() {
  if (state.active === "coin") drawLineChart($("#coinChart"), coinSeries, { min: 0, max: 1, expected: 0.5, title: "Running heads rate" });
  if (state.active === "dice") drawDiceChart();
  if (state.active === "virus") updateVirusProjection();
  if (state.active === "montecarlo") {
    drawPiCanvas(piPoints);
    drawPiChart();
  }
}

setupTabs();
setupCoin();
setupDice();
setupBirthday();
setupVirus();
setupMonteCarlo();
