
document.querySelector("#people").addEventListener("input", function(){check()});
function check() {
    const errorPl = document.getElementById("error");
    const people = document.querySelector("#people");
    let peopleres = document.getElementById("people").value;
    if (peopleres==0) {
        errorPl.style.cssText = "visibility: visible;"
        errorPl.style.color='red';
    } else {
        errorPl.style.cssText = "visibility: hidden;"
    }
    people.addEventListener("input", function(){check()})         
}

  
// select tip
$("button").click(function() {
    let billres = document.getElementById("bill").value; //must inside the function
    var peopleres = document.getElementById("people").value;
    const tip = $(this).val();
    const sum =  billres * tip /peopleres;
    const tosum = sum + billres/peopleres;
    document.getElementById("perTip").innerHTML = sum.toFixed(2);
    document.getElementById("total").innerHTML = tosum.toFixed(2);
  
});

// custom tip
document.getElementById("custom").addEventListener("input", function(){myFunction()});
function myFunction(){
    let billres = document.getElementById("bill").value; //must inside the function
    var peopleres = document.getElementById("people").value;
    const customres = document.getElementById("custom").value;
    const cal = customres / 100;
    const sum =  billres * cal /peopleres;
    const tosum = sum + billres/peopleres;
    document.getElementById("perTip").textContent = sum.toFixed(2);
    document.getElementById("total").textContent = tosum.toFixed(2);
  
}
// reset
document.getElementById("btn-reset").addEventListener("click", function(){res()});
function res(){
    document.getElementById("bill").value="";
    document.getElementById("bill").textContent="0";
    document.getElementById("people").value="";
    document.getElementById("people").textContent="0";
    document.getElementById("perTip").textContent = "$0.00";
    document.getElementById("total").textContent = "$0.00";
    document.querySelector("#error").style.cssText = "visibility: hidden;"
 }

