var button1 = document.getElementsByClassName("btn1")[0]
var button2 = document.getElementsByClassName("btn2")[0]
const body = document.body


button1.addEventListener('click', function() {
    body.append("click king")
    var new_but = document.querySelector("#new-button")
    new_but.remove()
})

button2.addEventListener('click', function() {
    let div = document.createElement("div")
    div.innerText = "hey"
    div.innerHTML = "<button id='new-button'>new button</button>"
    body.append(div)
})

button1.setAttribute("id", "hello")
