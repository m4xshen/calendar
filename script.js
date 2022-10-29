const nameOfMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let y = 2023;

function createMonthCalendar(y, m) {
    const s = new Date(y, m, 1).getDay(); // start
    const e = new Date(y, m+1, 0).getDate(); // end
    let calendar = `<table>
    <tr>
    <th class="weekend">S</th>
    <th class="weekday">M</th>
    <th class="weekday">T</th>
    <th class="weekday">W</th>
    <th class="weekday">T</th>
    <th class="weekday">F</th>
    <th class="weekend">S</th>
    </tr>`; // create table header

    let print = false;
    for(let r = 0; r < 6; r++) {
	calendar += "<tr>";
	for(let c = 0; c < 7; c++) {
	    calendar += "<td>";

	    if(r*7+c == s) print = true;
	    else if(r*7+c == e+s) print = false;

	    if(print) calendar += r*7+c-s+1;

	    calendar += "</td>";
	}
	calendar += "</tr>";
    }

    calendar += "</table>";
    return calendar;
}

function createYearCalendar() {
    document.getElementById("year").innerHTML = `${y} Calendar`;

    for(let m = 0; m < 12; m++) {
	document.getElementById("calendar").innerHTML += `<div id="${m}"></div>`
	document.getElementById(m).innerHTML = `<h2>${nameOfMonth[m]}</h2>`;
	document.getElementById(m).innerHTML += createMonthCalendar(y, m);
    }
}

function minusOne() {
    y--;
    createYearCalendar();
}

function plusOne() {
    y++;
    createYearCalendar();
}

createYearCalendar();
