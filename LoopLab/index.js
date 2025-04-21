const parentEl = document.createElement('div')
document.body.appendChild(parentEl)

for (let i = 1; i <= 5; i++) {
  let x = ''
  let y = ''

  for (let j = 0; j < 5 - i; j++) {
    x += '&nbsp;'
  }

  for (let k = 0; k < i; k++) {
    y += '#'
  }

  const rowEl = document.createElement('p')
  // rowEl.style.whiteSpace = 'pre'
  rowEl.innerHTML = x + y
  parentEl.appendChild(rowEl)
  console.log(x + y)
  // document.querySelector('.right-triangle').innerHTML = x + y
}
