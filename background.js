chrome.webRequest.onBeforeSendHeaders.addListener(
function(details) {
	var headers = details.requestHeaders,
			l = headers.length;
	for(var i=0; i!==l; i++) {
		if(headers[i].name === 'Referer') {
			headers[i].value = 'http://youtube.com/embed/undefined?enablejsapi=1';
		}
	}
	return {requestHeaders: details.requestHeaders};
},
{urls: ['*://*.youtube.com/*']},
['blocking', 'requestHeaders']);