

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('btn1');
  checkPageButton.addEventListener('click', function() {

	chrome.tabs.getSelected(null, function(tab) {
	  chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
	     //console.log(response.dom);
	  });
	});

  }, false);
}, false);
