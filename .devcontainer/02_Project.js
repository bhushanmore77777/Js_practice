//In this click is not event
//Form having event is submit
//as this is form so we have to select that form and store in variable
const form=document.querySelector('form')
//form having 2 submit post,get
form.addEventListener('submit',function(e){
    e.preventDefault()//this will stop default value
    //so now we have to select input that is height and weight
    const height=parseInt(document.querySelector('#height').value)   //here we are using #height because in html we used id as height
    const weight=parseInt(document.querySelector('#weight').value)
    //If we write height before addEventListener then when page will be load that time height store empty value
    //we want after submitting value we want bmi so we add in event
    const results=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height))
    {
        results.innerHTML=`Please Enter Valid Height ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
        results.innerHTML=`Please Enter Valid weight ${weight}`
    }
   else
   {
    const bmi=(weight/((height*height)/10000).toFixed(2))
    results.innerHTML=`<span>${bmi}</span>`
   }
})