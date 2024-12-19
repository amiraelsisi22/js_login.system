var regname = document.getElementById('regname');
var regemail = document.getElementById('regemail');
var regpass = document.getElementById('regpass');
var loginemail = document.getElementById('loginemail');
var loginpss = document.getElementById('loginpass');
var curindex;
var linkwel = document.getElementById('linkwel')
var alertname = document.getElementById('alertname')
var alertemail = document.getElementById('alertemail')
var alertapss = document.getElementById('alertpass')
var regbtn = document.getElementById('regbtn')
var wel="d" ;
var person = {};
var people = [];


if (localStorage.getItem('peoplestr') != null) {
    people = JSON.parse(localStorage.getItem('peoplestr'))

}
if (localStorage.getItem('peoplename') != null) {
    wel = JSON.parse(localStorage.getItem('peoplename'))
    document.getElementById('wel').innerHTML="Welcome "+wel;


}


function add() {
    if (validemail() == true && validname() == true && validpass() == true) {
        person = {
            name: regname.value,
            email: regemail.value,
            pass: regpass.value

        }
        console.log("djsa")
        people.push(person)
        localStorage.setItem('peoplestr', JSON.stringify(people))
        clear()
    }

}

function clear() {
    regname.value = null;
    regemail.value = null;
    regpass.value = null;
    regname.classList.remove('is-valid')
    regemail.classList.remove('is-valid')
    regpass.classList.remove('is-valid')
}



function validlogin(){
    for(var i=0;i<people.length;i++){
    if(loginemail.value==people[i].email&&loginpss.value==people[i].pass){
        curindex=i;
        console.log(curindex)
            localStorage.setItem('peoplename', JSON.stringify(people[curindex].name))
        linkwel.setAttribute('href', './welcome.html');
        

        
        
    }
    
}
}
   



document.addEventListener("DOMContentLoaded", function () {

    if (regname) {
        regname.addEventListener('click', function () {
            validname();
        });
    }
});


function validname() {

    var regxname = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if (regxname.test(regname.value)) {
        regname.classList.add('is-valid')
        regname.classList.remove('is-invalid')
        alertname.classList.add('d-none')
        return true;

    } else {
        regname.classList.remove('is-valid')
        alertname.classList.remove('d-none')

        regname.classList.add('is-invalid')
        return false;

    }

}

function validemail() {
    var regxemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regxemail.test(regemail.value)) {
        regemail.classList.add('is-valid')
        regemail.classList.remove('is-invalid')
        alertemail.classList.add('d-none')
        return true;
    } else {
        regemail.classList.remove('is-valid')
        alertemail.classList.remove('d-none')

        regemail.classList.add('is-invalid')

        return false;
    }
}
document.addEventListener("DOMContentLoaded", function () {

    if (regemail) {
        regemail.addEventListener('click', function () {
            validemail();
        });
    }
});
function validpass() {
    var regxpass = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if (regxpass.test(regpass.value)) {
        regpass.classList.add('is-valid')
        regpass.classList.remove('is-invalid')
        alertapss.classList.add('d-none')
        return true;



    } else {
        regpass.classList.remove('is-valid')
        alertapss.classList.remove('d-none')
        regpass.classList.add('is-invalid')
        return false;

    }
}
document.addEventListener("DOMContentLoaded", function () {

    if (regpass) {
        regpass.addEventListener('click', function () {
            validpass();
        });
    }
});
