# <p align='center'> Bulb Notes 📝 </p>
<br>
<br>

## Checklist ✔️


<br>

# requirements 📓
<li>Setup</li>
<li>Express</li>
<li>Nodemon</li>
<li>Sequelize</li>
<li>Authentication</li>
<li>Git</li>
<li>ReadMe</li>


<br>

# Installation 🛠

<br>

<li>npx express-generator --no-view project-name</li>
<li>Nodemon (npm i nodemon, add a dev script)</li>
<li>Install sequelize , pg , and sequelize-cli</li>
 
 <br>

## Setup ✏️
<hr>

<br>

We used our first day to prep an idea we all enjoyed and starting making plans on how the project should go day by day and set goals for each day. We talked together multiple times a day and bounced ideas off each other and helped each other with different issues we were having.

## About Bulb Notes 💡
<hr>

<br>

Bulb Notes is a simple but great website to write any to-do notes or ideas you need to remember for later on. It allow you to catergorize your notes to keep them nice and neat and easy to find. It also allows you to find your most recent notes with just a few scrolls by popping up the most recent notes at the bottom of the page! Bulb Notes is very user friendly and takes no time at all to sign up and start using it instantly!

<br>

## languages Used and technology  💻
<hr>

<br>

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

<br>
<br>

## License
<hr>


* [MIT](https://opensource.org/licenses/MIT)


<br>

## code snipets
<hr>

Here are some examples of us joining multiple tables 
```js 
             <div class="w3-col m2">
                <div class="w3-card w3-round w3-white w3-center">
                    <div class="w3-container bookmarkTitle">
                        <h4>Bookmark</h4>
                        <div class="bookmarkContainer">
                            <form action="/notes">
                                <label for="category">Archive</label>
                                <select name="category" id="category">
                                    ${archives.map((archive) => {
                                        return `
                                    <option value="cat">${archive.title}</option>`
                                </select>
                            </form>
                            <p>${archive.Note.noteMessage}</p>}).join('')}
                        </div>
                    </div>
                </div>
```
```js 
                ${notes.map((note) => {
                    return ` <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
    
                        <span class="w3-right w3-opacity">${note.createdAt}</span>
                        <h4>Bookmark: ${note.category}</h4><br>
                        <hr class="w3-clear">
                        <p>${note.noteMessage}</p>
                        <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-pencil"></i>
                            Edit</button>
                        <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>
                            Delete</button>
                    </div>`
                    }).join('')}
```

<br>

## Group Members 👨‍💻
<hr>

* [Andres Icedo](https://github.com/andresicedo)
* [Smith Scarborough](https://github.com/smithscarborough)
* [Tucker Sheram](https://github.com/tgsher9329)
* [Tyler Hobbs](https://github.com/tylerhobbs94)