var date = new Date();
var year = date.getFullYear();
var month = String(date.getMonth() + 1);
var day = date.getDate();
var menu;
const root = document.getElementById("root");

month = month.padStart(2, "0");
console.log(`${year}${month}${day}`);
const time = `${year}${month}${day}`;

const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=8d46cc1c93b34e3581771726a0711db4&Type=json&ATPT_OFCDC_SC_CODE=M10&SD_SCHUL_CODE=8011331&MLSV_YMD=${time}`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const div = document.createElement("div");
    div.setAttribute("id", "menus");
    div.innerHTML = data.mealServiceDietInfo[1].row[0].DDISH_NM;
    root.append(div);
    console.log(data.mealServiceDietInfo[1].row[0].DDISH_NM);
  });
