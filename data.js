const data = [
    {
        title: 'Paws, Ears, and Tails',
        description: 'Pets shelter website',
        stack: ['HTML5', 'CSS', 'JavaScript'],
        img: '/images/portfolio/paws-ears-and-tails-shelter.webp',
        thumb: '/images/portfolio/paws-ears-and-tails-shelter_thumb.webp',
        url: 'https://pawsearsandtails.com',
    },
]

const contentWrap = document.querySelector("#content-wrap")
contentWrap.innerHTML = ''
const workCard = document.querySelector("#work-card")

for (let i in data) {
    contentWrap.innerHTML +=
        `<div class="work-item" onClick="showWork(${i})">
            <img src="${data[i].thumb}" alt="${data[i].title}">
            <div class="work-header">${data[i].title}</div>
            <div class="work-desc">${data[i].description}</div>
            <div class="work-stack">${data[i].stack.join(' | ')}</div>
        </div>`
}

for (let i = data.length; i < 4; i++) {
    contentWrap.innerHTML +=
        `<div class="work-item">
            <div class="coming-soon">
                <p>Coming soon</p>
            </div>
            <div class="work-header">Coming soon</div>
            <div class="work-desc"></div>
            <div class="work-stack"></div>
        </div>`
}


function showWork(i) {
    document.querySelector('#black-pad').style.display = 'block'
    document.querySelector('#work-card').style.display = 'block'
    workCard.innerHTML =
        `<div class="close-button" onClick="closeWork()"></div>
        <div id="work-title">
            ${data[i].title}
        </div>
        <div id="work-description">
            ${data[i].description}
        </div>
        <div id="work-stack">
            ${data[i].stack.join(' | ')}
        </div>
        <div id="work-url">
            <a href="${data[i].url}">View site</a>
        </div>
        <div id="work-image">
            <img src="${data[i].img}" alt="${data[i].title + ' ' + data[i].title}">
        </div>`
    document.body.style.overflow = 'hidden'
    const paddingElements = document.querySelectorAll('.add-padding-on-scroll-hide');
    for (i of paddingElements) {
        i.style = 'padding-right: ' + getScrollbarWidth() + 'px;'
    }
}

function closeWork() {
    document.querySelector('#black-pad').style.display = 'none'
    document.querySelector('#work-card').style.display = 'none'
    document.body.style.overflow = 'auto'
    const paddingElements = document.querySelectorAll('.add-padding-on-scroll-hide');
    for (i of paddingElements) {
        i.style = 'padding-right: ' + 20 + 'px;'
    }
}

function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}