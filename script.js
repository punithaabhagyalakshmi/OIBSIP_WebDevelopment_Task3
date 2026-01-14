const inp=document.getElementById("inp");
const unit=document.getElementById("unit");
const result=document.getElementById("result");
const button=document.getElementById("convert");
button.addEventListener("click",() => {
    let val=parseFloat(inp.value);
    if(isNaN(val)){
        result.textContent="Enter a valid number";
        result.style.color="red";
        return;
    }
    let res;
    if(unit.value=="celsius"){
        res=(val*9/5)+32;
        result.textContent=`Fahrenheit: ${res.toFixed(1)}°F`;
    }
    else{
        res=(val-32)*5/9;
        result.textContent=`Celsius: ${res.toFixed(1)}°C`;
    }
    result.style.color="green";
});