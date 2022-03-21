import * as moment from "moment";

export function hexToRgb(hex: string) {
  if (hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? "rgb(" +
          parseInt(result[1], 16) +
          "," +
          parseInt(result[2], 16) +
          "," +
          parseInt(result[3], 16) +
          "," +
          "0.3)"
      : null;
  } 
  return null;
}

/*
  @date: string
  **Format**
  01-10-2022
*/

export function transformDate(date: string) {
  let day = date.split("/")[0];
  let month = +date.split("/")[1];
  let year = date.split("/")[2];

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return day + " " + months[month - 1] + " " + year;
}

export function transformHour(date: Date): string {
  return date.getHours() + "h" + date.getMinutes();
}

export function convertArtifact(artifact: string) {
  switch (artifact) {
    case "state":
      return "Diagrama de Estados";
    case "usecase":
      return "Diagrama de Casos de Usos";
    case "activity":
      return "Diagrama de Atividades";
    default:
      return "";
  }
}

export function getDifferenceBetweenDates(date: string) {
  let today = new Date();

  var a = moment(
    ("0" + today.getDate()).slice(-2) +
      "/" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "/" +
      today.getFullYear(),
    "D/MM/YYYY"
  );
  var b = moment(date, "D/MM/YYYY");

  return b.diff(a, "days");
}

export function transformStringToDate(date: string) {
  const splitDate = date.split("/");
  return new Date(+splitDate[2], +splitDate[1] - 1, +splitDate[0]);
}
