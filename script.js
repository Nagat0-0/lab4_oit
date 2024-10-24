window.onscroll = function() {
    var scrollTopButton = document.getElementById("scrollTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

document.getElementById('scrollTop').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

