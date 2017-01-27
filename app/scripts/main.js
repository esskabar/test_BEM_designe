'use strict';
/* global Modernizr */

(function($, undefined){

  $(document).ready(function() {
      $.material.init();
    $('.profile-edit-name__btn').webuiPopover(
      {
        url: '#popover-edit-name',
        width:300,
        placement:'auto-right',
        offsetTop:0,
        offsetLeft:-48,
      });
    $('.profile-edit-site__btn').webuiPopover(
      {
        url: '#popover-edit-site',
        width:300,
        placement:'auto-right',
        offsetTop:0,
        offsetLeft:-48,
      });
    $('.profile-edit-tel__btn').webuiPopover(
      {
        url: '#popover-edit-tel',
        width:300,
        placement:'auto-right',
        offsetTop:0,
        offsetLeft:-48,
      });
    $('.profile-edit-address__btn').webuiPopover(
      {
        url: '#popover-edit-address',
        width:300,
        placement:'auto-right',
        offsetTop:0,
        offsetLeft:-48,
      });

    $('.popover-edit__button-save').click(function (e) {
      $('.profile-edit-name__btn, .profile-edit-site__btn, .profile-edit-tel__btn, .profile-edit-address__btn').webuiPopover('hide');
    });
    $('.popover-edit__button-cancel').click(function (e) {
      $('.profile-edit-name__btn, .profile-edit-site__btn, .profile-edit-tel__btn, .profile-edit-address__btn').webuiPopover('hide');
    });


    $('.profile-edit-all-mob__btn').click(function (e) {
      $('.profile-about_main').fadeOut();
      $('.profile-about_editing').fadeIn();
    });

    $('.profile-about-edit-btn_cancel-mob').click(function (e) {
      $('.profile-about_main').fadeIn();
      $('.profile-about_editing').fadeOut();
    });

    $('.profile-about-edit-btn_save-mob').click(function (e) {
      $('.profile-about_main').fadeIn();
      $('.profile-about_editing').fadeOut();
    });

    $('.form-login').submit(function(){
      var url = "/about.html";
      $(location).attr('href',url);
      return false;
    });

    var pathname = window.location.pathname;
    $('.active').removeClass('active');
    $('.profile-menu__list a[href="'+pathname+'"]').parents('li').addClass('active');
  });

})(jQuery);
