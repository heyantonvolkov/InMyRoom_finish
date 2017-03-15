var $ = require('jquery');
var data = require('../data/data');

$(document).ready(function() {

// =============================Активация и подстановка данных в слайдеры 

  for (var i = 0; i < data.plans.length; i++) {
    $('#slider-plans').append("<div class='slider_item'><a target='_blank' href=" + data.plans[i].url + " class=\"post-preview ga-plans\"><div class=\"post-preview_pic\"><img src=" + data.plans[i].image + "></div><div class=\"post-preview_title\">" + data.plans[i].title + "</div></a></div>");
  }

  for (var i = 0; i < data.articles.length; i++) {
    $('#slider-articles').append("<div class='slider_item'><a target='_blank' href=" + data.articles[i].url + " class=\"post-preview ga-articles\"><div class=\"post-preview_pic\"><img src=" + data.articles[i].image + "></div><div class=\"post-preview_title\">" + data.articles[i].title + "</div></a></div>");
  }

  $('#slider-plans').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider-articles').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          respondTo: 'min'
        }
      }
    ]
  });

// =============================Подстановка и нарезка блока вопросы
  
  var questionMax = data.questions.length;
  var questions = [];
  var currentQuestion = 0;
  var questionsToView = [];
  var questionStep = 0;

  function setQuestionStep() {
    if (window.innerWidth > 1150) {
      questionStep = 4;
    } else {
      questionStep = 2;
    }
  }

  for (var i = 0; i < data.questions.length; i++) {
    questions.push(data.questions[i]);
  }

  function setQuestionsToView(currentQuestion) {
    if (currentQuestion < questionMax) {
      console.log("1 TRUE");

      if ((questionMax - currentQuestion) < questionStep) {
        console.log("3 TRUE");
        questionsToView = questions.slice(currentQuestion);

        insertQuestions(questionsToView);
        $('.btn-questions').remove();

      } else {
        console.log("2 TRUE");
        questionsToView = questions.slice(currentQuestion, (currentQuestion + questionStep));

        insertQuestions(questionsToView);  
      }
    }
  }

  function insertQuestions(questionsToView) {
    for(var i = 0; i < questionsToView.length; i++) {
      $('.questions').append("<a class='question' href=" + questionsToView[i].url + "><div class='question_pic'><img src=" + questionsToView[i].image + "></div><div class='question_title'>" + questionsToView[i].title + "</div><div class='question_desc'>" + questionsToView[i].desc + "</div></div></a>")
    }
  }

  setQuestionStep();
  setQuestionsToView(currentQuestion);
  currentQuestion += questionStep;

  $('.btn-questions').click(function() {
    setQuestionsToView(currentQuestion);
    currentQuestion += questionStep;

    if (currentQuestion == questionMax) {
      $(this).remove();
    }
  })

// =============================Боковое меню

  $('.nav-menu').mouseover(function() {
    $('.nav-menu').addClass('is-active');
    $('.fade-elem').addClass('is-active');
  });

  $('.nav-menu').mouseout(function() {
    $('.nav-menu').removeClass('is-active');
    $('.fade-elem').removeClass('is-active');
  });

  $('.nav-menu-item').click(function() {
    event.preventDefault();
    $('.nav-menu').removeClass('is-active');
    $('.fade-elem').removeClass('is-active');

    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body, html').animate({scrollTop: top - 125}, 1500);
  });

// =============================Отправка формы

  $('#form').submit(function() {
    event.preventDefault();

    var data = new FormData();

    data.append('name', $('input[name=name]').val());
    data.append('mail', $('input[name=mail]').val());
    data.append('message', $('input[name=message]').val());
    console.log(3);

    $('[type=file]').each(function(i) {
     data.append('file[]', this.files[0]);
    });

    function sendInfo(data) {
      return $.ajax({
        url: 'https://www.inmyroom.ru/promo_api/finish/ask_expert',
        method: 'POST',
        processData: false,
        contentType: false,
        data: data
      });
    }

    function showModal(name) {
      $('.modal-name').html(name + ',');
      $('.fade-elem').addClass('is-active');
      $('.modal').addClass('is-active');
      $('#form').html('<div class="form-container form-container-left"><div class="form-item"><label>Имя</label><input type="text" name="name" placeholder="Как вас зовут?" required="required" class="name"/></div><div class="form-item"><label>E-mail</label><input type="text" name="mail" placeholder="Как с вами связаться?" required="required" class="mail"/></div></div><div class="form-container form-container-right"><div class="form-item textarea"><label>Описание</label><input type="textarea" name="message" required="required" class="text"/></div><div data-component="addFile" class="file-add"><div class="files is-empty"></div><input type="file" name="file[]" num="0" class="js-addFileInput"/><div num="0" class="btn btn-form js-addFileBtn">Добавить фотографию</div><input type="submit" value="Отправить" class="js-form"/></div></div>');
      Component.vitalize();
    }

    var hideModal = function() {
      $('.fade-elem').removeClass('is-active');
      $('.modal').removeClass('is-active');
    }
    var name = $('input[name=name]').val();

    sendInfo(data);
    showModal(name);
    setTimeout(hideModal, 4000);

 })

// =============================Скролл + zoom над панорамой
  

  function activatePanorama() {
    $('.fade-360').addClass('invisible');
    $('.video-360-click').addClass('invisible');
    $('.deactivate').addClass('visible');
  };

  function deactivePanorama() {
    $('.fade-360').removeClass('invisible');
    $('.video-360-click').removeClass('invisible');
    $('.deactivate').removeClass('visible');
  };

  $('.fade-360').click(function() {
    activatePanorama();
  })

  $('.video-360-click').click(function() {
    activatePanorama();
  })

  $('.deactivate').click(function() {
    deactivePanorama();
  })

});