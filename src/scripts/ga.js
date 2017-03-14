(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

ga('create', 'UA-90592256-1', 'auto', 'client');
ga('create', 'UA-26535798-1', 'auto', 'improvemedia');

ga('improvemedia.send', 'pageview');
ga('client.send', 'pageview');

setTimeout(function() {
  ga('improvemedia.send', 'event', 'timer', 'read');
  ga('client.send', 'event', 'timer', 'read');
}, 30000);

$(document).on('click', '.nav-menu-item--360', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'nav-360', 'nav-360');
  ga('client.send', 'event', 'imr_finish', 'nav-360', 'nav-360');
})

$(document).on('click', '.nav-menu-item--plans', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'nav-plans', 'nav-plans');
  ga('client.send', 'event', 'imr_finish', 'nav-plans', 'nav-plans');
})

$(document).on('click', '.nav-menu-item--articles', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'nav-articles', 'nav-articles');
  ga('client.send', 'event', 'imr_finish', 'nav-articles', 'nav-articles');
})

$(document).on('click', '.nav-menu-item--form', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'nav-form', 'nav-form');
  ga('client.send', 'event', 'imr_finish', 'nav-form', 'nav-form');
})

$(document).on('click', '.nav-menu-item--product', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'nav-product', 'nav-product');
  ga('client.send', 'event', 'imr_finish', 'nav-product', 'nav-product');
})

$(document).on('click', '.nav-menu-item--questions', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'nav-questions', 'nav-questions');
  ga('client.send', 'event', 'imr_finish', 'nav-questions', 'nav-questions');
})

$(document).on('click', '.btn-product', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'product', 'product');
  ga('client.send', 'event', 'imr_finish', 'product', 'product');
})

$(document).on('click', '.js-form', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'form_sent', 'form_sent');
  ga('client.send', 'event', 'imr_finish', 'form_sent', 'form_sent');
})

$(document).on('click', '.ga-plans', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'plan-click', 'plan-click');
  ga('client.send', 'event', 'imr_finish', 'plan-click', 'plan-click');
})

$(document).on('click', '.ga-articles', function() {
  ga('improvemedia.send', 'event', 'imr_finish', 'article-click', 'article-click');
  ga('client.send', 'event', 'imr_finish', 'article-click', 'article-click');
})

$(document).on('click', '.header_promo-logo', function() {
  ga('client.send', 'event', 'imr_finish', 'logo-click', 'logo-click');
  ga('improvemedia.send', 'event', 'imr_finish', 'logo-click', 'logo-click');
})

$(document).on('click', '.share-btn__fb', function() {
  ga('client.send', 'event', 'imr_finish', 'share-fb', 'share-fb');
  ga('improvemedia.send', 'event', 'imr_finish', 'share-fb', 'share-fb');
})

$(document).on('click', '.share-btn__ok', function() {
  ga('client.send', 'event', 'imr_finish', 'share-ok', 'share-ok');
  ga('improvemedia.send', 'event', 'imr_finish', 'share-ok', 'share-ok');
})

$(document).on('click', '.share-btn__vk', function() {
  ga('client.send', 'event', 'imr_finish', 'share-vk', 'share-vk');
  ga('improvemedia.send', 'event', 'imr_finish', 'share-vk', 'share-vk');
})

$(window).scroll(function()
{
     if  ($(window).scrollTop() == $(document).height() - $(window).height())
     {
          ga('client.send', 'event', 'imr_finish', 'pageScrolled', 'pageScrolled');
          ga('improvemedia.send', 'event', 'imr_finish', 'pageScrolled', 'pageScrolled');
     }
});
