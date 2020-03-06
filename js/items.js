{
    var elements = document.querySelectorAll('.item-info p');
    elements.forEach(cur => {
        if (cur.textContent.length > 200) 
            cur.textContent = cur.textContent.slice(0, 200) + '...';
    })
}