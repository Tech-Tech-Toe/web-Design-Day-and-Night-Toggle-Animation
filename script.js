const wrapper = document.querySelector('.wrapper');
const para = document.querySelector('p');
const body = document.querySelector('body');

wrapper.addEventListener('change', function(e) {
  if(e.target.checked) {
    para.classList.add('morning');
    para.textContent = 'Morning, Sunshine!';
    body.classList.add('change');
  } else {
    para.classList.remove('morning');
    para.textContent = 'Good Night!';
    body.classList.remove('change');
  }
});
