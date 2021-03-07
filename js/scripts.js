function Quote(quoteText, author, tags, color) {
	this.quote = quoteText;
	this.author = author;
	this.tags = tags;
	this.color = color;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color)
		container.addClass("quote")

		var quoteString = "";
		//use image tag instead of paragraph
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite>";
	
		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}
//imgs use URL. so how to add url to this
var quotes = [
	new Quote('"We don\'t make mistakes, just happy little accidents."',"Bob Ross",["painting", "mistakes"],"#0a3410"),
	new Quote('"Creativity takes courage"',"- Henry Matisse", ["painting", "creativity"], "lightblue")
]

//global taglist
var tagList = []

quotes.forEach(function(quote){
	quote.display();
	quote.tags.forEach(function(tag){
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

	$("." + tag).fadeIn();
	$(".quote").not("." + tag).hide();

//remove class active resets the buttons to not show the styling for active button
	$(".filter").removeClass("active")
	$(this).addClass("active")
})