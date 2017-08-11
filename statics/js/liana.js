// mobile menu

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

//Latest News section of the RSS feed
$.ajax({
  url      : "http://www.lianatech.com/news/all-news.rss",
  dataType : 'rss',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
      $.each(data.responseData.feed.entries, function (i, e) {
        console.log("------------------------");
        console.log("title      : " + e.title);
        console.log("author     : " + e.author);
        console.log("description: " + e.description);
      });
    }
  }
});

// 3 column img hover
$(".column-img-animation").on({
    mouseover: function(){
        $(this).stop().animate({opacity: 0.8}, 200);
    },
    mouseout: function(){
        $(this).stop().animate({opacity: 1}, 200);
    }

})

// Clients, Employees and Users sections with animated numbers
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).stop().fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).stop().fadeTo(500,0);}
      }
    });
  }).scroll(); 
});

// email validation

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

function checkEmail() {

    var email = document.getElementById('putEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        $(".validation-fail").html("Please enter a correct e-mail address.");
        $(".validation-fail-m").html("Please enter a correct e-mail address.");
    email.focus;
    return false;
 }
    else{
        $(".validation-fail").html("");
        $(".validation-fail-m").html("");
        modal.style.display = "block";
}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}