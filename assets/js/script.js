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
});