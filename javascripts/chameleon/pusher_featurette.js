(function ($) {
  'use strict';
  $.fn.pusherFeaturette = function(options) {

    var self = this;

    self._ = 'pusherFeaturette';

    self.defaults = {
      speed: 100
    }

    self.$context = self;
    self.options = {};
    self.options = $.extend({}, self.defaults, options);
    self.navList = self.$context.find('[data-cycle-nav]');

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
      .find("[data-cycle-container].current")
      .removeClass('current');

      self.navList
      .find("[data-cycle].current")
      .removeClass('current');
    }
    
    self.addCurrent = function(nextItemToShow) {
      self.$context
      .find("[data-cycle-container][data-cycle='" + nextItemToShow + "']")
      .addClass("current");

      self.navList
      .find("[data-cycle='" + nextItemToShow + "']")
      .addClass("current");
    }

    return self.init();
  }

})(jQuery);