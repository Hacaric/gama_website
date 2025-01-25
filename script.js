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