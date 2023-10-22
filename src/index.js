function updateTime() {
  //San Francisco
  let sanFranciscoElement = document.querySelector("#san-francisco");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFranciscoTime = moment().tz("US/Pacific");

  sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM D, YYYY");
  sanFranciscoTimeElement.innerHTML = `${sanFranciscoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //Madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM D, YYYY");
  madridTimeElement.innerHTML = `${madridTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("Europe/Madrid");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 1000);
