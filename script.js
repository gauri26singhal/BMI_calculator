// here its is submit type event
const form=document.querySelector("form")
//form jab bhi submit hota h toh ya toh vo post type se hota h 
//ya get type se submit hota h
// jab bi submit hotra h toh uksi vakues goes to server ya url 
// so we have to stop it here 
// that is we r going to stop the default action of the form
// so we apply 
form.addEventListener("submit",function(e){
    e.preventDefault()
     const height=parseInt(document.querySelector("#height").value)
     const weight=parseInt(document.querySelector("#weight").value)
     const results=(document.querySelector("#results"))
     if(height=="" || height<0 || isNaN(height)){
        results.innerHTML="Please give a valid height"
     }
     else if(weight=="" || weight<0 || isNaN(weight)){
        results.innerHTML="Please give a valid weight"
     }
     else{
      const bmi=(weight / (( height*height)/10000)).toFixed(2)
      //show the rresult
    //   results.innerHTML=`<span>${bmi}</span>`
      if(bmi < 18.6 ){

        results.innerHTML=` ${bmi} You are Underweight`
     }
     else if(bmi >18.6 && bmi <24.9){
        results.innerHTML= ` ${bmi} You are in Normal Range category`
     }
     else{
        results.innerHTML=` ${bmi} You are Overwieght`
     }
     }
     
     
     
})