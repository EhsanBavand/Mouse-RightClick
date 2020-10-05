var isOpen = false;
function showMyMenu(e) {
  e.preventDefault();
  var menu = document.getElementById('myContextMenu');
  menu.style.left = e.clientX;
  menu.style.top = e.clientY;
  menu.style.display = "block";

  isOpen = true;
}

function myPrint() {
  hideMenu();
  window.print();
}

function hideMenu() {
  document.getElementById('myContextMenu').style.display = "none";
  isOpen = true;
}
function execShortKey(e) {
  //alert(e.keyCode)
  if(isOpen){
    switch (e.keyCode) {
      case 78: window.open(); break;
      case 80: myPrint(); break;
      case 88: hideMenu(); break;
      case 67: window.close();break;
    }
  }
}
