/**
 * header.js
 *
 * Manage menus
 * 
 * Student Name: 
 * Student ID: 
 * Date: 
 */
// highlight current menu
function initMenuStatus() {
  if (location.pathname === '/') {
    window.location.href = "homepage";
  }
  let pathname = location.pathname.split('/')[1]
  $(`#${pathname}`).addClass('menu-focus')
} 

initMenuStatus()

// Cannot access bussinessContact Page without logging in
function showSafeArea() {
  if (!localStorage.getItem("userInfo")) {
    //$('#bussinessContact').hide()
    $('#logout').html('Login')
  }
}
showSafeArea()

// every menu's click event
$("#logout").click(() => {
  window.location.href = "login";
  localStorage.removeItem("userInfo");
});

$("#homepage").click(() => {
  window.location.href = "homepage";
});
$("#aboutme").click(() => {
  window.location.href = "aboutme";
});
$("#projects").click(() => {
  window.location.href = "projects";
});
$("#services").click(() => {
  window.location.href = "services";
});
$("#contactMe").click(() => {
  window.location.href = "contactMe";
});
$("#bussinessContact").click(() => {
  window.location.href = "bussinessContact";
});


