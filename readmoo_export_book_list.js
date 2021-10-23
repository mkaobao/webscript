javascript: (function() {
    let createCopyHandler = function(msg) {
        return function(event) {
            event.clipboardData.setData('text', msg);
            event.preventDefault();
        };
    };

    let bookList = document.getElementsByClassName('books')[0].getElementsByClassName('list-group list-group-flush')[0].getElementsByClassName('library-item-info');
    let msg = '';
    for (let i = 0; i < bookList.length; i++) {
        let name = bookList[i].getElementsByClassName('title')[0].innerText;
        let author = bookList[i].getElementsByClassName('author')[0].innerText;
        msg += name + '\t' + author + '\n';
    }

    let handler = createCopyHandler(msg);
    document.addEventListener('copy', handler);
    document.execCommand('copy');
    document.removeEventListener('copy', handler);
}())
