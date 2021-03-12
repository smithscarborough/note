// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// Used to display the note container on click of plus image button
let renderNoteContainer = function (template, selector) {
    event.preventDefault()
    let node = document.querySelector(selector);
    if (!node) return;
        node.innerHTML = template;
};
let noteContainer = `
<div class="w3-col m12">
                <form action="/notes/api/create" method="POST">
                <div class="w3-card w3-round w3-white">
                    <div class="w3-container w3-padding">
                        <h6 class="w3-opacity">What's on your mind...</h6>
                        <input type="text" placeholder="Write your topic here..." name="category">
                        <div class="text">
                        <textarea name="noteMessage" style="min-width:100%"placeholder="Write your thoughts here..." id="messageBox" rows="8"></textarea>
                        </div>
                        <button id="postButton" type="submit" class="w3-button w3-theme"><i class="fa fa-pencil" onclick="closeNoteContainer()"></i>
                            Create</button>
                    </div>
                </div>
                </form>
            </div>
`

//Used to close the post button after note has been posted and added to database
let closeNoteContainer = function () {
    document.querySelector('#createNoteContainer').style.display = "none";
}

const data = axios.get('/notes/user/allPost')