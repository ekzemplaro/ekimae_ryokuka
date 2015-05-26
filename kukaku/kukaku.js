// -----------------------------------------------------------------------
//	kukaku.js
//
//					May/24/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** start *** kukaku.js ***");

	var file_json = "data_kukaku.json";
	jQuery.get (file_json,function (data_received)
		{
		jQuery("#contents").html (data_received);

	jQuery ("button").click (function ()
		{
		var key = this.id;
		var value = data_received[key];

		jQuery("#outarea_bb").text (key);
		jQuery("#outarea_cc").text (key.substring (0,8));
		jQuery("#outarea_dd").text (value);

		var str_out = contents_gen_proc (key,value);

		jQuery("#contents").html (str_out);

		});
	});

	jQuery("#outarea_hh").text ("*** end *** kukaku.js ***");
});

// -----------------------------------------------------------------------
function contents_gen_proc (key,value)
{
	var llx = key.length;

	var str_out = "";
	str_out += "<blockquote>";
	str_out += "<h2>";
	str_out += "区画 " + key.substring (7,llx);
	str_out += "</h2>";
	str_out += "</blockquote>";

	var file_jpg = key + "/" + value[0]; 

	str_out += '<img src="' + file_jpg + '">';

	if (1 < value.length)
		{
		str_out += "&nbsp;&nbsp;";
		file_jpg = key + "/" + value[1]; 
		str_out += '<img src="' + file_jpg + '">';
		}

	return	str_out;
}

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
