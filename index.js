{
    var elem = document.querySelector('.phone');
    
    elem.addEventListener('click', function () {
        this.classList.toggle('call-me__active');
            this.insertAdjacentHTML('afterbegin', 
                '<form> \
                    <p>Передзвонимо Вам найближчим часом</p> \
                    <input type="text" placeholder="Ваш номер телефону"></input> \
                    <input type="submit" value="Чекаю дзвінка"></input> \
                </form>'
            );      
    })
}