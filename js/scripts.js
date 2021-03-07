	function gameImg(title, url, tags) {
	this.title = title;
	this.url = "imgs/" + url;
	this.tags = tags;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
	
		container.addClass("gameshot")

		var gameString = "";
		//use image tag instead of paragraph
		gameString += "<p>" + this.title + "</p>";
		gameString += "<img src='" + this.url + "</img>";
	
		container.html(gameString)
		$(".gallery").prepend(container)
	}
}

var gallery = [
	new gameImg("Castiel - Guild Wars 2", "cas.jpg'>", ["Characters", "All"]),
	new gameImg("Castiel Silvermist - Elder Scrolls Online", "castiel.png'>", ["Characters", "All"]),
	new gameImg("Valokilorian - Elder Scrolls Online", "valokilorian.png'>", ["Characters", "All"]),
	new gameImg("Valokilorian - Guild Wars 2", "valo.jpg'>", ["Characters", "All"]),
	new gameImg("Cyrodiil", "cyrodiil.png'>", ["ESO", "Landscape", "All"]),
	new gameImg("Elsweyr", "elsweyr.png'>", ["ESO", "Landscape", "All"]),
	new gameImg("Summerset", "summerset.png'>", ["ESO", "Landscape", "All"]),
	new gameImg("Divinity\'s Reach", "divinitysreach.jpg'>", ["GW2", "Landscape", "All"]),
	new gameImg("Lion\'s Arch", "lionsarch.jpg'>", ["GW2", "Landscape", "All"]),
	new gameImg("Metrica", "metrica.jpg'>", ["GW2", "Landscape", "All"])
]

//global taglist
var tagList = []

gallery.forEach(function(gameshot){
	console.log("photos should display");
	gameshot.display();
	gameshot.tags.forEach(function(tag){
		//check to see if the tag has been added to the taglist
		if(!tagList.includes(tag)){
			//if it isn't in the list, add it
			tagList.push(tag);
			//and make a button for it too.
			$(".buttons").prepend("<button class='filter'>" + tag + "</button>")
		}	
	})
});

console.log(tagList)

$(".filter").on("click", function(){
	var tag = $(this).text();
	console.log(tag)

	$("." + tag).show();
	$("div > div").not("." + tag).hide();

//remove class active resets the buttons to not show the styling for active button
	$(".filter").removeClass("active")
	$(this).addClass("active")
})