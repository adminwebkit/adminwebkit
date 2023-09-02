
document.addEventListener("DOMContentLoaded", function() {

    var menuUsers = document.getElementById('menuUsers');
    var menuPages = document.getElementById('menuPages');

    var collapseUsers = new bootstrap.Collapse(menuUsers, {
        toggle: false,
        show: true,
        hide: true
    });

    var collapsePages = new bootstrap.Collapse(menuPages, {
        toggle: false,
        show: true,
        hide: true
    });

    menuUsers.addEventListener('shown.bs.collapse', event => {
        collapsePages.hide();
    });

    menuPages.addEventListener('shown.bs.collapse', event => {
        collapseUsers.hide();
    });
  
});