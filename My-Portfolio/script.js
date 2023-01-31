function menu() {
  document.querySelector('#menu-button').classList.toggle('expanded');
  document.querySelector('#menu-items').toggleAttribute('hidden');
}

document.querySelector('#menu-button').addEventListener('click', menu);
document.querySelectorAll('#menu-items li').forEach((item) => {
  item.addEventListener('click', menu);
});

const projectInfo = [
  {
    id: 'card1',
    img: {
      src: '../icons/Snapshoot Portfolio.svg'
      alt: ''
    }
  }
]
