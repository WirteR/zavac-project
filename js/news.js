{
    var elements = document.querySelectorAll('.news-text');
    elements.forEach(cur => {
        if (cur.textContent.length > 850) 
            cur.textContent = cur.textContent.slice(0, 850) + '...';
    })
}