const cities = {
  london: "Europe/London",
  girne: "Europe/Nicosia",
  luxor: "Africa/Cairo",
  perth: "Australia/Perth",
};

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
  const cityContainer = document.querySelector("#city-container");

  // Remove the homepage link if it already exists
  const existingLink = document.querySelector("#home-link");

  if (existingLink) {
    existingLink.remove();
  }

  cityElements.forEach(function (cityElement) {
    if (selectedCity === "") {
      // Show all cities on the homepage
      cityElement.style.display = "flex";
    } else if (selectedCity === "current") {
      if (cities[cityElement.id] === currentTimeZone) {
        cityElement.style.display = "flex";
      } else {
        cityElement.style.display = "none";
      }
    } else if (cities[cityElement.id] === selectedCity) {
      cityElement.style.display = "flex";
    } else {
      cityElement.style.display = "none";
    }
  });

  // Add "All cities" link only when a city is selected
  if (selectedCity !== "") {
    const homeLink = document.createElement("a");

    homeLink.id = "home-link";
    homeLink.href = "/";
    homeLink.textContent = "← All cities";

    cityContainer.appendChild(homeLink);
  }
});
// Update all cities immediately
updateAllCities();

// Keep clocks live
setInterval(updateAllCities, 1000);
