(function ($) {
  Drupal.behaviors.ctoolsBox = {
    attach: function (context, settings) {
      if (context == document) {
        var ctoolsBoxImageClass = settings.ctoolsBoxImageClass;
        $('img.' + ctoolsBoxImageClass).bind('click', function (e) {
          var $largeImage = $('<img>', {
            src: $(this).attr('data-large-image'),
          });
          Drupal.CTools.Modal.show('ctools_box_modal_window');
          $('#modal-title').remove();
          $('#modal-content').html($largeImage);
        });
      }
    }
  }
})(jQuery);