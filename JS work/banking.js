


function getInput(productId){
//input theke value niye ta num e convert korchi
    const input = document.getElementById(productId +'-input');
    const inputText = input.value;
    const inputAmmount = parseFloat(inputText);
//input khali korte use 
    input.value = ''; 
    return inputAmmount;

}


function updateTotal(updateId,newAmmount){
//deposite er value input er sathe change hobe
    const priviousInput = document.getElementById(updateId);
    const priviousText = priviousInput.innerText;
    const priviousAmmount = parseFloat(priviousText);

// deposite er new value
    const newTotal = priviousAmmount + newAmmount;
    priviousInput.innerText = newTotal; 


}

function getCurrentBalance(){
    //total balance update
    const totalBalanceField = document.getElementById('balace-total');
    const totalBalanceText = parseFloat(totalBalanceField.innerText);
    return totalBalanceText;
}

function updateBalance(ammount,isAdd){

const totalBalanceField = document.getElementById('balace-total');
const totalBalanceText = getCurrentBalance()
//deposite er sathe balance o update hobe
if(isAdd == true){
    totalBalanceField.innerText = totalBalanceText + ammount;
}
else{
    totalBalanceField.innerText = totalBalanceText - ammount;

}
}


//deposite side
document.getElementById('deposit-button').addEventListener('click',function(){
     
    const newDepositeAmmount = getInput("deposit");

    if(newDepositeAmmount > 0){
    updateTotal('deposit-total',newDepositeAmmount);
    updateBalance(newDepositeAmmount, true); 
    }
    else{
        alert('Check Again Some Thing is wrong')
    }

})



//withdraw side
document.getElementById('withdra-button').addEventListener('click',function(){
 
   const newWithdrawAmmount = getInput('withdraw')
   const CurrentBalance = getCurrentBalance();

   if(newWithdrawAmmount > 0 && newWithdrawAmmount <= CurrentBalance){
   updateTotal('withdraw-total', newWithdrawAmmount)
   updateBalance(newWithdrawAmmount, false)
   }
   else{
     alert('YOU DO NOT  HAVE THAT MUCH BALANCE ')
   }
    
    })
    
    
    