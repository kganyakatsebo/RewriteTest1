let a
let b
let c
let d
let e
let f
let g
let h
let i
let j
let total = 10
let percent
let mark
let name
let aa
let bb
let cc
let dd
let ee
let ff
let gg
let hh
let ii
let jj
let sender = "simonnthoesane@gmail.com"


function sendEmail(){
    Email.send({
        SecureToken: "7a0e2e72-9be0-47ff-a945-861e07915cd3",
        
        To : 'kganyakatsebo@gmail.com',
        From : sender,
        Subject : "Name: " + name,
        Body : 
        
         `<br> Name: ${name} <br> Mark: ${percent}%`
       
    }).then(
    message => alert("Marks Sent")
    );
}
document.getElementById("submit").onclick = function(){
    const a = document.getElementById("a1").value
    if(document.getElementById("a1").checked){
        document.getElementById("r1").innerHTML = "Correct"
        aa = 1
    }
    else{
        document.getElementById("r1").innerHTML = "Incorrect"
        aa = 0
    }

    const b = document.getElementById("a2").value
    if(document.getElementById("a2").checked){
        document.getElementById("r2").innerHTML = "Correct"
        bb = 1
    }
    else{
        document.getElementById("r2").innerHTML = "Incorrect"
        bb = 0
    }
    const c = document.getElementById("a3").value
    if(document.getElementById("a3").checked){
        document.getElementById("r3").innerHTML = "Correct"
        cc = 1
    }
    else{
        document.getElementById("r3").innerHTML = "Incorrect"
        cc = 0
    }
    const d = document.getElementById("a4").value
    if(document.getElementById("a4").checked){
        document.getElementById("r4").innerHTML = "Correct"
        dd = 1
    }
    else{
        document.getElementById("r4").innerHTML = "Incorrect"
        dd = 0
    }
    const e = document.getElementById("a5").value
    if(document.getElementById("a5").checked){
        document.getElementById("r5").innerHTML = "Correct"
        ee = 1
    }
    else{
        document.getElementById("r5").innerHTML = "Incorrect"
        ee = 0
    }
    const f = document.getElementById("a6").value
    if(document.getElementById("a6").checked){
        document.getElementById("r6").innerHTML = "Correct"
        ff = 1
    }
    else{
        document.getElementById("r6").innerHTML = "Incorrect"
        ff = 0
    }

    const g = document.getElementById("a7").value
    if(document.getElementById("a7").checked){
        document.getElementById("r7").innerHTML = "Correct"
        gg = 1
    }
    else{
        document.getElementById("r7").innerHTML = "Incorrect"
        gg = 0
    }
    const h = document.getElementById("a8").value
    if(document.getElementById("a8").checked){
        document.getElementById("r8").innerHTML = "Correct"
        hh = 1
    }
    else{
        document.getElementById("r8").innerHTML = "Incorrect"
        hh = 0
    }
    const i = document.getElementById("a9").value
    if(document.getElementById("a9").checked){
        document.getElementById("r9").innerHTML = "Correct"
        ii = 1
    }
    else{
        document.getElementById("r9").innerHTML = "Incorrect"
        ii = 0
    }
    const j = document.getElementById("a10").value
    if(document.getElementById("a10").checked){
        document.getElementById("r10").innerHTML = "Correct"
        jj = 1
    }
    else{
        document.getElementById("r10").innerHTML = "Incorrect"
        jj = 0
    }
mark = aa + bb + cc + dd + ee +ff + gg + hh + ii + jj
percent = (mark / total) * 100
if(mark >= 5 ){
document.getElementById("results").innerHTML = "You have obtained " + percent +"% <br> you have passed!" 
}
else{
    document.getElementById("results").innerHTML = "You have obtained " + percent +"% <br> you have failed!" 

}
    name = document.getElementById("name").value
}



