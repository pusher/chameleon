$(function() {

  $('.c-code__nav__languages li').click(function() {
    $(this).parent().children('.current').removeClass('current');
    $(this).parents('.c-code__nav').siblings('.c-code__content').children(".c-code__content__container.current").removeClass('current');

    var showThis = $(this).data('tab');

    $(this).addClass('current');

    $(this).parents('.c-code__nav').siblings('.c-code__content').children(".c-code__content__container[data-tab='" + showThis + "']").addClass('current');
  });

});