function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function showhide(element, id) {
    document.querySelectorAll('.multi-menu').forEach(el => {
        el.style.background = 'none';
    });
    element.style.background = 'red';
    document.querySelectorAll('.todos').forEach(el => {
        el.style.visibility = 'hidden';
        el.style.display = 'none';
    });
    document.querySelectorAll('.' + id).forEach(el => {
        el.style.visibility = 'visible';
        el.style.display = 'block';
    });
    return false;
}

// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebutton")[0];
var span1 = document.getElementsByClassName("closebutton")[1];

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "block";
    document.getElementById("mySidebar").style.width = "0";
}

function openModal1() {
    modal1.style.display = "block";
    document.getElementById("mySidebar").style.width = "0";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}