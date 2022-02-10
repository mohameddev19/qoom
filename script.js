let email = document.getElementById('email');
let next = document.getElementById('next');
let pass = document.getElementById('pass');
let login = document.getElementById('login');

next.onclick = ()=>{
  email.style.display = 'none';
  next.style.display = 'none';
  pass.style.display = 'inline-block';
  login.style.display = 'inline-block';
}

login.onclick = ()=>{
  pass.style.display = 'none';
  login.style.display = 'none';
  email.style.display = 'inline-block';
  next.style.display = 'inline-block';
}