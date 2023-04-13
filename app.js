
async function getData(url = '/data.json') {
    const response = await fetch(url);
    const data = await response.json();
    

    return data;
}
class Dashboard {
    constructor(data, container = '.view_selector') {
        this.data = data;
        this.console = document.querySelector(container);
    }
    create() {
        const {name} = this.data;
        const id = name.toLowerCase().replase(/ /g, '-');
        this.container.insertAdjacentHTML('beforeed', `
        <div class="view_selector">
        <div class="card_body">
            <div class="card_title__box">
                <p class="card_title">${name}</p>
            <p class="card_title card_subtitle">язык программирования</p>
            </div>
            <p class="card_text"> Си-подобный язык программирования, в веб разработке занимает основную нишу</p>
            <a href="https://ru.wikipedia.org/wiki/JavaScript" class="card_link" target="_blank">wikipedia link</a>
        </div>
    </div>
        `)
    }
}



const html = document.querySelector('.html');
html.addEventListener('click', function(e){
    let name = e.target.innerHTML

})
const css = document.querySelector('.css');
css.addEventListener('click', function(e){
    console.log(e.target.innerHTML)
})
const JavaScript = document.querySelector('.JavaScript');
JavaScript.addEventListener('click', function(e){
    console.log(e.target.innerHTML)
})
const react = document.querySelector('.react');
react.addEventListener('click', function(e){
    console.log(e.target.innerHTML)
})
const Git = document.querySelector('.Git');
Git.addEventListener('click', function(e){
    console.log(e.target.innerHTML)
})
const Bootstrap = document.querySelector('.Bootstrap');
Bootstrap.addEventListener('click', function(e){
    console.log(e.target.innerHTML)
})
