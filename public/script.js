function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const cookie = getCookie('mara_lang');

if (!cookie) {
    document.cookie = "mara_lang=serbian; expires=Thu, 18 Dec 2022 12:00:00 UTC";
}