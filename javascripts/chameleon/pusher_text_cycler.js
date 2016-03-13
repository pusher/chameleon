(function ($) {
  'use strict';
  $.fn.pusherTextCycler = function(options) {

    var self = this;

    self._ = 'pusherTextCycler';

    self.defaults = {
      speed: 100,
      typingSpeed: 50,
      delayBeforeErase: 3000,
      class: 'cycle',
      backgroundColor: '#f7f7f7',
      highlightColor: '#b4d5fe'
    }

    self.$context = self;
    self.options = {};
    self.options = $.extend({}, self.defaults, options);

    self.init = function() {
      self.caption = self.options.text[0];
      self.captionLength = 0;
      self.options.text.push(self.options.text.shift());
      
      self.type();
    }
    
    self.type = function() {
      self.$context.html(self.caption.substr(0, self.captionLength++)).css({'background-color':self.options.backgroundColor});
      
      if(self.captionLength < self.caption.length+1) {
        setTimeout(function() {
          self.type();
        }, self.options.typingSpeed);
      } else {        
        setTimeout(function() {
          self.erase();
        }, self.options.delayBeforeErase);
      }
    }
    
    self.erase = function() {
      self.$context.css({'background-color': self.options.highlightColor});
      setTimeout(function() {
        self.$context.html(self.caption.substr(0, 0));
        self.captionLength = 0;
        self.caption = '';
      }, 500);
      
      setTimeout(function() {
        self.init();
      }, 600);
    }

    return self.init();
  }

})(jQuery);