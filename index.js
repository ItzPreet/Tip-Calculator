function calculateTip() {
    const billAmount = parseFloat(document.getElementById('amount').value);
    const tipPercentage = parseFloat(document.getElementById('services').value);
    const peolpeNumber = parseFloat(document.getElementById('persons').value);

    let totalTip = parseFloat(billAmount * tipPercentage);
	totalTip = totalTip.toFixed(2);
    let totalToPay = parseFloat(billAmount) + parseFloat(totalTip);
	totalToPay = totalToPay.toFixed(2);
    let tipPerPerson = (totalTip * 100 / peolpeNumber) / 100;
	tipPerPerson = tipPerPerson.toFixed(2);
	let totalBillPerPerson = parseFloat(totalToPay / peolpeNumber) + parseFloat(tipPerPerson);
	totalBillPerPerson = totalBillPerPerson.toFixed(2);
    
    document.getElementById('totalTip').innerText = totalTip;
    document.getElementById('totalBill').innerText = totalToPay;
    document.getElementById('tipPerPerson').innerText = tipPerPerson;
    document.getElementById('totalBillPerPerson').innerText = totalBillPerPerson;
}
