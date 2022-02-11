const addDeposit = document.getElementById('deposit-button');
addDeposit.addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')

    const newdepositAmmount = parseFloat(depositInput.value);
    depositInput.value = '';
    const pushDeposit = document.getElementById('deposit-span')
    const firstDeposit = parseFloat(pushDeposit.innerText);
    const totalDeposite = firstDeposit + newdepositAmmount;
    pushDeposit.innerText = totalDeposite;
    const totalBalance = document.getElementById('balance-span');
    const prevBalanceDeposit = parseFloat(totalBalance.innerText);
    const newTotalBalance = prevBalanceDeposit + newdepositAmmount;
    totalBalance.innerText = newTotalBalance;
})
const WithdrowKoro = document.getElementById('withdrow-button');
WithdrowKoro.addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const firstWithdrow = parseFloat(withdrowInput.value);
    withdrowInput.value = '';
    const withdrowSpan = document.getElementById('withdrow-span')
    const firstwith = parseFloat(withdrowSpan.innerText);
    const totalWithdrow = firstwith + firstWithdrow;
    withdrowSpan.innerText = totalWithdrow;

    //added prev
    const balanceWithdrow = document.getElementById('balance-span');
    const prevbalanceWithdrow = parseFloat(balanceWithdrow.innerText);
    const totalBalance = prevbalanceWithdrow - firstWithdrow;
    balanceWithdrow.innerText = totalBalance;

})
