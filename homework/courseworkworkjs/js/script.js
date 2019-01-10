
var arr = [];

$('#begin').on('click', function() {
start_time();
$('#task1-info').addClass('novisible');
$('#task1-start').removeClass('novisible');
});

function start_time() {
 	arr = [];
    $('#timer').text('00:00:00')
    var this_date = new Date();
    var start_time_interval = setInterval(function(){
      var new_date = new Date() - this_date;
      var sec = Math.abs(Math.floor(new_date/1000)%60); //sek
      var min = Math.abs(Math.floor(new_date/1000/60)%60); //min
      var hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
      if (sec.toString().length == 1) sec = '0' + sec;
      if (min.toString().length == 1) min = '0' + min;
      if (hours.toString().length == 1) hours = '0' + hours;
      var x = $('#timer').text(hours + ':' + min + ':' + sec);
      if (arr.length == 3) {
    	clearInterval(start_time_interval);
    }
    },100);
  };

function fix_time() {
  return x = $('#timer').html();
};


function result(arrPos1, arrPos2) {
let today1 = new Date;
today1.setHours(parseInt(arrPos1.charAt(0) + arrPos1.charAt(1)), parseInt(arrPos1.charAt(3) + arrPos1.charAt(4)), parseInt(arrPos1.charAt(6) + arrPos1.charAt(7)), 0);

let today2 = new Date;
today2.setHours(parseInt(arrPos2.charAt(0) + arrPos2.charAt(1)), parseInt(arrPos2.charAt(3) + arrPos2.charAt(4)), parseInt(arrPos2.charAt(6) + arrPos2.charAt(7)), 0);

let dif = Date.parse(today2) - Date.parse(today1);

return convertMS(dif);

function convertMS(dif) {
    var d, h, m, s;
    s = Math.floor(dif/1000);
    m = Math.floor(s/60);
    s = s % 60;
    h = Math.floor(m/60);
    m = m % 60;
    d = Math.floor(h/24);
    h = h % 24;
    h += d * 24;
    h = String(h);
    m = String(m);
    s = String(s);
    if (h.length == 1) {
    	h = "0" + h;
    };
    if (m.length == 1) {
		m = "0" + m;
    };
    if (s.length == 1) {
		s = "0" + s;
    }
    return h + ':' + m + ':' + s;
}
}

$(function dataFuller() {
    //Task1
    var data1 = [
        {name: "Задание 1", btn: "Завершить этап 1 и продолжить", p1: "1. Запустите аудиофайл и следуйте инструкции", p2: "2. После завершения этого этапа нажмите кнопку «Завершить и продолжить»", src1: "../audio/track1.mp3", p3: "привет", p4: "пока", scr2:"../audio/track2.mp3"}
    ];
      var data2 = [
        {name: "Задание 1.2", btn: "Завершить этап 2 и продолжить", p1: "1. Для отработки практических навыков включите вторую запись", p0: "2. Соблюдайте методические указание и следуйте этапам учебного курса", p2: "3. После завершения этого этапа нажмите кнопку «Завершить и продолжить»", src1: "../audio/track2.mp3"}
    ];
      var data3 = [
        {name: "Задание 1.3", btn: "Завершить урок и сфотографировать", p1: "1. Пройдите финальный этап и сделайте снимок", p2: "2. После завершения этого этапа нажмите кнопку «»Завершить и сфотографировать»", src1: "../audio/track1.mp3"}
    ];

  if (arr.length == 0) {
  $('#task1').tmpl(data1).appendTo('#test');
} else if (arr.length == 1) {
	$('#task1').tmpl(data2).appendTo('#test');
} else if (arr.length == 2) {
	$('#task1').tmpl(data3).appendTo('#test');
} else if (arr.length == 3) {

var step2_res = result(arr[0], arr[1]);
var step3_res = result(arr[1], arr[2]);
var res = [{step1: arr[0], step2: step2_res, step3: step3_res}];

$('#res').tmpl(res).appendTo('#test');

let step1g = parseFloat((arr[0].charAt(0) + arr[0].charAt(1))*60) + parseFloat((arr[0].charAt(3) + arr[0].charAt(4))) + parseFloat((arr[0].charAt(6) + arr[0].charAt(7))/60);
let step2g = parseFloat((arr[1].charAt(0) + arr[1].charAt(1))*60) + parseFloat((arr[1].charAt(3) + arr[1].charAt(4))) + parseFloat((arr[1].charAt(6) + arr[1].charAt(7))/60);
let step3g = parseFloat((arr[2].charAt(0) + arr[2].charAt(1))*60) + parseFloat((arr[2].charAt(3) + arr[2].charAt(4))) + parseFloat((arr[2].charAt(6) + arr[2].charAt(7))/60);

step1g = step1g.toFixed(2);
step2g = step2g.toFixed(2);
step3g = step3g.toFixed(2);
step3gn = (step3g - step2g).toFixed(2);
step2gn = (step2g - step1g).toFixed(2);

var datag = {
 labels: ['Этап 1', 'Этап 2', 'Этап 3'],
 series: [[step1g, step2gn, step3gn]]
};
new Chartist.Line('.ct-chart', datag);

var tasks = {
 task1: [arr[0], step2_res, step3_res],
 graf: [step1g, step2gn, step3gn]
};

localStorage.setItem("tasks", JSON.stringify(tasks));
var newTasks = JSON.parse(localStorage.getItem("tasks"));
tasks = {};
}
$('#pass').on('click', function() {
	fix_time();
	arr.push(x);
	$('#test').html('');
	dataFuller()
	$('#task1-start').removeClass('novisible');
});
audiojs.events.ready(function() {
  var as = audiojs.createAll();	
});
});


