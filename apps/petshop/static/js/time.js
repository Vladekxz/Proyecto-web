const time = document.getElementById('time');
const interval = setInterval(() =>{
    const local = new Date();
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();
    
    time.innerHTML = local.toLocaleTimeString();
},1000);
