// sample

window.addEventListener('DOMContentLoaded', function () {

    // remove default element.
    const $notSuccess = document.getElementById('notSuccess')
    $notSuccess.parentNode.removeChild($notSuccess)

    // show success mark element.
    const $success = document.createElement('div')
    $success.id = 'success'
    $success.innerHTML = `success`
    document.body.appendChild($success);

});