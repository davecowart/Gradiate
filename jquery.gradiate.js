(function ($) {
    function parseRGB(rgb, multiplier) {
        var values = rgb.match(/\d+/g);
        multiplier = multiplier || 0.8;
        for (var i in values) {
            values[i] = Math.round(values[i] * multiplier);
        }
        return 'rgb(' + values.join(', ') + ')';
    }

    function setGradient(element, startColor, endColor) {
        var $this = $(element);
        $this.css('background', startColor);
        $this.css('background', '-moz-linear-gradient(top, ' + startColor + ' 0%, ' + endColor + ' 99%)');
        $this.css('background', '-webkit-gradient(linear, left top, left bottom, color-stop(0%,' + startColor + '), color-stop(99%,' + endColor + '));');
        $this.css('background', '-webkit-linear-gradient(top, ' + startColor + ' 0%,' + endColor + ' 99%)');
        $this.css('background', '-o-linear-gradient(top, ' + startColor + ' 0%,' + endColor + ' 99%)');
        $this.css('background', 'linear-gradient(to bottom, ' + startColor + ' 0%,' + endColor + ' 99%)');
    }

    $.fn.gradiate = function (multiplier) {
        if ($.browser.msie) {
            return this;
        }
        return this.each(function () {
            var $this = $(this);
            var color = $this.css('background-color');
            var otherColor = parseRGB(color, multiplier);
            setGradient($this, color, otherColor);
        });
    };
})(jQuery);