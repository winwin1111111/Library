const myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return {
            title,
            author,
            pages,
            read
        };
    };

}
// var theHobbit = new Book("The e", "IDK", 222, 111);
// var HarryPotter = new Book("Harry Potter", "J. K. Jowling", 333, 222);
// var JaneEyre = new Book("Jane Eyre", "Charlotte Brontë", 483, 366);

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}
// addBookToLibrary(theHobbit);
// addBookToLibrary(HarryPotter);
// addBookToLibrary(JaneEyre);

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');

const unlock = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L21 21M17 10V8C17 5.23858 14.7614 3 12 3C11.0283 3 10.1213 3.27719 9.35386 3.75681M7.08383 7.08338C7.02878 7.38053 7 7.6869 7 8V10.0288M19.5614 19.5618C19.273 20.0348 18.8583 20.4201 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288M19.9998 14.4023C19.9978 12.9831 19.9731 12.227 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.773 10.0269 17.0169 10.0022 15.5977 10.0002M10 10H8.8C8.05259 10 7.47142 10 7 10.0288" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`;
const locksvg = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
const cardsContainer = document.querySelector('.cards-container');
function makeCard(array){
    // for(var i = 0; i < array.length; i++){
        const card = document.createElement("div");
        card.classList.add("cards");
        // card.setAttribute('id', `book-${i}`);
        cardsContainer.appendChild(card);
        const title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = array.title;
        card.appendChild(title);
        const author = document.createElement("h3");
        author.textContent = "Author: ";
        card.appendChild(author);
        const authorName = document.createElement("span");
        authorName.classList.add("author");
        authorName.textContent = array.author;
        author.appendChild(authorName);
        const pagesh3 = document.createElement("h3");
        pagesh3.textContent = "Total pages: ";
        card.appendChild(pagesh3);
        const pages = document.createElement("span");
        pages.classList.add("pages");
        pages.textContent = array.pages;
        pagesh3.appendChild(pages);
        const readh3 = document.createElement("h3");
        readh3.textContent = "Pages read: ";
        card.appendChild(readh3);
        const read = document.createElement("span");
        read.classList.add("read");
        read.textContent = array.read;
        readh3.appendChild(read);
        const lock = document.createElement("span");
        lock.classList.add("lock");
        card.appendChild(lock);
        lock.innerHTML = locksvg;
        const xicon = document.createElement("span");
        xicon.classList.add("xicon");
        xicon.innerHTML = `<svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="white-stroke">
                            <path d="M3 21.32L21 3.32001" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 3.32001L21 21.32" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
        xicon.addEventListener("click", () => {
            cardsContainer.removeChild(card);
        });
        card.appendChild(xicon);



    // }
}





const lock = document.querySelectorAll('.lock');
lock.forEach(element => {
    let isLocked = true;
    element.addEventListener("click", () => {
        if(isLocked){
            element.innerHTML = unlock;
        } else{
            element.innerHTML = locksvg;
        }
        isLocked = !isLocked;
    });
});

const addBtn = document.querySelector('.addingbtn');
addBtn.addEventListener("click", () => {
    const form = document.createElement("form");
    form.classList.add("cards");
    form.setAttribute('id', 'form');
    cardsContainer.appendChild(form);
    form.setAttribute('method', 'post');

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    form.appendChild(titleContainer);

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute('for', 'title');
    titleLabel.setAttribute('id', 'titleLabel');
    titleLabel.textContent = "What's the title?";
    
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('required', 'true');
    titleContainer.appendChild(titleInput);
    titleContainer.appendChild(titleLabel);

    const authorContainer = document.createElement("div");
    authorContainer.classList.add("author-container");
    form.appendChild(authorContainer);
    const authorLabel = document.createElement("label");
    authorLabel.setAttribute('for', 'author');
    authorLabel.setAttribute('id', 'authorLabel');
    authorLabel.textContent = "Author: ";
    authorContainer.appendChild(authorLabel);
    const authorInput = document.createElement("input");
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('name', 'author');
    authorInput.setAttribute('required', 'true');
    authorContainer.appendChild(authorInput);

    const pagesContainer = document.createElement("div");
    pagesContainer.classList.add("pages-container");
    form.appendChild(pagesContainer);
    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.setAttribute('id', 'pagesLabel');
    pagesLabel.textContent = "Total pages: ";
    pagesContainer.appendChild(pagesLabel);
    const pagesInput = document.createElement("input");
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('name', 'pages');
    pagesInput.setAttribute('required', 'true');
    pagesContainer.appendChild(pagesInput);

    const readContainer = document.createElement("div");
    readContainer.classList.add("read-container");
    form.appendChild(readContainer);
    const readLabel = document.createElement("label");
    readLabel.setAttribute('for', 'read');
    readLabel.setAttribute('id', 'readLabel');
    readLabel.textContent = "Pages read: ";
    readContainer.appendChild(readLabel);
    const readInput = document.createElement("input");
    readInput.setAttribute('type', 'number');
    readInput.setAttribute('id', 'read');
    readInput.setAttribute('name', 'read');
    readInput.setAttribute('required', 'true');
    readContainer.appendChild(readInput);

    const xicon = document.createElement("span");
    xicon.classList.add("xicon");
    xicon.innerHTML = `<svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="white-stroke">
                        <path d="M3 21.32L21 3.32001" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 3.32001L21 21.32" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
    form.appendChild(xicon);

    const createButton = document.createElement("button");
    createButton.classList.add("createButton");
    createButton.setAttribute('type', 'submit');
    createButton.textContent = "Create";
    form.appendChild(createButton);

    // var HarryPotter = new Book("Harry Potter", "J. K. Jowling", 333, 222);
    // addBookToLibrary(HarryPotter);
    // makeCard(myLibrary);
    createButton.addEventListener("click", (event) => {
        event.preventDefault();
        var book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
        addBookToLibrary(book);
        makeCard(book);
        console.log(book);
        console.log(myLibrary);
        cardsContainer.removeChild(form);
    });

});




