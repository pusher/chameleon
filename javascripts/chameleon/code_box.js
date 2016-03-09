$(function() {

  $('.code-box__nav__languages li').click(function() {
    $(this).parent().children('.current').removeClass('current');
    $(this).parents('.code-box__nav').siblings('.code-box__content').children(".code-box__content__container.current").removeClass('current');

    var showThis = $(this).data('tab');

    $(this).addClass('current');

    $(this).parents('.code-box__nav').siblings('.code-box__content').children(".code-box__content__container[data-tab='" + showThis + "']").addClass('current');
  });

});