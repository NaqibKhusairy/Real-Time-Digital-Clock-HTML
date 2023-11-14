// Remove the line that selects and removes the "Digital Clock" element
document.querySelector('.clock-text').remove();

// Create a new div for the centered text
const centeredText = document.createElement('div');
centeredText.innerHTML = "<div class='clock-text'>"+
                            "<center>"+
                                "Digital Clock<br> By @QIB.Je"+
                                "</center>"+
                         "</div>";
document.body.appendChild(centeredText);

const dayOfWeek = ['sun','mon','tue','wed','thu','fri','sat'];
const monts = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUN','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).padStart(2,0);

function clock(){
    const today = new Date();
    h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = h < 11 ? 'AM' : 'PM';
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
	if(h>12)
	{
		h -= 12;
	}
    $('hours').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('sec').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = ampm;
    $(dayOfWeek.at(day - 1)).classList.remove('active');
    $(dayOfWeek[day]).classList.add('active');
    $('year').innerHTML = year;
    $('month').innerHTML = monts[month];
    $('day').innerHTML = zeroPadding(date);
}

setInterval(clock,400);
