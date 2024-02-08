window.onload = function () {
    let item = document.querySelectorAll('.item-wrapper')

    item.forEach((items) => {
        items.addEventListener('click', () => {

            let content = items.nextElementSibling;

            if (content.style.maxHeight) {
                document.querySelectorAll('.chart').forEach((items) => {
                    items.style.maxHeight = null;
                })

            } else {
                document.querySelectorAll('.chart').forEach((items) => {
                    items.style.maxHeight = null;
                    content.style.maxHeight = content.scrollHeight + 'px';
                })
            }
        })
    })




}