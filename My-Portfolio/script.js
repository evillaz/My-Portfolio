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
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Multi-Post Stories snapshot'
    },
    technologies: ['CSS','HTML','Bootstrap','Ruby on rails'],
    links: {
      live: '',
      source: ''
    }
  },
  {
    id: 'card1',
    name: 'Profesional Art Printing Data More',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Profesional Art Printing snapshot'
    },
    technologies: ['HTML','Bootstrap','Ruby on rails'],
    links: {
      live: '',
      source: ''
    }
  },
  {
    id: 'card2',
    name: 'Data Dashboard Healthcare',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Profesional Art Printing snapshot'
    },
    technologies: ['HTML','Bootstrap','Ruby on rails'],
    links: {
      live: '',
      source: ''
    }
  },
  {
    id: 'card3',
    name: 'Website Protfolio',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    img: {
      src: './icons/SnapshootPortfolio.svg',
      alt: 'Profesional Art Printing snapshot'
    },
    technologies: ['HTML','Bootstrap','Ruby on rails'],
    links: {
      live: '',
      source: ''
    }
  },
]

const projectWindow = document.querySelector('.project-preview');

function loadProject() {
  projectInfo.forEach((info) => {
    projectWindow.innerHTML += `
      <div class="projectPreview" data-target="${info.id}">
        <div class="projectHeader">
          <h2>${info.name}</h2>
          <i class="fa fa-close" style="font-size:24px; color:#67798e"></i>
        </div>
        <ul class="technologiesPreview">
          <li>
            ${info.technologies[0]}
          </li>
          <li>
            ${info.technologies[1]}
          </li>
          <li>
            ${info.technologies[2]}
          </li>
        </ul>
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
      projectContainer.style.display = 'flex',
      background.style.filter = 'blur(5px)',
      background.style.overflow = 'hidden';
    const name = project.getAttribute('data-name');
    previewWindow.forEach((preview) => {
      const target = preview.getAttribute('data-target');
      if(name === target) {
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

  }
})

