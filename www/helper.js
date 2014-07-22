function handleFiles(files) {
  var formData = new FormData($("#file"));
  var reader = new FileReader();
  var ajax = function() {
    try {
      var xml = new XMLHttpRequest();
      var args = arguments;
      var context = this;
      var multipart = "";

      xml.open(args[0].method, args[0].url, true);

      if (args[0].method.search(/post/i) != -1) {
        var boundary = Math.random().toString().substr(2);
        xml.setRequestHeader("content-type",
          "multipart/form-data; charset=utf-8; boundary=" + boundary);
        for (var key in args[0].data) {
          multipart += "--" + boundary + "\r\nContent-Disposition: form-data; name=" + key + "\r\nContent-type: application/octet-stream" + "\r\n\r\n" + args[0].data[key] + "\r\n";
        }
        multipart += "--" + boundary + "--\r\n";
      }

      xml.onreadystatechange = function() {
        try {
          if (xml.readyState == 4) {
            context.txt = xml.responseText;
            context.xml = xml.responseXML;
            args[0].callback();
          }
        } catch (e) {}
      }

      xml.send(multipart);
    } catch (e) {}
  }

  var response = {};
  ajax.call(response, {
    url: "http://2014.igem.org/wiki/api.php",
    method: "POST",
    data: {
    	filename: 
    },
    callback: function() {

    }
  });
}
