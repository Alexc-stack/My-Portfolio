$(()=>{
    const $btn = $('#menu-btn');
    $btn.on('click', () => {
        const show = $('#menu');
        if (show.style.display === "none") {
            show.style.display = "block";
        } else {
            show.style.display = "none"
        }
    });
    
})