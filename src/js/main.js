document.addEventListener('DOMContentLoaded', function() {
    var el = null;
    if (window.innerWidth > 740) {
        el = document.querySelector('.tabs');
        M.Tabs.init(el);
    }
    else {
        el = document.querySelectorAll('.collapsible');
        M.Collapsible.init(el);
    }
});