/*! Lazy Load XT v0.8.6 2013-12-18
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013 RESS.io
 * Licensed under MIT */

(function ($, window) {
$.lazyLoadXT.forceEvent += ' beforeprint';

    if (window.matchMedia) {
        window
            .matchMedia('print')
            .addListener(function (mql) {
                if (mql.matches) {
                    $(window).trigger('beforeprint');
                }
            });
    }

})(window.jQuery || window.Zepto, window);
