// grabbing stuff ...
const inputAmount = document.getElementById('inputAmount')
const depositBtn = document.getElementById('depositBtn')
const withdrawBtn = document.getElementById('withdrawBtn')
const balanceFromDom = document.getElementById("balanceFromDom")
const msgFromDom = document.getElementById('msgFromDom')
const msgBox = document.querySelector('.msg-box')

class Bank {
  constructor(balance) {
    this.balance = balance
  }
  
  deposit(amount) {
    this.balance += amount
    msgFromDom.innerText = `Have a nice day!!!!`
    msgFromDom.style.color = `#fff`
  }
  
  withdraw(amount) {
    // guard clause ...
    if (this.balance - amount < 0) {
      msgFromDom.innerText = `What a stupid piece of shit....`
      msgFromDom.style.color = `#f00`
      return 
    } else {
      msgFromDom.innerText = `Have a nice day!!!!`
      msgFromDom.style.color = `#fff`
    }
    
    this.balance -= amount
  }
  
}


const user = new Bank(100)

balanceFromDom.innerText = user.balance

depositBtn.onclick = () => {
  user.deposit(Number(inputAmount.value))
  balanceFromDom.innerText = user.balance
  inputAmount.value = ""
}

withdrawBtn.onclick = () => {
  user.withdraw(Number(inputAmount.value))
  balanceFromDom.innerText = user.balance
  inputAmount.value = ""
}

