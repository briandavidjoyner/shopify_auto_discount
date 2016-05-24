(function(){

  function set_cookie ($coupon_code_parem,$expires_parem){
    document.cookie = 'cc=' + $coupon_code_parem + '; expires=' + $expires_parem + ';';
  }

  function coupon_from_url (){
    if (window.location.href.indexOf('cc=') > -1){
      var $coupon_code = window.location.href.split('cc=')[1].split('&')[0];
      set_cookie($coupon_code,0);
    } 
  }

  function add_coupon ($coupon_code_parem){
    jQuery('#cart-form').prepend('<div id="coupon_code" style="text-align:center;margin-top:10px;"><h1>Discount Code</h1><input type="text" name="discount" style="color:#6dc01d!important;text-align:center;border-color:gray;"/><p>Discount codes will be applied at check out.</p></div>');
    jQuery('#coupon_code input').val($coupon_code_parem);
  }

  function read_cookie (){
    var $cookie = document.cookie.split(';'),
    $coupon_code = '',
    $cookie_length = $cookie.length;

    for (i=0; i<$cookie_length; i++){
      if ($cookie[i].indexOf('cc=') > -1) {
        $coupon_code = $cookie[i].split('cc=')[1]; 
        add_coupon($coupon_code);
      }
    }
  }

  function cart_page (){
    if (window.location.pathname.indexOf('/cart') > -1){
      read_cookie();
    } else {
      coupon_from_url();
    }
  }

  cart_page();
  
})();







