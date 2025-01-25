/*

    Add the following code to the HTML file to include the navbar:
    <script src="include_navbar.js"></script>
    <div id="navbar"></div>

*/

var dropdownMenuIdList = ['dropdown-menu0']
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
function closeDropdown(){
    for (var i = 0; i < dropdownMenuIdList.length; i++){
        if (new Date().getTime() - document.getElementById(dropdownMenuIdList[i]).dataset.lastClick < 100){
            continue;
        }
        var dropdown = document.getElementById(dropdownMenuIdList[i]);
        dropdown.style.display = 'none';
    }
}
function toogleDropdown(){
    for (var i = 0; i < dropdownMenuIdList.length; i++){
        var dropdown = document.getElementById(dropdownMenuIdList[i]);
        if (dropdown.style.display == 'none'){
            dropdown.style.display = 'block';
            dropdown.dataset.lastClick = new Date().getTime();
        }else{
            dropdown.style.display = 'none';
        }
    }
}
function setup() {
    for (var i = 0; i < dropdownMenuIdList.length; i++){
        var dropdown = document.getElementById(dropdownMenuIdList[i]);
        dropdown.style.display = 'none';
        dropdown.dataset.lastClick = 0;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var navbarDiv = document.getElementById("navbar");
    if (navbarDiv) {
         fetch("./navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarDiv.innerHTML = data;
                // Initialize the navbar functions after loading
                setup();
                document.getElementsByTagName("body")[0].addEventListener("click", closeDropdown);
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
});
