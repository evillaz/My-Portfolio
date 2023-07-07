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
    id: 'maincard',
    name: 'Dota 2 Teams Glossary',
    description: 'Dota2 Pro Teams Glossary is a single-page application (SPA) built with React and Redux. Using the OpenDota API we managed to retrieve and display the whole Glossary of all the recorded Dota 2 teams that faced pro competitions.',
    img: {
      src: './screenshots/dota2teamsglossary.png',
      alt: 'Dota 2 Teams Glossary snapshot',
    },
    modalTechs: ['JavaScript', 'React', 'Redux'],
    technologies: ['JavaScript', 'React', 'Redux'],
    links: {
      live: 'https://dota-2-teams-glossary.onrender.com/',
      source: 'https://github.com/evillaz/dota2-teams-glossary',
    },
  },
  {
    id: 'card1',
    name: 'Space Travelers Hub',
    description: 'Space Travelers Hub consists of Rockets, Missions, and the My Profile section. The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. Missions The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.',
    img: {
      src: './screenshots/space-hub.png',
      alt: 'Space Travelers Hub snapshot',
    },
    modalTechs: ['JavaScript', 'React', 'Redux'],
    technologies: ['JavaScript', 'React', 'Redux'],
    links: {
      live: 'https://space-travelers-hub-2zo8.onrender.com/',
      source: 'https://github.com/evillaz/space-travelers-hub',
    },
    background: { desktop: 'bg1' },
  },
  {
    id: 'card2',
    name: 'Bookstore',
    description: 'Bookstore is a website for all book fans. It is a Single Page App (SPA) that allows users to: Display a list of books, Add a book, Remove a selected book',
    img: {
      src: './screenshots/bookstore.png',
      alt: 'Bookstore snapshot',
    },
    modalTechs: ['JavaScript', 'React', 'Redux'],
    technologies: ['JavaScript', 'React', 'Redux'],
    links: {
      live: 'https://book-store-mgyp.onrender.com/',
      source: 'https://github.com/evillaz/bookstore',
    },
    background: { desktop: 'bg2' },
  },
  {
    id: 'card3',
    name: 'Live TV shows',
    description: 'This API-based Web App was built based on the TVmaze API, and it displays the Homepage and Comments pop-up interfaces. Following a wireframe layout, using Gitflow, Linters, HTML, CSS, Javascript, Webpack and a Javascript testing library called Jest.',
    img: {
      src: './screenshots/live-tv-shows.png',
      alt: 'Live TV shows ScreenShot',
    },
    modalTechs: ['HTML', 'CSS', 'JS', 'Webpack'],
    technologies: ['HTML', 'CSS', 'JS', 'Webpack'],
    links: {
      live: 'https://evillaz.github.io/LIVE-TV-SHOWS/dist/',
      source: 'https://github.com/evillaz/LIVE-TV-SHOWS',
    },
    background: { desktop: 'bg3' },
  },
  {
    id: 'card4',
    name: 'ROCKROLL HALL OF FAME',
    description: 'ROCK & ROLL HALL OF FAME is a responsive website project with css styling used to present the anually event of ROCK & ROLL HALL OF FAME',
    img: {
      src: './screenshots/r-r-hall-of-fame.png',
      alt: 'ROCK & ROLL HALL OF FAME snapshot',
    },
    modalTechs: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://evillaz.github.io/ROCK-ROLL-HALL-OF-FAME-2023/home.html',
      source: 'https://github.com/evillaz/ROCK-ROLL-HALL-OF-FAME-2023',
    },
    background: { desktop: 'bg4' },
  },
  {
    id: 'card5',
    name: 'Math Magicians',
    description: 'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations, Read a random math-related quote.',
    img: {
      src: './screenshots/math.png',
      alt: 'Math Magicians snapshot',
    },
    modalTechs: ['HTML', 'CSS', 'JS', 'React'],
    technologies: ['HTML', 'CSS', 'JS', 'React'],
    links: {
      live: 'https://mathmag.onrender.com/',
      source: 'https://github.com/evillaz/mathmagicians',
    },
    background: { desktop: 'bg5' },
  },
  {
    id: 'card6',
    name: 'To-do List',
    description: '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    img: {
      src: './screenshots/toDoListScreenShot.png',
      alt: 'To-Do List ScreenShot',
    },
    modalTechs: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://evillaz.github.io/to-do-lst/toDoList/dist/',
      source: 'https://github.com/evillaz/to-do-lst',
    },
    background: { desktop: 'bg6' },
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
  firstCardContainer.id = 'to-doList';

  const firstImg = document.createElement('img');
  firstImg.className = 'placeHolder';
  firstImg.id = 'placeholderMP';
  firstImg.src = card.img.src;
  firstImg.alt = 'To-Do List ScreenShot';

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
                <button class="button cardButtons">
                  <a class="modalLinks" href="${info.links.live}">
                    <span>See Live</span>
                    <img src="icons/IconLive.svg" alt="Live" />
                  </a>
                </button>
              </div>
              <div>
                <button class="button cardButtons">
                  <a class="modalLinks" href="${info.links.source}">
                    <span>See Source</span>
                    <img src="icons/IconSource.svg" alt="Source" />
                  </a>
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

  if (isNotValid) {
    submitButton.setCustomValidity(
      `You should only use lowercase in the email field!!!\nLike: ${email.value.toLowerCase()}`,
    );
  } else submitButton.setCustomValidity('');
}

email.addEventListener('input', () => {
  validateEmail();
});

form.addEventListener('submit', () => {
  validateEmail();
});
