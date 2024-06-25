var imgSelector = document.querySelectorAll('.item img');
var imgSelectorArray = Array.from(document.querySelectorAll('.item img'));
var lightContainer = document.querySelector('.light-container');
var containerItem = document.querySelector('.container-item');
var x = document.querySelector('#x');
var Next = document.querySelector('#Next');
var Previous = document.querySelector('#Previous');
var indexOf = 0;

for (var i = 0; i < imgSelector.length; i++) {
    imgSelector[i].addEventListener('click', function (e) {
        indexOf = imgSelectorArray.indexOf(e.target)
        console.log(indexOf)
        lightContainer.classList.replace('d-none', 'd-flex')
        var imgSrc = e.target.getAttribute('src');
        containerItem.style.backgroundImage = `url(${imgSrc})`
    })
}

x.addEventListener('click', function () {
    lightContainer.classList.replace('d-flex', 'd-none')
})

Next.addEventListener('click', function (e) {
    indexOf++;
    if (indexOf == imgSelectorArray.length) {
        indexOf = 0;
    }
    var src2 = imgSelectorArray[indexOf].getAttribute('src');
    containerItem.style.backgroundImage = `url(${src2})`
})

Previous.addEventListener('click', function (e) {
    indexOf -= 1;
    if (indexOf < 0) {
        indexOf = imgSelectorArray.length - 1;
    }
    var src2 = imgSelectorArray[indexOf].getAttribute('src');
    containerItem.style.backgroundImage = `url(${src2})`
})
window.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        indexOf++;
        if (indexOf == imgSelectorArray.length) {
            indexOf = 0;
        }
        var src2 = imgSelectorArray[indexOf].getAttribute('src');
        containerItem.style.backgroundImage = `url(${src2})`
    }
})
window.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowLeft') {
        indexOf -= 1;
        if (indexOf < 0) {
            indexOf = imgSelectorArray.length - 1;
        }
        var src2 = imgSelectorArray[indexOf].getAttribute('src');
        containerItem.style.backgroundImage = `url(${src2})`
    }})