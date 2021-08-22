
(function(){
    
    var buttons = document.querySelectorAll('.btn');
    var storeItems = document.querySelectorAll('.store-item');

    buttons.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            var filter = e.target.dataset.filter;
            
            storeItems.forEach((item)=> {
                if (filter === 'all'){
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

})();

//wire up filter search box
(function(){

    var searchBox = document.querySelector('#search-item');
    var storeItems = document.querySelectorAll('.store-item');

    searchBox.addEventListener('keyup', (e) => {
    
        var searchFilter = e.target.value.toLowerCase().trim();
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

})();