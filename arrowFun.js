//1  Odd numbers using IIFE
let input = [10,12,25,46,73]
let output= [];

let OddNo=()=>{                   
    for (let no of input){
        if(no%2!==0){           //Logic for odd number
            output.push(no)     //Pushed odd numbers in empty array
        }
    }console.log(output)        //Displaying array with odd numbers
}                               
OddNo();                        //Function call

//2. Convert all the strings to title caps in a string aray
let input2 = ['shivaji','martha','murgesh','jay']
let output2 = [];

let cap = ()=> {                   //anonymous function syntax
for ( i=0 ; i<input2.length; i++){      //for loop to get values from array
    let str = input2[i].split(" ");     // will split each value and make them seperate
    // console.log(str)
    for(j=0; j<str.length;j++){         //for loop to get each character seperatly
        let upper = str[j].charAt(0).toUpperCase() + str[j].slice(1)        //0th charatcer will get capitalised and will concat with remaining characters
        output2.push(upper)             //pushing to empty array
    }
}console.log(output2)                   //displaying output
}
cap();                                  //Function call

//3. Sum of all numbers in an array
var addition = 0                            //inital addition is 0
let sum = ()=> {
    for(i=0; i<input.length; i++){          //for loop conndition
        addition = input[i] + addition      //0=10+0 and so on
    } console.log(addition)
}
sum();

//4. Retum all the prime numbers in an array
let output3 =[]
let primeNo = ()=>{                   //funvtion created for priem number
    for(var no of input){                   
        let flag = 0;                       //set defaualt flag = 0
        for( let i=2; i<=no/2; i++){        //for loop for getting numbers from array
            if(no%i==0){    
                flag=1                      //if value is prime number change value to 1 fromm 0
                break;
            }
        }
        if (flag == 0){
            output3.push(no)            //if flag is 0 for given condition push value to array
        }  
} console.log(output3)
}
primeNo();

//5. Return all the palindromes in an array
let input3 = ['sydney', 141, 'madam','noon', 'abc', 'sus', 444]
let output4= []

let palCheck = ()=>{
    for (let value of input3){  
        let str = value.toString();             //for of loop to get value from array
        let flag = 1
        for(i=0; i<=str.length/2; i++){         //Palindrome logic
            if(str[i]!==str[str.length - 1 -i]){
                flag = 0;                       
            }
        }
        if(flag==1){                            
            output4.push(value)                 //if its plaindrome , push to output array
        }
    }console.log(output4)
}
palCheck();

