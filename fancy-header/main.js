var contArr;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackground() {
  var body = document.getElementsByTagName("body")[0];

  if (!body.style.backgroundColor || body.style.backgroundColor === "rgb(255, 255, 255)") {
    var color = getRandomColor();
    body.style.backgroundColor = color;
  } else {
    body.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

function changeContent() {
  var headers = Array.prototype.slice.call(document.getElementsByClassName('content'));
  var newText = "Small Stuff";

  if (!contArr) {
    contArr = [];
    headers.forEach(function (elem) {
      contArr.push(elem.innerHTML);
    });
  }

  if (headers[0].innerHTML === newText) {
    headers.forEach(function (elem, idx) {
      elem.innerHTML = contArr[idx];
    });
  } else {
    headers.forEach(function (elem) {
      elem.innerHTML = newText;
    });
  }

}
