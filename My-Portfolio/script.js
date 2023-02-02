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
    id: 'multiPost',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Multi-Post Stories snapshot',
    },
    modalTechs: ['css', 'html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
  },
  {
    id: 'card1',
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Profesional Art Printing snapshot',
    },
    modalTechs: ['html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
    background: { desktop: 'bg1' },
  },
  {
    id: 'card2',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Profesional Art Printing snapshot',
    },
    modalTechs: ['html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
    background: { desktop: 'bg2' },
  },
  {
    id: 'card3',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Profesional Art Printing snapshot',
    },
    modalTechs: ['html', 'Bootstrap', 'Ruby on rails'],
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    links: {
      live: '',
      source: '',
    },
    background: { desktop: 'bg3' },
  },
];
const workSection = document.getElementById('worksSection');
const workCards = document.getElementById('worksContainer');

function getTechList(technologies) {
  let list = '';
  if (technologies) {
    technologies.forEach((tech) => {
      list += `<li class="tag">${tech}</li>`;
    });
  }
  return list;
}

function getCardContent({
  name, description, technologies, id,
}) {
  return `<div class="cardContent">
            <h3>${name}</h3>
            <p>
              ${description}
            </p>
            <ul>
              ${getTechList(technologies)}
            </ul>
          </div>
          <button class="button projectButton" data-name=${id} type="button">
            <span id="buttonText">See Project</span>
          </button>`;
}

function setFirstCard(card) {
  const firstCardContainer = document.createElement('div');
  firstCardContainer.className = 'mpContainer';
  firstCardContainer.id = 'multi-post';

  const firstImg = document.createElement('img');
  firstImg.className = 'placeHolder';
  firstImg.id = 'placeholderMP';
  firstImg.src = 'icons/ImgPlaceholder1.svg';
  firstImg.alt = 'MultiPost Stories';

  firstCardContainer.appendChild(firstImg);

  const firstCardDetail = document.createElement('div');
  firstCardDetail.className = 'mpElements';
  firstCardDetail.id = 'multi-postBlock';
  firstCardDetail.innerHTML += getCardContent(card);

  firstCardContainer.appendChild(firstCardDetail);
  workSection.appendChild(firstCardContainer);
}

function setDesktopCards(card) {
  const cardDetail = document.createElement('div');
  cardDetail.className = `deskCardWork ${card.background.desktop}`;
  cardDetail.innerHTML = getCardContent(card);
  return cardDetail;
}

function setMobileCards(card) {
  const cardDetail = document.createElement('div');
  cardDetail.className = `mobileCardWork ${card.background.desktop}`;
  cardDetail.innerHTML = getCardContent(card);
  return cardDetail;
}

function setWorkCards(card) {
  workCards.appendChild(setDesktopCards(card));
  workCards.appendChild(setMobileCards(card));
}

function loadWorkCards() {
  for (let i = 0; i < projectInfo.length; i += 1) {
    if (i === 0) setFirstCard(projectInfo[i]);
    else if (i > 0) setWorkCards(projectInfo[i]);
  }
  for (let i = 1; i < projectInfo.length; i += 1) {
    setWorkCards(projectInfo[i]);
  }
}
loadWorkCards();

const projectWindow = document.querySelector('.project-preview');

function loadProject() {
  projectInfo.forEach((info) => {
    projectWindow.innerHTML += `
      <div class="projectPreview" data-target="${info.id}">
        <div class="projectHeader">
          <div class="head">
            <h2>${info.name}</h2>
            <i class="fa fa-close" style="font-size:24px; color:#67798e"></i>
          </div>  
          <ul class="technologiesPreview">
            ${getTechList(info.modalTechs)}
          </ul>
        </div>
        <div class="projectElements">
          <img class="projectImg" src="${info.img.src}" alt="${info.img.alt}" />
          <div class="projectContent">
            <div class="projectDescription">
              <p>
                ${info.description}
              </p>
            </div>
            <div class="projectButtons">
              <div>
                <button class="button cardButtons" href="${info.links.live}">
                  <span>See Live</span>
                  <img src="icons/IconLive.svg" alt="Live" />
                </button>
              </div>
              <div>
                <button class="button cardButtons" href="${info.links.live}">
                  <span>See Source</span>
                  <img src="icons/IconSource.svg" alt="Source" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      `;
  });
}

loadProject();

const projectContainer = document.querySelector('.project-preview');
const previewWindow = projectContainer.querySelectorAll('.projectPreview');
const background = document.querySelector('.bg');

document
  .querySelectorAll('.projectButton')
  .forEach((project) => {
    project.onclick = () => {
      projectContainer.style.display = 'flex';
      background.style.filter = 'blur(5px)';
      background.style.overflow = 'hidden';
      const name = project.getAttribute('data-name');
      previewWindow.forEach((preview) => {
        const target = preview.getAttribute('data-target');
        if (name === target) {
          preview.classList.add('active');
        }
      });
    };
  });

previewWindow.forEach((close) => {
  close.querySelector('.fa-close').onclick = () => {
    close.classList.remove('active');
    projectContainer.style.display = 'none';
    background.style.filter = 'none';
  };
});

const email = document.getElementById('email');
const form = document.getElementById('formContainer');
const submitButton = document.getElementById('submitForm');

function validateEmail() {
  const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const isNotValid = !emailRegExp.test(email.value);
  const emailExample = email.value.toLowerCase();

  if (isNotValid) {
    submitButton.setCustomValidity(
      `You should only use lowercase in the email field!!!\nLike: ${emailExample}`,
    );
  } else submitButton.setCustomValidity('');
}

email.addEventListener('input', () => {
  validateEmail();
});

form.addEventListener('submit', () => {
  validateEmail();
});
