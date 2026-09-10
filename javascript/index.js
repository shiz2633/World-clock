let londonelement = document.querySelector("#london");
function updateLondonTime() {
  let now = new Date();
  let londonTime = now.toLocaleString("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  let londonDate = now.toLocaleDateString("en-GB", {
    timeZone: "Europe/London",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  londonelement.querySelector(".date").innerHTML = londonDate;
  londonelement.querySelector(".time").innerHTML = londonTime;
}

setInterval(updateLondonTime, 1000);
updateLondonTime();

let girneelement = document.querySelector("#girne");
function updateGirneTime() {
  let now = new Date();
  let girneTime = now.toLocaleString("en-GB", {
    timeZone: "Europe/Nicosia",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  let girneDate = now.toLocaleDateString("en-GB", {
    timeZone: "Europe/Nicosia",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  girneelement.querySelector(".date").innerHTML = girneDate;
  girneelement.querySelector(".time").innerHTML = girneTime;
}

setInterval(updateGirneTime, 1000);
updateGirneTime();

let luxorelement = document.querySelector("#luxor");
function updateLuxorTime() {
  let now = new Date();
  let luxorTime = now.toLocaleString("en-GB", {
    timeZone: "Africa/Cairo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  let luxorDate = now.toLocaleDateString("en-GB", {
    timeZone: "Africa/Cairo",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  luxorelement.querySelector(".date").innerHTML = luxorDate;
  luxorelement.querySelector(".time").innerHTML = luxorTime;
}

setInterval(updateLuxorTime, 1000);
updateLuxorTime();

let perthelement = document.querySelector("#perth");
function updatePerthTime() {
  let now = new Date();
  let perthTime = now.toLocaleString("en-GB", {
    timeZone: "Australia/Perth",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  let perthDate = now.toLocaleDateString("en-GB", {
    timeZone: "Australia/Perth",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  perthelement.querySelector(".date").innerHTML = perthDate;
  perthelement.querySelector(".time").innerHTML = perthTime;
}

setInterval(updatePerthTime, 1000);
updatePerthTime();
