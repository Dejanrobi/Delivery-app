/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/Js/main.js":
/*!***************************!*\
  !*** ./public/Js/main.js ***!
  \***************************/
/***/ (() => {

eval("/*=============== SHOW MENU ===============*/\r\nconst showMenu = (toggleId, navId) =>{\r\n    const toggle = document.getElementById(toggleId),\r\n    nav = document.getElementById(navId)\r\n    \r\n    // Validate that variables exist\r\n    if(toggle && nav){\r\n        toggle.addEventListener('click', ()=>{\r\n            // We add the show-menu class to the div tag with the nav__menu class\r\n            nav.classList.toggle('show-menu')\r\n        })\r\n    }\r\n}\r\nshowMenu('nav-toggle','nav-menu')\r\n\r\n\r\n/*=============== REMOVE MENU MOBILE ===============*/\r\nconst navLink = document.querySelectorAll('.nav__link')\r\n\r\nfunction linkAction(){\r\n    const navMenu = document.getElementById('nav-menu')\r\n    // When we click on each nav__link, we remove the show-menu class\r\n    navMenu.classList.remove('show-menu')\r\n}\r\nnavLink.forEach(n => n.addEventListener('click', linkAction))\r\n\r\n\r\n//=====================SCROLL SECTION'S ACTIVE LINK ============================\r\nconst sections = document.querySelectorAll('section[id]')\r\n\r\nfunction scrollActive(){\r\n    const scrollY = window.pageYOffset\r\n\r\n    sections.forEach(current =>{\r\n        const sectionHeight = current.offsetHeight,\r\n              sectionTop = current.offsetTop - 50,\r\n              sectionId = current.getAttribute('id')\r\n\r\n        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){\r\n            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')\r\n        }else{\r\n            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')\r\n        }\r\n    })\r\n}\r\nwindow.addEventListener('scroll', scrollActive)\r\n\r\n\r\n//===================CHANGE BACKGROUND HEADER===========================\r\nfunction scrollHeader(){\r\n    const header = document.getElementById('header')\r\n    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag\r\n    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')\r\n}\r\nwindow.addEventListener('scroll', scrollHeader)\r\n\r\n\r\n//====================SHOW SCROLL UP ==============================\r\nfunction scrollUp(){\r\n    const scrollUp = document.getElementById('scroll-up');\r\n    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class\r\n    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')\r\n}\r\nwindow.addEventListener('scroll', scrollUp)\r\n\r\n\r\n//================DARK LIGHT THEME======================================\r\nconst themeButton = document.getElementById('theme-button')\r\nconst darkTheme = 'dark-theme'\r\nconst iconTheme = 'bx-toggle-right'\r\n\r\n// Previously selected topic (if user selected)\r\nconst selectedTheme = localStorage.getItem('selected-theme')\r\nconst selectedIcon = localStorage.getItem('selected-icon')\r\n\r\n// We obtain the current theme that the interface has by validating the dark-theme class\r\nconst getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'\r\nconst getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'\r\n\r\n// We validate if the user previously chose a topic\r\nif (selectedTheme) {\r\n  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark\r\n  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)\r\n  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)\r\n}\r\n\r\n// Activate / deactivate the theme manually with the button\r\nthemeButton.addEventListener('click', () => {\r\n    // Add or remove the dark / icon theme\r\n    document.body.classList.toggle(darkTheme)\r\n    themeButton.classList.toggle(iconTheme)\r\n    // We save the theme and the current icon that the user chose\r\n    localStorage.setItem('selected-theme', getCurrentTheme())\r\n    localStorage.setItem('selected-icon', getCurrentIcon())\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvSnMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVsaXZlcnktYXBwLy4vcHVibGljL0pzL21haW4uanM/MGVmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PSBTSE9XIE1FTlUgPT09PT09PT09PT09PT09Ki9cclxuY29uc3Qgc2hvd01lbnUgPSAodG9nZ2xlSWQsIG5hdklkKSA9PntcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZ2dsZUlkKSxcclxuICAgIG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hdklkKVxyXG4gICAgXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGF0IHZhcmlhYmxlcyBleGlzdFxyXG4gICAgaWYodG9nZ2xlICYmIG5hdil7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgLy8gV2UgYWRkIHRoZSBzaG93LW1lbnUgY2xhc3MgdG8gdGhlIGRpdiB0YWcgd2l0aCB0aGUgbmF2X19tZW51IGNsYXNzXHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuc2hvd01lbnUoJ25hdi10b2dnbGUnLCduYXYtbWVudScpXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT0gUkVNT1ZFIE1FTlUgTU9CSUxFID09PT09PT09PT09PT09PSovXHJcbmNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19saW5rJylcclxuXHJcbmZ1bmN0aW9uIGxpbmtBY3Rpb24oKXtcclxuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LW1lbnUnKVxyXG4gICAgLy8gV2hlbiB3ZSBjbGljayBvbiBlYWNoIG5hdl9fbGluaywgd2UgcmVtb3ZlIHRoZSBzaG93LW1lbnUgY2xhc3NcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tZW51JylcclxufVxyXG5uYXZMaW5rLmZvckVhY2gobiA9PiBuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlua0FjdGlvbikpXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT1TQ1JPTEwgU0VDVElPTidTIEFDVElWRSBMSU5LID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2lkXScpXHJcblxyXG5mdW5jdGlvbiBzY3JvbGxBY3RpdmUoKXtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKGN1cnJlbnQgPT57XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IGN1cnJlbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgIHNlY3Rpb25Ub3AgPSBjdXJyZW50Lm9mZnNldFRvcCAtIDUwLFxyXG4gICAgICAgICAgICAgIHNlY3Rpb25JZCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdpZCcpXHJcblxyXG4gICAgICAgIGlmKHNjcm9sbFkgPiBzZWN0aW9uVG9wICYmIHNjcm9sbFkgPD0gc2VjdGlvblRvcCArIHNlY3Rpb25IZWlnaHQpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tZW51IGFbaHJlZio9JyArIHNlY3Rpb25JZCArICddJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpbmsnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tZW51IGFbaHJlZio9JyArIHNlY3Rpb25JZCArICddJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxpbmsnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFjdGl2ZSlcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT1DSEFOR0UgQkFDS0dST1VORCBIRUFERVI9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gc2Nyb2xsSGVhZGVyKCl7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJylcclxuICAgIC8vIFdoZW4gdGhlIHNjcm9sbCBpcyBncmVhdGVyIHRoYW4gODAgdmlld3BvcnQgaGVpZ2h0LCBhZGQgdGhlIHNjcm9sbC1oZWFkZXIgY2xhc3MgdG8gdGhlIGhlYWRlciB0YWdcclxuICAgIGlmKHRoaXMuc2Nyb2xsWSA+PSA4MCkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1oZWFkZXInKTsgZWxzZSBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhlYWRlcicpXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhlYWRlcilcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09U0hPVyBTQ1JPTEwgVVAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHNjcm9sbFVwKCl7XHJcbiAgICBjb25zdCBzY3JvbGxVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdXAnKTtcclxuICAgIC8vIFdoZW4gdGhlIHNjcm9sbCBpcyBoaWdoZXIgdGhhbiA1NjAgdmlld3BvcnQgaGVpZ2h0LCBhZGQgdGhlIHNob3ctc2Nyb2xsIGNsYXNzIHRvIHRoZSBhIHRhZyB3aXRoIHRoZSBzY3JvbGwtdG9wIGNsYXNzXHJcbiAgICBpZih0aGlzLnNjcm9sbFkgPj0gNTYwKSBzY3JvbGxVcC5jbGFzc0xpc3QuYWRkKCdzaG93LXNjcm9sbCcpOyBlbHNlIHNjcm9sbFVwLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc2Nyb2xsJylcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVXApXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09REFSSyBMSUdIVCBUSEVNRT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLWJ1dHRvbicpXHJcbmNvbnN0IGRhcmtUaGVtZSA9ICdkYXJrLXRoZW1lJ1xyXG5jb25zdCBpY29uVGhlbWUgPSAnYngtdG9nZ2xlLXJpZ2h0J1xyXG5cclxuLy8gUHJldmlvdXNseSBzZWxlY3RlZCB0b3BpYyAoaWYgdXNlciBzZWxlY3RlZClcclxuY29uc3Qgc2VsZWN0ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZC10aGVtZScpXHJcbmNvbnN0IHNlbGVjdGVkSWNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZC1pY29uJylcclxuXHJcbi8vIFdlIG9idGFpbiB0aGUgY3VycmVudCB0aGVtZSB0aGF0IHRoZSBpbnRlcmZhY2UgaGFzIGJ5IHZhbGlkYXRpbmcgdGhlIGRhcmstdGhlbWUgY2xhc3NcclxuY29uc3QgZ2V0Q3VycmVudFRoZW1lID0gKCkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoZGFya1RoZW1lKSA/ICdkYXJrJyA6ICdsaWdodCdcclxuY29uc3QgZ2V0Q3VycmVudEljb24gPSAoKSA9PiB0aGVtZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoaWNvblRoZW1lKSA/ICdieC10b2dnbGUtbGVmdCcgOiAnYngtdG9nZ2xlLXJpZ2h0J1xyXG5cclxuLy8gV2UgdmFsaWRhdGUgaWYgdGhlIHVzZXIgcHJldmlvdXNseSBjaG9zZSBhIHRvcGljXHJcbmlmIChzZWxlY3RlZFRoZW1lKSB7XHJcbiAgLy8gSWYgdGhlIHZhbGlkYXRpb24gaXMgZnVsZmlsbGVkLCB3ZSBhc2sgd2hhdCB0aGUgaXNzdWUgd2FzIHRvIGtub3cgaWYgd2UgYWN0aXZhdGVkIG9yIGRlYWN0aXZhdGVkIHRoZSBkYXJrXHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Rbc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gJ2FkZCcgOiAncmVtb3ZlJ10oZGFya1RoZW1lKVxyXG4gIHRoZW1lQnV0dG9uLmNsYXNzTGlzdFtzZWxlY3RlZEljb24gPT09ICdieC10b2dnbGUtbGVmdCcgPyAnYWRkJyA6ICdyZW1vdmUnXShpY29uVGhlbWUpXHJcbn1cclxuXHJcbi8vIEFjdGl2YXRlIC8gZGVhY3RpdmF0ZSB0aGUgdGhlbWUgbWFudWFsbHkgd2l0aCB0aGUgYnV0dG9uXHJcbnRoZW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gQWRkIG9yIHJlbW92ZSB0aGUgZGFyayAvIGljb24gdGhlbWVcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShkYXJrVGhlbWUpXHJcbiAgICB0aGVtZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKGljb25UaGVtZSlcclxuICAgIC8vIFdlIHNhdmUgdGhlIHRoZW1lIGFuZCB0aGUgY3VycmVudCBpY29uIHRoYXQgdGhlIHVzZXIgY2hvc2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZC10aGVtZScsIGdldEN1cnJlbnRUaGVtZSgpKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkLWljb24nLCBnZXRDdXJyZW50SWNvbigpKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/Js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/Js/main.js"]();
/******/ 	
/******/ })()
;