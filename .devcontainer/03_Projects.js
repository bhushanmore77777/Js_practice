const clock=document.querySelector('#clock')
//we want date every so we used setInterval method
setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)