// ==UserScript==
// @name        LORPUTER
// @namespace   LORPUTER
// @description LORPUTER theme script
// @author      AlexCones
// @include     http://www.linux.org.ru/*
// @exclude     http://www.linux.org/wiki/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version     1
// ==/UserScript==

/* Menu moves */
// Add the element for avoid "hover-dissapearing" bug.
$(".menu").wrap("\
<div id='borderer'>\
</div>");
// Add the menu-button. More stable this way.
$("#borderer").wrap("\
<div id='menubutton'>\
</div>");

/* Logout link */
// Move #loginGreating to make it as a tray.
$('#loginGreating').appendTo('#hd');
// Replace <li> with <div>.
var OldLogout = document.getElementById("loginGreating");
var NewLogout = document.createElement("div");
while (OldLogout.firstChild)
{
	NewLogout.appendChild(OldLogout.firstChild);
}
OldLogout.parentNode.replaceChild(NewLogout, OldLogout);
NewLogout.id = OldLogout.id;

/* Digital clock */
// Digital clock with inner js.
$('#hd').append("\
<div id = 'digiclock'>\
	<script>\
		function digiClock()\
		{\
			var date_obj = new Date();\
			var H = '' + date_obj.getHours();\
			H = H.length < 2 ? '0' + H:H;\
			var M = '' + date_obj.getMinutes();\
			M = M.length < 2 ? '0' + M:M;\
			var clock = H + ':' + M;\
			document.getElementById('digiclock').innerHTML = clock;\
			var t = setTimeout(digiClock, 20 * 1000);\
		}\
		digiClock();\
	</script>\
</div>");
	
/* Notify */
// Phone icon for notify-messages.
$('#loginGreating').append("\
<div onClick=\"window.location='/notifications'\" id = 'notifyicon'>\
	<a id = 'notifycounter' href = '/notifications'>\
	</a>\
	<div onclick=\"this.style.display = 'none';\" id = 'notifymessage'>\
		У вас есть новые<br>уведомления\
	</div>\
</div>");
// Find out if there is new messages.
$(document).ready(function()
{
	var notifyelem = $('#hd').find('a[elemid="ujs_0x43c2b0"]');
	var notifyelem = notifyelem.text();
	if (notifyelem != "Уведомления")
	{	
		notifyelem = notifyelem.toString().substr(13, notifyelem.length - 14);
		$('#notifycounter').html(notifyelem);
		document.getElementById("notifymessage").style.display = 'block';
		// TODO There was a thought to make "Уведомления" link in menu bold.
	}
});

/* Reload button */
// Reload button in tray
$('#loginGreating').append("\
<div onClick=\"location.reload();\" id = 'refreshbutton'>\
</div>");

/* Home button */
// Home button to the right from "GO" button
$('#hd').append("\
<div onClick=\"window.location='/'\" id = 'homebutton'>\
</div>");

