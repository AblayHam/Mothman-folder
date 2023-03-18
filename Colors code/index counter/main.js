let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let clean = document.getElementById("clean")

let counter = document.getElementById("counter")

let count = 0

plus.addEventListener("click", function(){
    count+=2
    counter.textContent = count

    if(count > 0){
        counter.style.color = "green"
    }
})

minus.addEventListener("click", function(){
    count-= 1997
    counter.textContent = count

    if(count < 0){
        counter.style.color = "red"
    }
})

clean.addEventListener("click", function(){
    count=0
    counter.textContent = count

    if(count == 0){
        counter.style.color = "black"
    }
})