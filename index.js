/**
 * Created by hao on 17-2-6.
 */
(function() {
    var app = {
        loaderOnTop: $('.loader.top'),
        searchIcon: $('.search-icon'),
        searchWrapper: $('.search-wrapper'),
        searchInput: $('#q-search'),
        swipeDetect: {
            Fired: false,
            dragging: false,
            direction: null
        }
    };
    app.removeLoader = (function() {
        app.loaderOnTop.removeClass('loading').addClass('done');
        setTimeout(function() {
            app.loaderOnTop.remove();
        },500)
    })();
    app.registerEventListeners = (function() {
        app.searchIcon.click(function() {
            if(app.searchWrapper.toggleClass('focus','').hasClass('focus')) {
                app.searchInput.focus().val('');
            }
        });
        $(document).click(function(e) {
            if(e.target.id!='q-search'&&e.target.className.indexOf('search-icon')<0) {
                app.searchWrapper.removeClass('focus');
            }
        }).
        on('touchstart', function(e) {
            console.log('touchstart!', e)
        }).
        on('touchmove', function(e) {
            console.log('touchmove', e)
        }).
        on(('touchend'), function(e) {
            console.log('touchend', e)
        })
        $('.navigation a').click(function (e) {
            $(this).parent().siblings().find('a').removeClass('picked');
            $(this).addClass('picked');
        })
    })();

})();