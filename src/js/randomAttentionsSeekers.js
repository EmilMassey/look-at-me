jQuery.fn.extend({
    randomAttentionSeekers: function (options) {
        var $ = jQuery;

        var defaults = {
            animations: ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"],
            animationLength: 1000,
            intervals: [2000, 4000, 6000, 8000, 10000],
            classes: "animated",
            animateOnInit: false,
            onAnimationStart: function () { },
            onAnimationEnd: function () { }
        };

        if (typeof options !== 'object') {
            options = {};
        }

        for (var def in defaults) {
            if (!options.hasOwnProperty(def)) {
                options[def] = defaults[def];
            } else if (typeof options[def] === 'object' && !options[def].constructor === Array) {
                for (var deepDef in defaults[def]) {
                    if (!options[def].hasOwnProperty(deepDef)) {
                        options[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }

        var getRandomValue = function (option) {
            if (!option.constructor === Array) {
                return option;
            }

            return option[Math.floor(Math.random() * option.length)]
        };

        var seek = function (t) {
            var randomAnimation = getRandomValue(options.animations);
            var randomInterval = getRandomValue(options.intervals);
            var classCombined = options.classes + " " + randomAnimation;

            t.addClass(classCombined);
            options.onAnimationStart(t, {animation: randomAnimation, interval: randomInterval});

            setTimeout(function () {
                t.removeClass(classCombined);
                options.onAnimationEnd(t, {animation: randomAnimation, interval: randomInterval});
            }, options.animationLength);

            setTimeout(function () {
                seek(t);
            }, randomInterval);
        };

        $(this).each(function () {
            var t = $(this);

            if (options.animateOnInit) {
                seek(t);
            } else {
                setTimeout(function () {
                    seek(t)
                }, getRandomValue(options.intervals));
            }
        });

    }
});
