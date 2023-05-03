

let textarea = document.getElementById("textArea");
let wordsleft = document.getElementById("output");


function countWords(){
    const currentValue = textarea.value;

    const newDisplay = 140 -  textarea.value.length

   
    if (newDisplay  >= 0) {
        wordsleft.textContent = `You have ${newDisplay} words left`;

       
    } 

    if (currentValue.length > 140){
        const truncateValue = currentValue.slice(0, 140);
        textarea.value = truncateValue
        alert("you reached the max number")
    }
  
    
    
    
}





