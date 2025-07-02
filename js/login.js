// Mostrar/Ocultar contraseña en login
const passwordAccess = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    iconEye.classList.toggle('ri-eye-fill');
    iconEye.classList.toggle('ri-eye-off-fill');
  });
};
passwordAccess('password','loginPassword');

// Mostrar/Ocultar contraseña en registro
const passwordRegister = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

  iconEye.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    iconEye.classList.toggle('ri-eye-fill');
    iconEye.classList.toggle('ri-eye-off-fill');
  });
};
passwordRegister('passwordCreate','loginPasswordCreate');

// Alternar entre login y registro
const loginAccessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess');

if (buttonRegister && loginAccessRegister) {
  buttonRegister.addEventListener('click', () => {
    loginAccessRegister.classList.add('active');
  });
}

if (buttonAccess && loginAccessRegister) {
  buttonAccess.addEventListener('click', () => {
    loginAccessRegister.classList.remove('active');
  });
}

// Header cambia con scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

