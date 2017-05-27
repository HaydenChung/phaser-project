export function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export function customShuffle(array, outputLength, requestedIndex) {
	var result = array.slice();

	if(typeof requestedIndex != 'undefined'){
  	var r = result.splice(requestedIndex,1)[0]
  }

  var m = result.length,
  len = 0,
  t, i;

  // While there remain elements to shuffle…
  while (outputLength>len) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = result[len];
    result[len] = result[i];
    result[i] = t;
    len++
  }

	result.splice(len)

	if(typeof requestedIndex != 'undefined'){
  	result[Math.floor(Math.random()*len)] = r
  }

  return result;
}

export function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

export function requestFullScreen(){
  var doc = window.document;
  var docEl = doc.documentElement;

  var request = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      request.call(docEl);
  }
}