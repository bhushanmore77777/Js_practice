//1.We have to select buttons all to use loop
const buttons=document.querySelectorAll('.button')
//2.Now we are changing background colour
const body=document.querySelector('body')
//3.we are using forEach() loop
buttons.forEach(function(button){
    //now we are making event
    button.addEventListener('click',function(e){
        if(e.target.id ==='grey')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white')
        {
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue')
        {
            body.style.backgroundColor=e.target.id
        }
    });
    //in above event we have to give 2 parameters 1.click=>-this indicate that on clicking this event will occur.
    //                                            2.callback function
})
