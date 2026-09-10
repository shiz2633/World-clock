const cities = {
  london: "Europe/London",
  girne: "Europe/Nicosia",
  luxor: "Africa/Cairo",
  perth: "Australia/Perth",
};

// Detect the user's current timezone
const currentTimeZone = moment.tz.guess();

const citySelect = document.querySelector("#city-select");
const cityElements = document.querySelectorAll(".city");

function updateCityTime(city, timeZone) {
  const now = new Date();

  const cityElement = document.querySelector(`#${city}`);

  const cityTime = now.toLocaleTimeString("en-GB", {
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
    } else if (selectedCity === "current") {
      // Show the city matching the user's current timezone
      if (cities[cityElement.id] === currentTimeZone) {
        cityElement.style.display = "flex";
      } else {
        cityElement.style.display = "none";
      }
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

// Keep clocks live
setInterval(updateAllCities, 1000);
