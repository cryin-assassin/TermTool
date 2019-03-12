src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js">

	window.load
	{
			  $("textarea").slideUp();
	}
	

function GenerateCode()
{

	var GUIDJS = document.getElementById("GUID").value
	var CustomerNameJS = document.getElementById("CustomerNameID").value
	var IfaJS = document.getElementById("IfaID").value
	var OrgJS = document.getElementById("OrgID").value
	var Add1JS = document.getElementById("Add1ID").value
	
	var Add2JS = document.getElementById("Add2ID").value
	var Add3JS = document.getElementById("Add3ID").value
	var Add4JS = document.getElementById("Add4ID").value
	
	var postJS = document.getElementById("postID").value
	var tellJS = document.getElementById("tellID").value
	var emailJS = document.getElementById("emailID").value
	
	var Validate = 0;
		
	
	
	if(GUIDJS !== "") Validate = Validate + 1;
	if(CustomerNameJS !== "") Validate = Validate + 1;
	 if(IfaJS !== "")Validate = Validate + 1;
	 if(OrgJS !== "")Validate = Validate + 1;
	 if(Add1JS !== "")Validate = Validate + 1;
	 if(postJS !== "")Validate = Validate + 1;
	 if(tellJS !== "")Validate = Validate + 1;
	 if(emailJS !== "")Validate = Validate + 1;
	   
	
	if (Validate == 8)
	{
	var completeInfo =  
					   "<form name=" + "\"hiddenXML\"" + " id=\"" + "XMLDATA\"" + " form method=" + "\"post\"" + "action=" + "\"http://exweb.exchange.uk.com/portal/ifatrmplug/QuoteRequestCall.asp\"><input type=" + "\"hidden\" name=" + "\"XMLDATA\"" + "value=" +"\"" + '\n' + 
					   "<MESSAGE> \n<VERSION>2.1</VERSION>\n<STYLESHEET></STYLESHEET>\n<LOGOS>NO</LOGOS>" + '\n' +
					    "<USERACCOUNT>" + GUIDJS + "</USERACCOUNT>"+  '\n' + 
					    "<IFA_NAME>"+ CustomerNameJS  + "</IFA_NAME>" + '\n' + 
						"<IFA_REF>"+IfaJS+"</IFA_REF>" + '\n' + 
						"<ORGANISATION_NAME>" + OrgJS + "</ORGANISATION_NAME>" + '\n' +
						"<ADDRESS_LINE_1>" + Add1JS +  "</ADDRESS_LINE_1>" + '\n' +
						"<ADDRESS_LINE_2>" + Add2JS + "</ADDRESS_LINE_2>" + '\n' +
						"<ADDRESS_LINE_3>" + Add3JS + "</ADDRESS_LINE_3>" + '\n' +
						"<ADDRESS_LINE_4>" + Add4JS + "</ADDRESS_LINE_4>" + '\n' +
						"<POSTCODE>" + postJS + "</POSTCODE>" + '\n' +
						"<TEL_NO>" + tellJS + "</TEL_NO>" + '\n' +
						"<EMAIL>" + emailJS + "</EMAIL>" + '\n' +
						"<COMMISSION_DETAILS>" + '\n' +
						'\n' +
						"<LP>" + '\n' +
						"<COMMISSION_STYLE>100</COMMISSION_STYLE> <SACRIFICE_OPTION></SACRIFICE_OPTION> <SACRIFICE_VALUE></SACRIFICE_VALUE>"  + '\n' +
						"</LP>"  + '\n' + 
						"<MP> <COMMISSION_STYLE>100</COMMISSION_STYLE> <SACRIFICE_OPTION></SACRIFICE_OPTION> <SACRIFICE_VALUE></SACRIFICE_VALUE>" + '\n' +
						"</MP>" + '\n' + 
						"<CI> <COMMISSION_STYLE>100</COMMISSION_STYLE> <SACRIFICE_OPTION></SACRIFICE_OPTION> <SACRIFICE_VALUE></SACRIFICE_VALUE>" +  '\n' +
						"</CI>" + '\n' + 
						"</COMMISSION_DETAILS>" + '\n' + 
						"<GROSS_INTEREST_RATE>6.99</GROSS_INTEREST_RATE>" + '\n' + 
						"<COVER_INTEREST_RATE>7.5</COVER_INTEREST_RATE>"  + '\n' + 
						"<CM>Custom message Text</CM>"+ '\n' + 
						"</MESSAGE>" + "\"" + ">" + '\n' +
						"<input type=submit value=" + "\"Get quote now\"></form>";
						
					     

					  
					  
					   
	
	
	
	document.getElementById("GenID").value = completeInfo;
	  var e = document.getElementById("GenID");
	  var f = document.getElementById("Instruction");
		
	    e.style.visibility = 'visible';		
		f.style.visibility = 'visible';
	   	  $("textarea").slideDown();
		  $("textarea").select();
	  
	
	
     }
	 else
		 
	 {
		 alert("Please ensure all fields are completed")
	}
}