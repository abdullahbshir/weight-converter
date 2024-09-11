document.addEventListener('DOMContentLoaded', function() {


const pound_element =document.getElementById('pound');
const kilogram_element =document.getElementById('kilogram')

pound_element.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        converter()  // Call the function
    }
}) ; 

    function converter() {
        let pound = pound_element.value
        pound = parseFloat(pound) ;
        let multiplier =  0.45359237

        let ans = pound * multiplier
    
    kilogram_element.innerHTML = `Your weight in kg is ${ans}kg`;
    // console.log(ans)
        }            
   } )