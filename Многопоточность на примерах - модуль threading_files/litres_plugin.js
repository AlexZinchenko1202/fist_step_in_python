jQuery(document).ready(function($) {
	$( '.checkAll' ).live( 'change', function() {
		$( '.cb-element' ).prop( 'checked', jQuery( this ).is( ':checked' ) );
	});

	$( '.cb-element' ).live( 'change', function() {
		$( '.checkAll' ).prop( 'checked', $( '.cb-element' ).length == $( '.cb-element:checked' ).length );
	});

});

var litres_plugin_ajaxtotal = 0;
var litres_plugin_ajaxcnt = 0;
var litres_plugin_ajaxload = [];
function litres_plugin_runsimple() {
	/*just submit*/
	return true;
}

function litres_plugin_runajax() {
	return false;
(function($) {
	litres_plugin_ajaxload = [];
	litres_plugin_ajaxtotal = 0;
	$("input:checkbox[name='marked[]']:checked").each(function(){
		litres_plugin_ajaxload[litres_plugin_ajaxtotal] = $(this).val();
    	litres_plugin_ajaxtotal++;
	});
	if(litres_plugin_ajaxtotal > 0) {
		var dim = $('<div style="position:fixed;top:0px;left:0px;right:0px;bottom:0px;background-color:silver;opacity:0.7;z-index:9998;">&nbsp;</div>');
		var progress = $('<div id="litres_plugin_ajaxholder" style="z-index:9999;display:block;position:fixed;left:50%;top:300px;width:308px;height:120px;'+
						'margin-left:-154px;padding:4px;background-color:white;border:1px solid silver;"><div style="width:100%;text-align:left;'+
						'font-size:bigger;margin-top:30px;margin-bottom:30px;padding:3px;">Загружаем книги: <span id="litres_plugin_ajaxcnt">0</span> / '+
						litres_plugin_ajaxtotal+'</div><div style="width:300px;height:50px;bottom:10px;margin:0px auto;"><div id="litres_plugin_ajaxprogress" '+
						'style="background-color:silver;width:0px;height:30px;"></div></div></div>');
		$('body').append(dim);
		$('body').append(progress);
		litres_plugin_ajaxcnt = 0;
		litres_plugin_runajaxbit();
	}

})(jQuery);
}

function litres_plugin_runajaxbit() {
	return;
(function($) {
	if(litres_plugin_ajaxcnt > 0) {
		var percent = Math.round(300 * litres_plugin_ajaxcnt / litres_plugin_ajaxtotal);
		$('#litres_plugin_ajaxprogress').css('width',percent + 'px');
		$('#litres_plugin_ajaxcnt').html(litres_plugin_ajaxcnt);
	}
	if(litres_plugin_ajaxcnt < litres_plugin_ajaxtotal) {
	    var val = litres_plugin_ajaxload[litres_plugin_ajaxcnt];
		litres_plugin_ajaxcnt++;

			var data = {
				'action' : 'book_publish',
				'book_id' : val
			};

		$.post(ajaxurl, data, function(response) {
				litres_plugin_runajaxbit();
		});		
	} else {
		window.location=window.location+'&'+Date.now();
	}
})(jQuery);
}

litres_plugin_doneCKEDITOR = false;

function litres_plugin_runCKEDITOR()
{
	if(CKEDITOR && jQuery('#template').length && !litres_plugin_doneCKEDITOR)
	{
		litres_plugin_doneCKEDITOR = true;
		CKEDITOR.replace( 'template' );
		CKEDITOR.instances.template.on('focus', function() { litres_plugin_currentinput = 'template'; });
	}
}
litres_plugin_runCKEDITOR();

var litres_plugin_sortarray = [];
litres_plugin_sortarray['title'] = [];
litres_plugin_sortarray['author'] = [];
litres_plugin_sortarray['genre'] = [];
litres_plugin_sortarray['price'] = [];
litres_plugin_sortarray['date'] = [];
litres_plugin_sortarray['rating'] = [];
litres_plugin_sortarray['status'] = [];

var litres_plugin_sortcolumn = "";
var litres_plugin_ascending = true;


var litres_plugin_jssorting = '';
var litres_plugin_startcount = 0;
	

function litres_plugin_sortinit(jssorting)
{
	litres_plugin_jssorting = jssorting;

	if(litres_plugin_jssorting.indexOf('_') < 1)
		litres_plugin_jssorting = '';


	if(litres_plugin_jssorting != '')
	{
		var sortarr = litres_plugin_jssorting.split('_');
		
		litres_plugin_sortcolumn = sortarr[0];
		litres_plugin_ascending = sortarr[1] == 'desc'; /* inverted */
	
		litres_plugin_table_sort(null,litres_plugin_sortcolumn);
	}
}

