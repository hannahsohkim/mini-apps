// document.getElementsByClassName('box').addEventListener('click', function(event) {
//   console.log('X')
// })

// document.getElementsByClassName('box').onClick = alert('hi');

document.addEventListener('click', function() {
  document.getElementsByClassName('box').innerHTML = 'X'
})
