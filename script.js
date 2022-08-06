/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-08-06 09:56:15
 * @LastEditors: jianguo
 * @LastEditTime: 2022-08-06 22:06:45
 */
const ACTIVE = 'active';

const main_box = document.querySelector('.main-box')
const active_video = document.querySelectorAll('.main-box .content video');
const menu_logo = document.querySelector('.main-box header .menu-logo')
const main_header_h1 = document.querySelector('.main-box .content .text-description h1')
const main_header_h2 = document.querySelector('.main-box .content .text-description h2')
const main_header_p = document.querySelector('.main-box .content .text-description p')
const main_header_a = document.querySelector('.main-box .content .text-description a')



active_video[0].classList.remove(ACTIVE)
active_video[0].classList.add(ACTIVE)

main_header_h1.innerHTML = CONTENT_INFO.island.h1
main_header_h2.innerHTML = CONTENT_INFO.island.h2
main_header_p.innerHTML = CONTENT_INFO.island.p
main_header_a.innerHTML ='EXPLORE'

menu_logo.addEventListener('click',()=>{
    menu_logo.classList.toggle(ACTIVE)
    main_box.classList.toggle(ACTIVE)
})