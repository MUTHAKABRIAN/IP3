//design
$(document).ready(function(){
  $("#design").click(function(){
    $("#design-text").show(300);
    $(this).hide();
  });

$("#design-text").click(function(){
  $("#design").show(200);
  $(this).hide();
});
});

//development
$(document).ready(function(){
  $("#development").click(function(){
    $("#development-text").show(300);
    $(this).hide();
  })
  $("#development-text").click(function(){
    $("#development").show(200);
    $(this).hide();
  });
  });

  //product
  $(document).ready(function(){
    $("#product").click(function(){
      $("#product-text").show(300);
      $(this).hide();
    })
    $("#product-text").click(function(){
      $("#product").show(200);
      $(this).hide();
    });
  });