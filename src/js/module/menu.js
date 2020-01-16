const header = document.querySelector('header');
const headerButton = header.querySelector('header__menu');
const headerMenuBlock = header.querySelector('header__menu-block');

export function showMenu () {
  headerButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (header.getElementsByClassName('header__menu-block_hidden')) {
      headerMenuBlock.classList.remove('header__menu-block_hidden')
    }
    headerMenuBlock.classList.add('header__menu-block_hidden')
  });
}

