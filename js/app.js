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

  //portfolio
  $(document).ready(function(){
  $(".portfolio-box-1").mouseenter(function(){
    $(".description-1").show(200);
  });
  $(".portfolio-box-1").mouseleave(function() {
    $(".description-1").hide(1000);
  });
});

$(document).ready(function(){
  $(".portfolio-box-2").mouseenter(function(){
    $(".description-2").show(200);
  });
  $(".portfolio-box-2").mouseleave(function() {
    $(".description-2").hide(1000);
  });
});
$(document).ready(function(){
  $(".portfolio-box-3").mouseenter(function(){
    $(".description-3").show(200);
  });
  $(".portfolio-box-3").mouseleave(function() {
    $(".description-3").hide(1000);
  });
});
$(document).ready(function(){
  $(".portfolio-box-4").mouseenter(function(){
    $(".description-4").show(200);
  });
  $(".portfolio-box-4").mouseleave(function() {
    $(".description-4").hide(1000);
  });
});
$(document).ready(function(){
  $(".portfolio-box-5").mouseenter(function(){
    $(".description-5").show(200);
  });
  $(".portfolio-box-5").mouseleave(function() {
    $(".description-5").hide(1000);
  });
});
$(document).ready(function(){
  $(".portfolio-box-6").mouseenter(function(){
    $(".description-6").show(200);
  });
  $(".portfolio-box-6").mouseleave(function() {
    $(".description-6").hide(1000);
  });
});
$(document).ready(function(){
  $(".portfolio-box-7").mouseenter(function(){
    $(".description-7").show(200);
  });
  $(".portfolio-box-7").mouseleave(function() {
    $(".description-7").hide(1000);
  });
});
$(document).ready(function(){
  $(".portfolio-box-8").mouseenter(function(){
    $(".description-8").show(200);
  });
  $(".portfolio-box-8").mouseleave(function() {
    $(".description-8").hide(1000);
  });
});


//form validation
$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    let name = $("#b_name").val();
    let email = $("#b_email").val();
    let message = $("#b_comment").val();
    let error = $(".result").addClass("alert alert-danger");
    let success = $(".result").addClass("alert alert-success");

    if (name == "") {
      error.html("Please enter your name");
    } else if (email == "") {
      error.html("Please enter your email");
    } else if (message == "") {
      error.html("Please enter a message");
    } else {
      success.html(
        `Hi, ${name}. We've recieved your message. Thanks `
      );
    }
  });
});