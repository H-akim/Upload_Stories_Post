var text_box = document.getElementById("text_box");

text_box.onkeyup = text_box.onKeypress = function() {
        document.getElementById("prev_text").innerHTML = this.value;
}

var img_box = document.getElementById("img_box");
var file = document.getElementById("file").addEventListener("change",(event)=>{
        img_box.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0]) + ")";
})