const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLogInSubmit(event){      // submit을 할 때 새로고침을 하지 않게 해줌
    event.preventDefault();                 // 기본 동작을 하지 못하게 함
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);                               // 사용자가 입력한 username 값을 사용
}
function paintGreetings(username){
    greeting.innerHTML = `Hello, ${username}`;       // 백틱은 option + ₩(한글 일때) / ₩(영문일 때)
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);  

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit",onLogInSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);                          // localStorage 에 있는 인자를 사용
}

/*
const link = document.querySelector("a");   

function handelLinkClick(event){
    event.preventDefault();
    // alert("clicked!"); // <- 실행 후 페이지가 나타남
}

link.addEventListener("click",handelLinkClick);
*/