var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickynotes/collections/notes?apiKey=YeGIq1-QZZtURh3Z9qUoEdT1C5Ecgfeu",
			data: JSON.stringify(note), 
			type: "POST", 
			contentType: "application/json"
		})
	}, 
	getNotes: function(){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickynotes/collections/notes?apiKey=YeGIq1-QZZtURh3Z9qUoEdT1C5Ecgfeu",
			dataType: 'json', 
			cache: false,
			success: function(data){
				AppActions.receiveNotes(data); 
			}.bind(this), 
			error: function(xhr, status, err){
				console.log(err); 
			}.bind(this)			
		})
	}, 
	removeNote: function(noteId){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickynotes/collections/notes/" + noteId + "?apiKey=YeGIq1-QZZtURh3Z9qUoEdT1C5Ecgfeu",
			type: "DELETE", 
			async: true, 
			timeout: 30000, 
			success: function(data){
				console.log('Note Deleted...');
			}.bind(this), 
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		})		
	}
}