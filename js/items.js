{
    var elements = document.querySelectorAll('.item-info p');
    elements.forEach(cur => {
        if (cur.textContent.length > 200) 
            cur.textContent = cur.textContent.slice(0, 200) + '...';
    })
}

submitForms = function(){
    document.getElementById("sorting").submit();
    document.getElementById("filters").submit();
}

parameters = () => {
    var queryString = window.location.search.substr(1);
    var checkedInputs = Object();
    queryString = queryString.split('&');
    queryString.forEach(cur => {
        var checked = cur.split('=');
        if (checked[1] !== '')
            checkedInputs[`${checked[0]}`] = checked[1]
    
    })
    if (checkedInputs[0] === "")
        checkedInputs = Array()
    return(checkedInputs)
}

{
    var params = parameters()
    for (let [key, value] of Object.entries(params)) {
        var elem = document.getElementsByName(key)[0];
        if (elem.tagName == 'SELECT') {
            var childs = elem.children;
            for (let item of childs) {
                if (item.value === value)
                    item.selected = true;
            }
        } else {
            elem.value = value;
        }

    }
}

{
    var select = document.querySelector('#sorting').children;
    for(let elem of select) {
        elem.addEventListener('change', function() {
            if (this.selected) {
                if (!parameters().values().includes(this.value))
                document.getElementById("sorting").submit();
            } else {
                document.getElementById("sorting").submit();
            }
        })
    }
}

function getLastPosition() {
    document.location.reload(true);
}
