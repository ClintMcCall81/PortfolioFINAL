// FILTERED PHOTO GRID
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        } else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })

    // Active on Selection
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})

// Modal Open
let modalBtn = document.querySelectorAll('.modal-open');

modalBtn.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
    };
});

// Close Btn
let closeBtn = document.querySelectorAll('.modal-close');

closeBtn.forEach(function(btn) {
    btn.onclick = function() {
        let modal = (btn.closest(".modal").style.display = "none");
    };
});