
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getDOM") {
	alert('Rob\n'+document.title);
	document.body.style.backgroundColor = 'red';
	   //sendResponse({dom: dom});
   }
 else
   sendResponse({});
});
