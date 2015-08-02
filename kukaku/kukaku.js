// -----------------------------------------------------------------------
//	kukaku.js
//
//					Aug/02/2015
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** start *** kukaku.js ***");

	var file_json = "data_kukaku.json";
	jQuery.getJSON (file_json,function (data_received)
		{

	jQuery ("button").click (function ()
		{
		var key = this.id;

		jQuery("#outarea_bb").text (key);
		obj = data_received;
		jQuery("#outarea_ff").text (obj[key]["foto"][0]);

		var value = obj[key];

		var str_out = contents_gen_proc (key,value);

		jQuery("#contents").html (str_out);

		name_gen_proc (key,value,"engei");
		name_gen_proc (key,value,"yasou");
		name_gen_proc (key,value,"yasai");
		name_gen_proc (key,value,"kyuukon");
		});
	});

	jQuery("#outarea_hh").text ("*** end *** kukaku.js ***");
});

// -----------------------------------------------------------------------
function contents_gen_proc (key,value)
{
	var llx = key.length;
	var data_cur = value["foto"];

	var str_out = "";
	str_out += "<blockquote>";
	str_out += "<h2>";
	str_out += "区画 " + key.substring (7,llx);
	str_out += "</h2>";
	str_out += "</blockquote>";

	var file_jpg = "fotos/" + data_cur[0]; 

	str_out += '<img src="' + file_jpg + '">';

	if (1 < data_cur.length)
		{
		for (var it = 1; it < data_cur.length; it += 1)
			{ 
			str_out += "&nbsp;&nbsp;";
			file_jpg = "fotos/" + data_cur[it]; 
			str_out += '<img src="' + file_jpg + '">';
			}
		}


	return	str_out;
}

// -----------------------------------------------------------------------
function name_gen_proc (key,value,category)
{
	var str_out = "";

	var data_cur = value[category];

	if ((0 < data_cur.length) && (0 < data_cur[0].length))
		{
		str_out = "<br />";
		for (var it in data_cur)
			{
			str_out += "&nbsp;&nbsp;";
			str_out += data_cur[it];
			str_out += "&nbsp;&nbsp;";
			if ((it % 6) == 5)
				{
				str_out += "<br /><br />";
				}

			}
		}

	jQuery("#" + category).html (str_out);
}

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
