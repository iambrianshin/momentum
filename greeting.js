/*
|------------------------------------------
| Note.
|------------------------------------------
|
| - localstorage : 유저컴퓨터(브라우저)에 정보를 저장하고있는 스토리지.
| - classList : 해당 엘리먼트의 class를 컨트롤 할 수 있다.
| - addEventListener : 해당 이벤트를 캐치한다.
| - event.preventDefault : 이벤트의 기본값을 없앤다.
|
*/

const greetingForm = document.querySelector(".js-greetingForm"),
  greetingInput = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "curerntUser",
  SHOWING_CLASSNAME = "showing",
  HIDING_CLASSNAME = "hiding";

function saveName(text) {
  // 로컬스토리지에 저장하면 브라우저가 refresh 되어도 값을 가지고 있다.
  localStorage.setItem(USER_LOCALSTORAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  greetingForm.classList.add(HIDING_CLASSNAME);
  toDoForm.classList.remove(HIDING_CLASSNAME);
  paintGreeting(currentValue);
  saveName(currentValue);
  document.querySelector(".js-toDoInput").focus();
}

function askForName() {
  greetingInput.focus();
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.add(HIDING_CLASSNAME);
  greeting.classList.add(SHOWING_CLASSNAME);
  greeting.innerText = `Hello ${text}. What is your to do for today?`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
