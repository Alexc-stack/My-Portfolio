/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
const openNav = () => {
    $('#mySidebar').css('width', '250px');
    $('#main').css('margin-left', '250px');
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }