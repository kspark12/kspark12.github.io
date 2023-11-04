const calculator = document.querySelector(calculator)
const keys = calculator.querySelector(calculator__keys)

keys.addEventListener(click, e => {
 if (e.target.matches(button)) {
   // Do something
 }
})

const key = e.target
const action = key.dataset.action

if (!action) {
    console.log('number key!')
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
  }

  const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})

if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    }
  }

  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }

  if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('is-depressed')
  }

  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target
      // ...
      
      // Remove .is-depressed class from all keys
      Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
  })


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...
    
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
    }
  }
}) 

const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    display.textContent = calculate(firstValue, operator, secondValue)
  }

  const calculate = (n1, operator, n2) => {
    let result = ''
  
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
  
    return result
  }

  window.onload = function ()
{
document.getElementById("button4").onclick = showNum; // button4 is the id of the button that has a value of 4
}
function showNum()
{
document.formCalculator.textNumber.value += this.value;
}