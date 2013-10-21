$(document).ready(setAttribute("stripe-checkout","data-amount","750"));
$(document).ready(function() {
    if (getCookie("uo_cookie") == "true") {
        $('.buyer-visible').css({'display':'none'});
    }
    else {
        $('.seller-visible').css({'display':'none'});
    }
    setCookie("uo_cookie",false,1);
});

function getParameterFromUrl(parameter) {
	document.getElementById(parameter).value = getUrlVars()[parameter];
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function setAttribute(id,key,value) {
	document.getElementById(id).setAttribute(id,key);
}

function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}