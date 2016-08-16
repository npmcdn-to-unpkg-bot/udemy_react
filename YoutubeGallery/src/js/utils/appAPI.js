var Firebase = require('firebase/app');
require("firebase/database"); 
var AppActions = require('../actions/AppActions');

var config = {
	databaseURL: 'https://youtubegallery-d40d5.firebaseio.com/'
}; 
Firebase.initializeApp(config); 

module.exports = {
	saveVideo: function(video){
		console.log('API called...');

		var firebaseRef = Firebase.database().ref('/contacts'); 

		firebaseRef.push(video);		

	}, 

	getVideos: function(){ 

		var firebaseRef = Firebase.database().ref('/contacts'); 

		firebaseRef.once("value", function(snapshot){

			var videos = [];

			snapshot.forEach(function(childSnapshot){

				var video = {
					id: childSnapshot.key, 
					title: childSnapshot.val().title, 
					video_id: childSnapshot.val().video_id,
					description: childSnapshot.val().description 
				}

				videos.push(video); 

				AppActions.receiveVideos(videos); 

			});  

		}); 

	}, 

	removeVideo : function(videoId){
		
		var firebaseRef = Firebase.database().ref('/contacts/' + videoId); 

		firebaseRef.remove(); 


	}
}