let pause = document.getElementById('pause');
pause.addEventListener("click", function() {
  if (pause.innerHTML === `pause`){
    pause.innerHTML = "resume"
  }
  else{
    pause.innerHTML = "pause"
  }
})


  let counter = setInterval(() => {
    if (pause.innerHTML != "resume"){
      document.getElementById('counter').innerHTML = parseInt(document.getElementById('counter').innerHTML) + 1
    }
  }, 1000); //1000 will  run it every 1 second


document.getElementById('-').addEventListener("click", function(e) {
  if (pause.innerHTML === "resume"){
    return e.preventDefault()
  }
  if (document.getElementById('counter').innerHTML != 0) {
    document.getElementById('counter').innerHTML = parseInt(document.getElementById('counter').innerHTML) - 1;
  }
})

document.getElementById('+').addEventListener("click", function(e) {
  if (pause.innerHTML === "resume"){
    return e.preventDefault()
  }
  document.getElementById('counter').innerHTML = parseInt(document.getElementById('counter').innerHTML) + 1;
})

let obj = {}
document.getElementById('<3').addEventListener("click", function(e) {
  if (pause.innerHTML === "resume"){
    return e.preventDefault()
  }
  let num = document.getElementById('counter').innerHTML;
  let div;
  if (document.getElementById(num)) {
    div = document.getElementById(num);
  } else {
    div = document.createElement('div');
    div.id = `${num}`
  }
  if (!obj[num]){
    obj[num] = 1;
    div.innerHTML = `${num} has been liked 1 time`
    let likes = document.getElementsByClassName('likes')[0];
    likes.appendChild(div)
  } else {
    obj[num] += 1;
    div.innerHTML = `${num} has been liked ${obj[num]} times`
  }
})

let form = document.getElementById('comment-form');
let comment = document.getElementById('list');
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let formValue = document.getElementsByTagName('input')[0].value
  let div = document.createElement('div');
  div.innerHTML = `${formValue}`;
  comment.appendChild(div);
})
