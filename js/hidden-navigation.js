/* Filename: hidden-navigation.js */
$(document).ready(function() {
$(".navigation-button").click(function() {
	$(".hidden-navigation-table").show(200);

});
$(".close-navigation").click(function(){closeNav()});

$(".hidden-nav-div").click(function(){closeNav()});
});
function closeNav(){
$(".hidden-navigation-table").hide(200);

}
