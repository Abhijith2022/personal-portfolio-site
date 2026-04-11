const guestInput = document.querySelectorAll(".search-item")[2];
const destination = document.querySelectorAll(".search-item")[0];
const guestPanel = document.getElementById("guestPanel");

const datePanel = document.getElementById("datePanel");
const dateRows = document.querySelectorAll(".date-row");
const whenInput = document
  .querySelectorAll(".search-item")[1]
  .querySelector("input");

const destinationPanel = document.getElementById("destinationPanel");
const destinationRows = document.querySelectorAll(".destination-row");
const whereInput = document.querySelectorAll(".search-item")[0];
const whereText = whereInput.querySelector("input");
/* open panel */

const whenTrigger = document.querySelectorAll(".search-item")[1];

function closeAllPanels() {
  guestPanel.classList.remove("active");
  destinationPanel.classList.remove("active");
  datePanel.classList.remove("active");
}
guestInput.addEventListener("click", function (e) {
  e.stopPropagation();
  closeAllPanels();
  guestPanel.classList.toggle("active");
});

document.addEventListener("click", function () {
  guestPanel.classList.remove("active");
});

guestPanel.addEventListener("click", function (e) {
  e.stopPropagation();
});

searchBtn.addEventListener("click", function (e) {
  alert(
    `Adults: ${counts.adult}, Children: ${counts.child}, Infants: ${counts.infant}`,
  );
});

/* open panel */

whereInput.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllPanels();
  destinationPanel.classList.toggle("active");
});

/* close outside */

document.addEventListener("click", () => {
  destinationPanel.classList.remove("active");
});

/* prevent close */

destinationPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* selection */

destinationRows.forEach((row) => {
  row.addEventListener("click", () => {
    destinationRows.forEach((r) => r.classList.remove("selected"));

    row.classList.add("selected");

    whereText.value = row.querySelector(".city").textContent;

    destinationPanel.classList.remove("active");
  });
});

destinationPanel.addEventListener;
const counts = {
  adult: 0,
  child: 0,
  infant: 0,
};

document.querySelectorAll(".plus").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    counts[type]++;

    updateDisplay(type);
  });
});

document.querySelectorAll(".minus").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    if (counts[type] > 0) {
      counts[type]--;
    }

    updateDisplay(type);
  });
});

function updateDisplay(type) {
  if (type === "adult") {
    document.getElementById("adultCount").textContent = counts.adult;
  }

  if (type === "child") {
    document.getElementById("childCount").textContent = counts.child;
  }

  if (type === "infant") {
    document.getElementById("infantCount").textContent = counts.infant;
  }
}

whenTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllPanels();
  datePanel.classList.toggle("active");
});

/* close outside */

document.addEventListener("click", () => {
  datePanel.classList.remove("active");
});

/* prevent close */

datePanel.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* select option */

dateRows.forEach((row) => {
  row.addEventListener("click", () => {
    dateRows.forEach((r) => r.classList.remove("selected"));

    row.classList.add("selected");

    whenInput.value = row.querySelector(".date-option").textContent;

    datePanel.classList.remove("active");
  });
});
