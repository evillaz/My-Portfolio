function menu() {
  document.querySelector('#menu-button').classList.toggle('expanded');
  document.querySelector("#menu-items").toggleAttribute('hidden');
}

document.querySelector('#menu-button').addEventListener('click', menu);
document.querySelectorAll('#menu-items li').forEach((item) => {
  item.addEventListener('click', menu);
});
