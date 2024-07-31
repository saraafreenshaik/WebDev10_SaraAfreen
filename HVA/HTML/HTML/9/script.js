document.getElementById('toggle').addEventListener('click', function() {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        if (article.style.display === 'none') {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
