let a= new Date()
let ab=1;
setInterval(() => {
    let a= new Date()

    document.getElementById('time').innerHTML= "The current date and time is: "+a.getHours() +":"+ a.getMinutes()+":"+a.getSeconds()+" on "+ a.toLocaleDateString(undefined, Option)
}, 1000);
