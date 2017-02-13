//js of ZHOU 
function scrollZhou(eID, speed) {
  var windowObject = window;
  var windowPos = windowObject.pageYOffset;
  //var pointer = toElement.getAttribute('href').slice(1);
  var elem = document.getElementById(eID);
  var elemOffset = elem.offsetTop;

  if (windowPos > elemOffset) {
    speed = (windowPos - elemOffset)/speed;
  } 
  if (windowPos < elemOffset) {
    speed = (elemOffset - windowPos)/speed;
  } 
  var counter = setInterval(function () {
    windowPos;

    if (windowPos > elemOffset) { // from bottom to top
      windowObject.scrollTo(0, windowPos);
      windowPos -= speed;

      if (windowPos <= elemOffset) { // scrolling until elemOffset is higher than scrollbar position, cancel interval and set scrollbar to element position
        clearInterval(counter);
        windowObject.scrollTo(0, elemOffset);
      }
    } else { // from top to bottom
      windowObject.scrollTo(0, windowPos);
      windowPos += speed;

      if (windowPos >= elemOffset) { // scroll until scrollbar is lower than element, cancel interval and set scrollbar to element position
        clearInterval(counter);
        windowObject.scrollTo(0, elemOffset);
      }
    }

  }, 1);
}

function navbarScroll(elem) {
  var docID = elem.getAttribute("href")
  docID = docID.substr(1);
  scrollZhou(docID, 150);
}
//todo se ri riesce a usarlo si puo activare i link della navbar
function isInViewport(element) {
  element = document.getElementById(element);
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

