var userinfo;
if (localStorage.length > 0) {
userinfo = JSON.parse(localStorage.getItem("tasks"));
} else {
	userinfo = {
		task1: ["00:00:00", "00:00:00", "00:00:00"],
		graf: [0, 0, 0]
	}
}
var photo = JSON.parse(localStorage.getItem("snap"));

$(function userFiller() {
  var userdata = {
    name: "Alice Morgan",
    img: "../img/user.jpg",
    task1: [userinfo.task1[0], userinfo.task1[1], userinfo.task1[2]],
    photobox: photo
}

var datagraf = {
  labels: ['Этап 1', 'Этап 2', 'Этап 3'],
  series: [
    [userinfo.graf[0], userinfo.graf[1], userinfo.graf[2]]
  ]
};
$('#user1').tmpl(userdata).appendTo('#userbox');
new Chartist.Line('.ct-chart', datagraf);  
});


