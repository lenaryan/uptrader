document.addEventListener('DOMContentLoaded', function() {
    var el = document.querySelector('.tabs');
    M.Tabs.init(el);
    var elem = document.querySelector('.collapsible');
    M.Collapsible.init(elem);
});

document.addEventListener('DOMContentLoaded', function() {
    var top = document.querySelector('.top');
    var parent = null;
    window.onclick = function(e) {
        parent = e.srcElement.parentElement;
        if (parent.classList.contains('collapsible__item')) {
            if (parent.classList.contains('active')) {
                top.classList.add('bg-peach');
            } else {
                top.classList.remove('bg-peach');
            }
        }
    }​
});