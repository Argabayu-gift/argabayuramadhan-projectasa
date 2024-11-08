document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        alert("Navigasi ke " + event.target.innerText);
    });
});