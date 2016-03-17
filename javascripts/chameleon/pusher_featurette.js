(function ($) {
  'use strict';
  $.fn.pusherFeaturette = function(options) {

    var self = this;

    self._ = 'pusherFeaturette';

    self.defaults = {
      speed: 100,
      // baseClass: 'js-cycle',
      baseClass: 'c-feature-slider'
    }

    self.$context = self;
    self.options = {};
    self.options = $.extend({}, self.defaults, options);
    self.navList = self.$context.find('.' + self.options.baseClass + "__nav");

    self.init = function() {
      self.handlers();
    }
    
    self.handlers = function() {
      self.navList.find('li[data-cycle]').on("click", function() {
        self.removeCurrent();
        self.addCurrent($(this).data("cycle"));
      });
    }

    self.removeCurrent = function() {
      self.$context
      .find("." + self.options.baseClass + "__content ." + self.options.baseClass + "__content__container.current")
      .removeClass('current animating-out');

      self.$context
      .find("." + self.options.baseClass + "__nav li.current")
      .removeClass('current');
    }
    
    self.addCurrent = function(nextItemToShow) {
      self.$context
      .find("." + self.options.baseClass + "__content ." + self.options.baseClass + "__content__container[data-cycle='" + nextItemToShow + "']")
      .addClass("current");

      self.$context
      .find("." + self.options.baseClass + "__nav li[data-cycle='" + nextItemToShow + "']")
      .addClass("current");
    }

    return self.init();
  }

})(jQuery);