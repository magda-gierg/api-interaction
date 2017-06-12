
$( document ).ready(function() {
	generate();


function generate(){
  $.ajax({
      url: "https://eda-te-reo.herokuapp.com/api/proverbs"
  }).then(function(data) {
     $('.proverb-source').text(data.source);
     $('.proverb-translation').text(data.translation);
  });
}

$(".button").on( "click", function() {
    generate();
});
});
