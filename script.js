const btnmenu = document.getElementById('btnmenu');
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const a = Array.from(document.getElementsByTagName("a"));
const section = Array.from(document.getElementsByClassName("section"));

let callback = entry => {
    entry.forEach(v => {
        if (v.isIntersecting && v.intersectionRatio.toFixed(1) > 0.3) {
            console.log(v)
            v.target.style.transform = "translate(0,0) rotate(0deg)"
            v.target.style.opacity = "1"
        }
    })
}

let options = {
    threshold: [0.1, 0.3, 0.5, 0.8, 1]
}

let observer = new IntersectionObserver(callback, options);

section.forEach(v => {
    observer.observe(v)
    v.style.transform = "translate(0, 75px) rotate(3deg)"
    v.style.opacity = "0";
})

a.forEach(v => {
    v.addEventListener("click", e => {
        state = false;
        menuState(state);
    })
})
let state = false;
let menuState = state => {
    if (state) {
        state = false;
        menu.style.transform = "translateX(0)";
        btnmenu.classList.remove("bx-chevron-down")
        btnmenu.classList.add("bx-chevron-up")
    } else {
        state = true;
        menu.style.transform = `translateX(500px)`;
        btnmenu.classList.add("bx-chevron-down")
        btnmenu.classList.remove("bx-chevron-up")
    }
}

let prev = window.pageYOffset
window.addEventListener("scroll", e => {
    let scroll = window.scrollY;
    if (prev > scroll) {
        navbar.style.opacity = "1";
    } else {
        navbar.style.opacity = "0";
    }

    prev = scroll
})

let navTime;
window.addEventListener("mousemove", e => {
    clearTimeout(navTime);
    navbar.style.opacity = "1";
    navTime = setTimeout(() => {
        navbar.style.opacity = "0"
    }, 3000)
})

btnmenu.addEventListener("click", e => {
    state = !state;
    menuState(state)
})