function litres_plugin_table_sort(in_event,in_column){
return (function($, event, column) {

	if(litres_plugin_sortcolumn == column)
		litres_plugin_ascending = !litres_plugin_ascending;
	else
	{
		$("#indicator_"+litres_plugin_sortcolumn).html("");
		litres_plugin_ascending = true;
	}
	litres_plugin_sortcolumn = column;

	$("#indicator_"+litres_plugin_sortcolumn).html(litres_plugin_ascending ? "&nbsp;&#8593;" : "&nbsp;&#8595;");
	$("#a_"+litres_plugin_sortcolumn).blur();
	
	currentarray = litres_plugin_sortarray[litres_plugin_sortcolumn];
	currentarray.sort(litres_plugin_compare);

	number = litres_plugin_startcount;
	for(i=0;i<currentarray.length;i++)
	{
		number++;
		$("#litres_"+currentarray[i].id).detach().appendTo($("#litres_table"));
		$("#litres_"+currentarray[i].id + " > td span.number").html(number);
	}
	$("#litres_end").detach().appendTo($("#litres_table"));
	oldsorting = litres_plugin_jssorting;
	litres_plugin_jssorting = litres_plugin_sortcolumn + '_' + (litres_plugin_ascending ? 'asc' : 'desc');
	$("#jssorting").val(litres_plugin_jssorting);

	$(".purl").each(function(i, a) {
		$(a).attr('href', $(a).attr('href').replace('&jssorting='+oldsorting,'&jssorting='+litres_plugin_jssorting));
	});

	if(event != null)
		event.stopPropagation();
	return false;
		
})(jQuery, in_event, in_column);
}

var litres_plugin_lfrom = '';

function litres_plugin_searchgenre(in_value){
(function($, value) {
	$("#genre").val(value);
	$("#search").click();

})(jQuery, in_value);
}

function litres_plugin_searchauthor(in_value){
(function($, value) {
	$("#searchstring").val(value);
	$("#search").click();

})(jQuery, in_value);
}


function litres_plugin_trypublish(in_event){
return (function($, event) {
	if($("#markaction").val() == 'publish') { 
		if(litres_plugin_lfrom == '') {
			alert("Нельзя опубликовать книгу. \nНеобходимо ввести ID партнера (lfrom) в Настройках плагина.");
		} else {
			return litres_plugin_runsimple();
		}

		if(event != null)
			event.stopPropagation();

		return false;
	}
	$("#offset").val($("#jsoffset").val());
	return true;

})(jQuery, in_event);
}

function litres_plugin_compare(a,b) {
  if (a.value < b.value)
     return litres_plugin_ascending ? -1 : 1;
  if (a.value > b.value)
    return litres_plugin_ascending ? 1 : -1;
  return 0;
}

var litres_plugin_currentinput;

function litres_plugin_focus(input) {
	litres_plugin_currentinput = input;
}
function litres_plugin_insert(text) {
	if(litres_plugin_currentinput == 'template')
		CKEDITOR.instances.template.insertHtml(text);
	else
		jQuery('#'+litres_plugin_currentinput).insertAtCaret(text);
}

function litres_plugin_add_table_row(row) {
	litres_plugin_sortarray['title'][litres_plugin_sortarray['title'].length] = {'id':row.id,'value':row.title};
	litres_plugin_sortarray['author'][litres_plugin_sortarray['author'].length] = {'id':row.id,'value':row.author};
	litres_plugin_sortarray['genre'][litres_plugin_sortarray['genre'].length] = {'id':row.id,'value':row.genre};
	litres_plugin_sortarray['price'][litres_plugin_sortarray['price'].length] = {'id':row.id,'value':row.price};
	litres_plugin_sortarray['date'][litres_plugin_sortarray['date'].length] = {'id':row.id,'value':row.date};
	litres_plugin_sortarray['rating'][litres_plugin_sortarray['rating'].length] = {'id':row.id,'value':row.rating};
	litres_plugin_sortarray['status'][litres_plugin_sortarray['status'].length] = {'id':row.id,'value':row.status};
}

jQuery.fn.extend({
insertAtCaret: function(myValue){
  return this.each(function(i) {
    if (document.selection) {
      //For browsers like Internet Explorer
      this.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    }
    else if (this.selectionStart || this.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      var scrollTop = this.scrollTop;
      this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
      this.focus();
      this.selectionStart = startPos + myValue.length;
      this.selectionEnd = startPos + myValue.length;
      this.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  });
}
});