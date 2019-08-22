
** Esta funcion permite hacer un proceso de upload de archivos utilizando vanilla js, haciendo uso de callbacks.


function upfiles(model, method, args, filement, backcall){


  var doc = eval(document.getElementById(filement));
  console.log(doc);
  var docx = doc.files;
  var formData = new FormData();
  var ins = doc.files.length;

  for (var x = 0; x < ins; x++) {
    formData.append("element[]", docx[x]);
  }

  formData.append('model', model);
  formData.append('method', method);
  formData.append('args', args);

  var xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', onprogressHandler, false);
  xhr.open('POST', 'app.php', true);

  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let r = JSON.parse(xhr.responseText);
        if(typeof backcall == 'function'){
          backcall(r);
        }

    }
  };

  xhr.send(formData);

}
