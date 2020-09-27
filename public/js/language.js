const change_lang = document.querySelector('.change_lang');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

change_lang.addEventListener('click', function () {
    const lang = getCookie('mara_lang');

    if (!lang || lang === 'serbian') {
        document.cookie = "mara_lang=english; expires=Thu, 18 Dec 2022 12:00:00 UTC";
        window.location.reload();
    } else {
        document.cookie = "mara_lang=serbian; expires=Thu, 18 Dec 2022 12:00:00 UTC";
        window.location.reload();
    }
})