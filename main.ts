import inquirer from "inquirer";

let myBalence = 10000;   // Dollar

// myBalence -= 6000

// console.log(myBalence)


let myPin = 1234; 
let pinAnswer = await inquirer.prompt(
       [

          {
             name:"pin",
             message:"enter your pin",
             type:"number"
           }
        ]
);
      // console.log(pinAnswer.q1);
      //  12345 === 1234 - false
if (pinAnswer.pin === myPin){

    console.log("correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message:"please select option",
                type:"list",
                choices:["withdraw", "check balance"]

            }
        ]
    );

    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
       let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message: "enter your amount",
                type: "number"
            }
        ]
       );
       //=,-=,+=
       myBalence -= amountAns.amount;
       console.log("your remaining balance is:" + myBalence)

    
    //    console.log(amountAns.amount);
    } else if (operationAns.operation === "check balance"){
        console.log("your balance is:" + myBalence)
    }

}

else {
    console.log("Incorrect pin number");
}

    

