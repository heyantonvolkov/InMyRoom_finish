var $ = require('jquery');


Component.define('addFile', {
  events: {
    'click on %btn': 'startToAddNewFile',
    'click on %delete': 'removeFile',
    'change on %input': 'addNewFile'
  },

  init: function(){
    this.fileNum = 0;
    this.files = $('.files');
    this.parent = $('.file-add');
  },

  startToAddNewFile: function() {
    $('[type=file][num=' + this.fileNum + ']').click();

  },

  addNewFile: function(e, el) {
    var b = $(el).val().split("\\");
    this.val = b[b.length - 1];
    this.files.append('<div class="file">' + this.val + '<div class="file-delete js-addFileDelete" num="' + $(el).attr('num') + '"></div></div>');
    this.files.removeClass('is-empty');

    $('.btn-form').remove();
    this.fileNum += 1;

    this.parent.append('<input class="js-addFileInput" type="file" name="file[]" num="' + this.fileNum + '"><div num="' + this.fileNum + '" class="btn btn-form js-addFileBtn">Добавить фотографию</div>');
  },

  removeFile: function(e, el) {
    var b = $(el).attr('num');
    $(el).parent().remove();
    $('[type=file][num=' + b + ']').remove();
  }
});