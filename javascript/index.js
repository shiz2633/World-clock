const cities = {
  london: "Europe/London",
  girne: "Europe/Nicosia",
  luxor: "Africa/Cairo",
  perth: "Australia/Perth",
};

const citySelect = document.querySelector("#city-select");
const cityElements = document.querySelectorAll(".city");

function updateCityTime(city, timeZone) {
  const now = new Date();
  const cityElement = document.querySelector(`#${city}`);

  const cityTime = now.toLocaleString("en-GB", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const cityDate = now.toLocaleDateString("en-GB", {
    timeZone: timeZone,
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  cityElement.querySelector(".date").innerHTML = cityDate;
  cityElement.querySelector(".time").innerHTML = cityTime;
}

function updateAllCities() {
  Object.entries(cities).forEach(([city, timeZone]) => {
    updateCityTime(city, timeZone);
  });
}

citySelect.addEventListener("change", function () {
  const selectedCity = citySelect.value;

  cityElements.forEach(function (cityElement) {
    if (selectedCity === "") {
      // Show all cities
      cityElement.style.display = "flex";
    } else if (cities[cityElement.id] === selectedCity) {
      // Show selected city
      cityElement.style.display = "flex";
    } else {
      // Hide other cities
      cityElement.style.display = "none";
    }
  });
});

// Update all cities immediately
updateAllCities();

// Keep all clocks live
setInterval(updateAllCities, 1000);
