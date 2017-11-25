function onStartUp() {
	
	$("div#root").append("<ul><li><span>Сделать задание #3 по web-программированию</span><button>Удалить</button></li> </ul>");
	bindToButton($("li button"));
	$("div#root").append("<input type='text' id='add_task_input'/><button id='add_task'>Add Task</button>");
	$("button#add_task").bind("click", function() {
		$("ul").append("<li><span>" + $("input#add_task_input").val() +"</span><button>Удалить</button></li>");
		bindToButton($("li button").last());
		//bindToButton()
	});	
	console.log("WTF?");

};


function bindToButton(button) {
	button.bind("click", function(event) {
		button.parent().remove();
	});
};

