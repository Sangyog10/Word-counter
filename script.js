let textbox = document.querySelector("#textbox");
textbox.addEventListener("input", function () {
  var text = this.value;
  let len = text.length;
  document.querySelector(".char").innerHTML = len;
  text = text.trim(); //removes extra space from first and last
  let word = text.split(" "); //it will split each word into array as soon as it get space

  let cleanList = word.filter(function (elm) {
    return elm != "";
  });
  document.querySelector(".word").innerHTML = cleanList.length;
});
