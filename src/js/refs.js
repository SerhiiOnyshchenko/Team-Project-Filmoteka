const refs = {
    //foter modal
    openModalBtn: document.querySelector('#footer-link'),
    closeModalBtn: document.querySelector('#footerModalClose'),
    footerModal: document.querySelector('#footerModal'),
    bodyScroll: document.querySelector('body'),
    backdropp: document.querySelector('.backdropp'),

   // modal
   modal: document.querySelector('.modal-content'),
   backdrop: document.querySelector('.backdrop'),
   btnClose: document.querySelector('.btn-close'),

   // register lgi form
   signUpButton: document.getElementById('signUpBtn'),
   signInButton: document.getElementById('signInBtn'),
   container: document.getElementById('container'),

   btnLogin: document.getElementById('btnLoginBtn'),
   btnSignup: document.getElementById('btnSignUpBtn'),
   btnLogout: document.getElementById('btnLogout'),

   socialBtnGoogleLogin: document.getElementById('socialBtnGoogleLogin'),
   socialBtnGoogleRegister: document.getElementById('socialBtnGoogleRegister'),

   formLoginRegister: document.getElementById('formLoginRegister'),

   txtEmailLogin: document.getElementById('txtEmailLogin'),
   txtPasswordLogin: document.getElementById('txtPasswordLogin'),

   txtNameRegister: document.getElementById('txtNameRegister'),
   txtEmailRegister: document.getElementById('txtEmailRegister'),
   txtPasswordRegister: document.getElementById('txtPasswordRegister'),

   loginUser: document.getElementById('loginUser'),

   divLoginError: document.getElementById('divLoginError'),
   lblLoginErrorMessage: document.getElementById('lblLoginErrorMessage'),

   // header toggle
   logo: document.getElementById('logo__js'),
   btnHome: document.getElementById('home__js'),
   btnMyLibrary: document.getElementById('my-library__js'),
   header: document.getElementById('header'),
   libraryBtns: document.getElementById('header__btns'),
   headerInput: document.getElementById('header__form'),
   searchBtn: document.querySelector('.form__btn'),
   galleryList: document.getElementById('gallery-list'),
};

export default refs;
