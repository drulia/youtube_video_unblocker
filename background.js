chrome.webRequest.onBeforeSendHeaders.addListener(
function(details) {
	var headers = details.requestHeaders,
			l = headers.length;
	for(var i=0; i!==l; i++) {
		if(headers[i].name === 'Referer') {
			headers[i].value = 'https://www.google.com';
		}
	}
	return {requestHeaders: details.requestHeaders};
},
{urls: ['*://*.youtube.com/*']},
['blocking', 'requestHeaders']);