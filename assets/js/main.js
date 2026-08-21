'use strict';

{
    $(function(){
        $('.btn-trigger').on('click', function(){
            $('.nav').toggleClass('active');
            $('body').toggleClass('is-menu-open')
        });

        $('.nav__item a').on('click', function(){
            $('.btn-trigger, .nav').removeClass('active');
            $('body').removeClass('is-menu-open')
        });
    });

}

$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});