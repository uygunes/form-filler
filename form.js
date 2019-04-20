$(function(){
	
	var words = {};

		chrome.storage.sync.get('words', function(items) {
		    var words = items.words;
		    for (var key in words) {
		    	$('#'+key+'').val(words[key])
		        
		    }
		});
	

	 $("#change").click(function(){
	   
  		var fields = {};
  		$('input').not(':button, :submit, :reset, :hidden').each(function(idx, element) {
        	fields[element.id] = element.value;
    	});

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id,{todo:"changeContent",
			 hddInfo: fields.hddInfo,
			 u2:fields.u2,
			 u3:fields.u3,
			 u31:fields.u31,
			 thunderbolt:fields.thunderbolt,
			 vga:fields.vga,
			 dvi:fields.dvi,
			 hdmi:fields.hdmi,
			 dport:fields.dport,
			 bluetooth:fields.bluetooth,
			 cardreader:fields.cardreader,
			 primary:fields.primary,
			 secondary:fields.secondary,
			 sensors:fields.sensors,
			 batteryW:fields.batteryW,
			 batteryH:fields.batteryH,
			 width:fields.width,
			 length:fields.length,
			 depth:fields.depth,
			 weight:fields.weight,
			 warranty:fields.warranty,
			 ean:fields.ean});
		})
})

	  $("#save").click(function(){

		  $('input').not(':button, :submit, :reset, :hidden').each(function(idx, element) {
	        	words[element.id] = element.value;
	    	});
		   chrome.storage.sync.set({words:words});
  		}); 

$("#reset").click(function(){
	  $(':input').not(':button, :submit, :reset, :hidden').removeAttr('checked').removeAttr('selected').not('‌​:checkbox, :radio, select').val('');

	});

});
