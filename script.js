/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-08-06 09:56:15
 * @LastEditors: jianguo
 * @LastEditTime: 2022-08-07 13:38:49
 */
const ACTIVE = 'active';

const main_box = document.querySelector('.main-box')
const active_video = document.querySelectorAll('.main-box .content video');
const menu_logo = document.querySelector('.main-box header .menu-logo')
const main_header_h1 = document.querySelector('.main-box .content .text-description h1')
const main_header_h2 = document.querySelector('.main-box .content .text-description h2')
const main_header_p = document.querySelector('.main-box .content .text-description p')
const main_header_a = document.querySelector('.main-box .content .text-description a')
const menu_button = document.querySelectorAll('.aside-menu a')
const video = document.querySelector('.main-box .content .video-overlay')



active_video[0].classList.remove(ACTIVE)
active_video[0].classList.add(ACTIVE)
video.className='video-overlay video-overlay-island'




main_header_h1.innerHTML = CONTENT_INFO.island.h1
main_header_h2.innerHTML = CONTENT_INFO.island.h2
main_header_p.innerHTML = CONTENT_INFO.island.p
main_header_a.innerHTML = 'EXPLORE'

menu_logo.addEventListener('click', () => {
    menu_logo.classList.toggle(ACTIVE)
    main_box.classList.toggle(ACTIVE)
})

menu_button.forEach((item, index) => {
    item.addEventListener('click', () => {
        active_video.forEach((video) => {
            video.classList.remove(ACTIVE)
        })
        active_video[index].classList.add(ACTIVE)
        selectColor(index)
    })
    
})
function selectColor(index) {
    switch (index) {
        case 0:
            main_header_h1.innerHTML = CONTENT_INFO.island.h1
            main_header_h2.innerHTML = CONTENT_INFO.island.h2
main_header_p.innerHTML = CONTENT_INFO.island.p
            video.className='video-overlay video-overlay-island'
            break;
        case 1:
            main_header_h1.innerHTML = CONTENT_INFO.spring.h1
            main_header_h2.innerHTML = CONTENT_INFO.spring.h2
main_header_p.innerHTML = CONTENT_INFO.spring.p
            video.className='video-overlay video-overlay-spring'

            break;
        case 2:
            main_header_h1.innerHTML = CONTENT_INFO.summer.h1
            main_header_h2.innerHTML = CONTENT_INFO.summer.h2
main_header_p.innerHTML = CONTENT_INFO.summer.p
            video.className='video-overlay video-overlay-summer'

            break;
        case 3:
            main_header_h1.innerHTML = CONTENT_INFO.autumn.h1
            main_header_h2.innerHTML = CONTENT_INFO.autumn.h2
main_header_p.innerHTML = CONTENT_INFO.autumn.p
            video.className='video-overlay video-overlay-autumn'

            break;
        case 4:
            main_header_h1.innerHTML = CONTENT_INFO.winter.h1
            main_header_h2.innerHTML = CONTENT_INFO.winter.h2
main_header_p.innerHTML = CONTENT_INFO.winter.p
            video.className='video-overlay video-overlay-winter'

            break;
    }
}