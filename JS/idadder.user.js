// ==UserScript==
// @name           ID adder
// @namespace      linux.org.ru
// @grant          none
// @author         AlexCones, lancecoder, deniska
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @include        http://www.linux.org.ru/*

// ==/UserScript==

// The function for hash code
String.prototype.hashCode = function()
{
	var hash = 0;
	if (this.length == 0) return hash;
	for (i = 0; i < this.length; i++)
	{
		char = this.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash & 0x00FFFFFF;
}

// The function for converting the decimal hash to readable HEX.
function decToHex(n){ return Number(n).toString(16); }

$(document).ready(function()
{
	// For each element	
   $('body').find('*').each(function()
   {
  		var val=$(this).text();
  		if (val.length>=10)
  		{
  			// For the first 5 symbols of content
     		val=val.substr(0, 5)
     	};
     	// Get the hash code and add it to elemid attribute
   	$(this).attr('elemid', 'ujs_0x'+ decToHex(val.hashCode()));
	});
});
