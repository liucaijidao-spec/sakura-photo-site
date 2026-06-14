// ハンバーガーメニュー
const hmb = document.querySelector('.js-hmb');
const menu = document.querySelector('.hmb-menu');

if (hmb && menu) {
    hmb.addEventListener('click', () => {
        hmb.classList.toggle('active');
        menu.classList.toggle('active');

        document.body.classList.toggle('is-fixed');
    });

    const menuLinks = document.querySelectorAll('.hmb-menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hmb.classList.remove('active');
            menu.classList.remove('active');

            document.body.classList.remove('is-fixed');
        });
    });
}