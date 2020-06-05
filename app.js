var myexp = document.querySelector('#comment');
var bgbody = document.querySelector('#mainbody');
myexp.addEventListener('click', () => toggle(bgbody));

function toggle(button) {
  if (button.value == 'off') {
    button.value = 'on';
    console.log('off');
    myexp.innerHTML = 'Experiment';
    bgbody.style.backgroundColor = 'white';
    bgbody.removeChild(document.querySelector('#exe'));
  } else {
    button.value = 'off';
    console.log('on');
    let btn = document.createElement('h3');
    btn.innerHTML = Date();
    btn.id = 'exe';
    bgbody.appendChild(btn);
    myexp.innerHTML = Date();
    bgbody.style.backgroundColor = 'yellow';
  }
}
