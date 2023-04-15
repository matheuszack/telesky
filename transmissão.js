const video = document.getElementById("live-stream");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.error("Oops. Something is broken.", error);
    });
} else {
  console.error("getUserMedia not supported");
}

const form = document.querySelector("form");
const comments = document.getElementById("comments");
const displayComments = document.getElementById("display-comments");

form.addEventListener("submit", function (event) {
event.preventDefault();
const comment = comments.value;
if (comment) {
const newComment = document.createElement("p");
newComment.innerText = comment;
displayComments.appendChild(newComment);
comments.value = "";
}
});

