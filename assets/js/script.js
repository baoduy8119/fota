$(function () {
    $('.fota-dropdown .fota-toggle').on('click', function () {
        $(this).toggleClass('open')
        $(this).next().toggleClass('show')
    })
    $('.help-text').on('mouseover', function () {
        $(this).next().addClass('show')
    }).on('mouseout', function () {
        $(this).next().removeClass('show')
    })
    $('.toggle-menu').on('click', function () {
        $('.nav-mobile').toggleClass('show')
    })
    $(document).on('click', function closeMenu(e) {
        if ($('.header-inner').has(e.target).length === 0) {
            $('.nav-mobile').removeClass('show');
        }
    })
    $('.layout-select a').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('grid-view')) {
            $('.card-wrapper').removeClass('list-view').addClass('grid-view')
        }
        if ($(this).hasClass('list-view')) {
            $('.card-wrapper').removeClass('grid-view').addClass('list-view')
        }
    })
    $('.toggle-filter').click(function () {
        $(this).closest('.filters').toggleClass('show')
    })
    $('.custom-file-input input[type="file"]').change(function (e) {
        $(this).siblings('input[type="text"]').val(e.target.files[0].name);
    });
    $('.nav-dashboard .nav > li > a').click(function () {
        $(this).toggleClass('active');
    })
    $(document).on('mouseover', '.buy-btn.disabled, .question-icon', function (e) {
        e.preventDefault();
        $('.toast').toast('show')
    });
    var range = $('.range-slider input');
    range.on('input', function (e) {
        var rangeV = $(this).prev('.range-value');
        const newValue = Number(($(this).val() - $(this).attr('min')) * 100 / ($(this).attr('max') - $(this).attr('min')));
        const newPosition = 10 - (newValue * 0.2);
        rangeV.html(`<span>${$(this).val()}</span>`);
        rangeV.css('left', `calc(${newValue}% + (${newPosition}px))`);
    })
    var upgradeStatus = [
        'failedUpgrade',
        'successfulUpgrade'
    ];
    $('.upgrade-btn').on('click', function (e) {
        e.preventDefault()
        $('#animationUpgrade').modal('show');
        $('.upgrade-modal').modal('hide');
        setTimeout(() => {
            var randomStatus = upgradeStatus[Math.floor(Math.random() * upgradeStatus.length)];
            $('#' + randomStatus).modal('show');
            $('#animationUpgrade').modal('hide');
        }, 3000);
    })
    if ($(window).width() < 1400) {
        $('.inventory-item').on('click', function () {
            $('#upgradeModal1').modal('show')
        })
        $('.upgrade-item').on('click', function () {
            $('#upgradeModal2').modal('show')
        })
    }
});