$(function () {
    $('.fota-dropdown .fota-toggle').on('click', function () {
        $(this).toggleClass('open')
        $(this).next().toggleClass('show')
    })
    $('.help-text')
        .on('mouseover', function () {
            $(this).next().addClass('show')
        })
        .on('mouseout', function () {
            $(this).next().removeClass('show')
        })
    $('.toggle-menu').on('click', function () {
        $('.nav-mobile').toggleClass('show')
    })
    $(document).on('click', function closeMenu(e) {
        if ($('.header-inner').has(e.target).length === 0) {
            $('.nav-mobile').removeClass('show')
        }
    })
    $('.layout-select a').on('click', function (e) {
        e.preventDefault()
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
        $(this).siblings('input[type="text"]').val(e.target.files[0].name)
    })
    $('.nav-dashboard .nav > li > a').click(function () {
        $(this).toggleClass('active')
    })
    $(document).on('mouseover', '.buy-btn.disabled', function (e) {
        e.preventDefault()
        $('.toast').toast('show')
    })
    $(document).on('mouseover', '.question-icon', function (e) {
        e.preventDefault()
        $('.fotaFarming').toast('show')
    })
    $(document).on('click', '.check-in-btn', function (e) {
        e.preventDefault()
        $('.checkInToast').toast('show')
    })
    var range = $('.range-slider input')
    range.on('input', function (e) {
        var rangeV = $(this).prev('.range-value')
        const newValue = Number((($(this).val() - $(this).attr('min')) * 100) / ($(this).attr('max') - $(this).attr('min')))
        const newPosition = 10 - newValue * 0.2
        rangeV.html(`<span>${$(this).val()}</span>`)
        rangeV.css('left', `calc(${newValue}% + (${newPosition}px))`)
    })
    var upgradeStatus = ['failedUpgrade', 'successfulUpgrade']
    $('.upgrade-btn').on('click', function (e) {
        e.preventDefault()
        $('#animationUpgrade').modal('show')
        $('.upgrade-modal').modal('hide')
        setTimeout(() => {
            var randomStatus = upgradeStatus[Math.floor(Math.random() * upgradeStatus.length)]
            $('#' + randomStatus).modal('show')
            $('#animationUpgrade').modal('hide')
        }, 3000)
    })
    if ($(window).width() < 1400) {
        $('.inventory-item').on('click', function () {
            $('#upgradeModal1').modal('show')
        })
        $('.upgrade-item').on('click', function () {
            $('#upgradeModal2').modal('show')
        })
    }
    $('.more-content .load-more').on('click', function () {
        $(this).parent().toggleClass('show')
        if ($(this).parent().hasClass('show')) {
            $(this).html('Less Story')
        } else {
            $(this).html('Full Story')
        }
    })
    $('.land-map .pointer')
        .on('mouseover', function () {
            var imgSrc = $(this).data('src')
            $('.land-map .pointer').removeClass('active')
            $('.land-map img').attr('src', imgSrc)
            $(this).addClass('active')
        })
        .on('click', function () {
            $('html, body').animate(
                {
                    scrollTop: $('#land-summary').offset().top - 100,
                },
                100,
                'swing'
            )
        })
    $.fn.loading = function () {
        var DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000,
            color: 'white',
        }

        $(this).each(function () {
            var $target = $(this)

            var opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration,
                color: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.color,
            }
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>')

            $target.find('.background').css('background-color', opts.backgroundColor)
            $target.find('.left').css('background-color', opts.backgroundColor)
            $target.find('.rotate').css('background-color', opts.progressColor)
            $target.find('.right').css('background-color', opts.progressColor)
            $target.find('div span').css('color', opts.color)

            var $rotate = $target.find('.rotate')
            setTimeout(function () {
                $rotate.css({
                    transition: 'transform ' + opts.duration + 'ms linear',
                    transform: 'rotate(' + opts.percent * 3.6 + 'deg)',
                })
            }, 1)

            if (opts.percent > 50) {
                var animationRight = 'toggle ' + (opts.duration / opts.percent) * 50 + 'ms step-end'
                var animationLeft = 'toggle ' + (opts.duration / opts.percent) * 50 + 'ms step-start'
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1,
                })
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0,
                })
            }
        })
    }
    $('.progress-bar').loading()
})
