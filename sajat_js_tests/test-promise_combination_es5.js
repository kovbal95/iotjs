//-not_implemented //good //finisd
/*
	function fetchAsync (url, timeout, onData, onError) {
	    …
	}
	function fetchAll (request, onData, onError) {
	    var result = [], results = 0;
	    for (var i = 0; i < request.length; i++) {
				result[i] = null;
				(function (i) {
				    fetchAsync(request[i].url, request[i].timeout, function (data) {
				        result[i] = data;
				        if (++results === request.length)
				            onData(result);
				    }, onError);
				})(i);
	    }
	}
	fetchAll([
	    { url: "http://backend/foo.txt", timeout: 500 },
	    { url: "http://backend/bar.txt", timeout: 500 },
	    { url: "http://backend/baz.txt", timeout: 500 }
	], function (data) {
	    var foo = data[0], bar = data[1], baz = data[2];
	    console.log("success: foo=" + foo + " bar=" + bar + " baz=" + baz);
	}, function (err) {
	    console.log("error: " + err);
	});
*/
var assert = require('assert');
var i=0;
var start = Date.now();
while (i<100) {
	i++;
  function fetchAsync (url, timeout, onData, onError) {
    var j=0;
    while (j<1000000) {j++;}
    onData(url);
  }
  function fetchAll (request, onData, onError) {
      var result = [], results = 0;
      for (var i = 0; i < request.length; i++) {
        result[i] = null;
        (function (i) {
            fetchAsync(request[i].url, request[i].timeout, function (data) {
                result[i] = data;
                if (++results === request.length)
                    onData(result);
            }, onError);
        })(i);
      }
  }
  fetchAll([
      { url: "http://backend/foo.txt", timeout: 500 },
      { url: "http://backend/bar.txt", timeout: 500 },
      { url: "http://backend/baz.txt", timeout: 500 }
  ], function (data) {
      var foo = data[0], bar = data[1], baz = data[2];
      assert.equal("foo=" + foo + " bar=" + bar + " baz=" + baz === "foo=http://backend/foo.txt bar=http://backend/bar.txt baz=http://backend/baz.txt", true);
  }, function (err) {
      console.log("error: " + err);
  });
}
console.log((Date.now()-start)/1000);
