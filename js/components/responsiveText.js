/*
 * Requires jquery.responsiveText.js
*/


(function() {
  $(function() {
    return $('.responsive').not('table').each(function(index, object) {
      var $this, compression, max, min, scrollReset, scrollTime;

      compression = 10;
      min = 10;
      max = 200;
      scrollTime = 650;
      scrollReset = 200;
      compression = parseFloat($(this).attr('data-compression') || compression);
      min = parseFloat($(this).attr('data-min') || min);
      max = parseFloat($(this).attr('data-max') || max);
      $(object).responsiveText({
        compressor: compression,
        minSize: min,
        maxSize: max
      });
      $this = $(this);
      return $(this).hover((function() {
        var difference;

        difference = $this.get(0).scrollWidth - $this.width();
        if (difference > 0) {
          return $this.stop().animate({
            "text-indent": -difference
          }, scrollTime);
        }
      }), function() {
        return $this.stop().animate({
          "text-indent": 0
        }, scrollReset);
      });
    });
  });

}).call(this);
