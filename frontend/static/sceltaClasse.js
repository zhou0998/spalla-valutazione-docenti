var send = false;
function sendTest(elem, cb) {
  var idClasse = elem.getAttribute("href");
  idClasse = idClasse.substr(1);
  if (send) {
    return;
  }
  send = true;
  nanoajax.ajax({
    url: `http://${sessionStorage.ServerIp}:4000/sceltaClasse?idClasse=${idClasse}`
  }, function (code, responseText) {
    if (code === 200) {
      window.location.href = `/questionario?idClasse=${idClasse}`;
    };
    if (code === 600) {
      window.location.pathname = '/success';
    };
    if (code === 601) {
      window.location.pathname = '/hack';
    };
  });
};
