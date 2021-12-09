import slideMenu from './main.js';
import renderVideo from './renderVideo.js';
import menuLink from './menuLink.js';

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',
});

renderVideo();
menuLink();