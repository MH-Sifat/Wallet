
//deposite side

document.getElementById('deposit-button').addEventListener('click',function(){

    //input theke value niye ta num e convert korchi
    const depositeInput = document.getElementById('deposit-input');
    const depositeInputText = depositeInput.value;
    const newDepositeAmmount = parseFloat(depositeInputText);
    if(newDepositeAmmount > 0){
//deposite er value input er sathe change hobe
    const priviousDepositeInput = document.getElementById('deposit-total');
    const priviousDepositeText = priviousDepositeInput.innerText;
    const priviousDepositeAmmount = parseFloat(priviousDepositeText);
// deposite er new value
    const newDepositeTotal = priviousDepositeAmmount + newDepositeAmmount;
    priviousDepositeInput.innerText = newDepositeTotal; 

//total balance update
    const totalBalanceField = document.getElementById('balace-total');
    const totalBalanceText = parseFloat(totalBalanceField.innerText);
//deposite er sathe balance o update hobe
    const newBalnce = totalBalanceText + newDepositeAmmount;
    totalBalanceField.innerText = newBalnce;

//input khali korte use 
    depositeInput.value = '';
}
else{
    alert('Something Is Wrong.Please Check Again');
    depositeInput.value = '';

}
})

//withdraw side
 
document.getElementById('withdra-button').addEventListener('click',function(){
    //input dhora hoyeche
        const newWithdrawInput = document.getElementById('withdraw-input').value;
        const newWithdrawAmmount = parseFloat(newWithdrawInput);
        if(newWithdrawAmmount > 0){
    // withdraw update
        const priviousWithdrawInput = document.getElementById('withdraw-total').innerText;
        const priviousWithdrawAmmount = parseFloat(priviousWithdrawInput);
    
    //withdraw balance update    
        const newWithdrawTotal = priviousWithdrawAmmount + newWithdrawAmmount;
        document.getElementById('withdraw-total').innerText = newWithdrawTotal;
    
    // balance update
    const totalBalanceField = document.getElementById('balace-total');
    console.log(totalBalanceField);
    const totalBalanceText = totalBalanceField.innerText;
    const totalBalanceAmmount = parseFloat(totalBalanceText)
    
    //withdraw er sathe balance o update hobe
    const newBalnce = totalBalanceAmmount - newWithdrawAmmount;
    totalBalanceField.innerText = newBalnce;
    
    //input khali korte use 
    document.getElementById('withdraw-input').value = '';    
    
    }
    else{
        alert('Something Is Wrong.Please Check Again');
    document.getElementById('withdraw-input').value = '';    
    
    }
    })

    
    ///////////////////////////////////////////////////////
    
  // ey kaj er advance system e banking.js e kora ache ja function use kore aro easy way te kora