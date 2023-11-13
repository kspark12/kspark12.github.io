const fizzBuzzParagraph= document.getElementById("fizzbuzzcontent");

//let text = createTextNode("FizzBuzz");
// fizzBuzzParagraph.appendChild(text);


function fizzBuzz(){
    for (let i = 1; i <= 110; i++) {
       let tempStr= "";

       if(i%3==0){
           tempStr+="Fizz ";
       }

       if(i%5==0){
           tempStr+="Buzz ";
       }

       if(i%7==0){
              tempStr+="BANG! ";
       }

       if(tempStr==""){
           tempStr+=i;
       }
       fizzBuzzParagraph.textContent+=tempStr + ", ";
    }
}

