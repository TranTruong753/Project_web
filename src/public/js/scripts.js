const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

document.addEventListener("DOMContentLoaded", function() {
    const event = new Event('template-loaded');
    window.dispatchEvent(event);
});

/**
 * Hàm kiểm tra một phần tử
 * có bị ẩn bởi display: none không
 */
function isHidden(element) {
    // console.log("Kiểm tra nếu phần tử bị ẩn");
    if (!element) return true;

    if (window.getComputedStyle(element).display === "none") {
        // console.log("Phần tử bị ẩn bởi display: none");
        return true;
    }

    let parent = element.parentElement;
    while (parent) {
        if (window.getComputedStyle(parent).display === "none") {
            // console.log("Phần tử cha bị ẩn bởi display: none");
            return true;
        }
        parent = parent.parentElement;
    }

    return false;
}

/**
 * Hàm buộc một hành động phải đợi
 * sau một khoảng thời gian mới được thực thi
 */
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

/**
 * Hàm tính toán vị trí arrow cho dropdown
 *
 * Cách dùng:
 * 1. Thêm class "js-dropdown-list" vào thẻ ul cấp 1
 * 2. CSS "left" cho arrow qua biến "--arrow-left-pos"
 */
const calArrowPos = debounce(() => {
    // console.log("Chạy hàm calArrowPos");
    const dropdownList = $(".js-dropdown-list");
    if (isHidden(dropdownList)) {
        // console.log("Danh sách dropdown bị ẩn");
        return;
    }

    const items = $$(".js-dropdown-list > li");
    // console.log(`Tìm thấy ${items.length} mục`);
    items.forEach((item) => {
        const arrowPos = item.offsetLeft + item.offsetWidth / 2;
        item.style.setProperty("--arrow-left-pos", `${arrowPos}px`);
        // console.log(`Vị trí mũi tên được đặt ở ${arrowPos}px cho mục`, item);
    });
});

// Tính toán lại vị trí arrow khi resize trình duyệt
// console.log("Đang đính kèm sự kiện resize");
window.addEventListener("resize", calArrowPos);

// Tính toán lại vị trí arrow sau khi tải template
// console.log("Đang đính kèm sự kiện template-loaded");
window.addEventListener("template-loaded", calArrowPos);

/**
 * Giữ active menu khi hover
 *
 * Cách dùng:
 * 1. Thêm class "js-menu-list" vào thẻ ul menu chính
 * 2. Thêm class "js-dropdown" vào class "dropdown" hiện tại
 *  nếu muốn reset lại item active khi ẩn menu
 */
window.addEventListener("template-loaded", handleActiveMenu);

function handleActiveMenu() {
    const dropdowns = $$(".js-dropdown");
    const menus = $$(".js-menu-list");
    const activeClass = "menu-column__item--active";

    const removeActive = (menu) => {
        menu.querySelector(`.${activeClass}`)?.classList.remove(activeClass);
    };

    const init = () => {
        menus.forEach((menu) => {
            const items = menu.children;
            if (!items.length) return;

            removeActive(menu);
            items[0].classList.add(activeClass);

            Array.from(items).forEach((item) => {
                item.onmouseenter = () => {
                    if (window.innerWidth <= 991) return;
                    removeActive(menu);
                    item.classList.add(activeClass);
                };
            });
        });
    };

    init();

    dropdowns.forEach((dropdown) => {
        dropdown.onmouseleave = () => init();
    });
}






