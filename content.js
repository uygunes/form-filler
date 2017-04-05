chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo == "changeContent")
	{
		var id = document.getElementsByClassName("typo3-TCEforms-recUid")[0].innerHTML;
		id = id.replace("[", "");
		id = id.replace("\"","");
		id = id.replace("]","");
		
		var hdd = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][hdd_information]")[0];
		var u2  = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_usb]")[0];
		var u3  = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_usb3]")[0];
		var u31 = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_usb3_1]")[0];
		var vga = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_vga]")[0];
		var dvi = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_dvi]")[0];
		var hdmi = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_hdmi]")[0];
		var dport = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_displayport]")[0];
		var bluetooth = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][port_bluetooth]")[0];
		var primary = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][primary_cam_mpix]")[0];
		var secondary = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][secondary_cam_mpix]")[0];
		var batteryW = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][battery_capacity]")[0];
		var batteryH = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][battery_capacity_mah]")[0];
		var width = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][size_width]")[0];
		var length = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][size_length]")[0];
		var depth = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][size_depth]")[0];
		var weight = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][weight_nb]")[0];
		var warranty = document.getElementsByName("data[tx_nbc2_nb_specs]["+id+"][warranty]")[0];
		
		hdd.value = request.hddInfo;
		u2.value = request.u2;
		u3.value = request.u3;
		u31.value = request.u31;
		vga.value = request.vga;
		dvi.value = request.dvi;
		hdmi.value = request.hdmi;
		dport.value = request.dport;
		bluetooth.value = request.bluetooth;
		primary.value = request.primary;
		secondary.value = request.secondary;
		batteryW.value = request.batteryW;
		batteryH.value = request.batteryH;
		width.value = request.width;
		length.value = request.length;
		depth.value = request.depth;
		weight.value = request.weight;
		warranty.value = request.warranty;

		
	}
})