var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _searchText = [];

var _results = [];

var AppStore = assign({}, EventEmitter.prototype, {
	setSearchText: function(search){
		_searchText = search.text; 
	},
	setResults: function(results){
		_results = results; 
	},
	getResults: function(){
		return _results; 
	},
	getSearchResults: function(){
		return _searchText; 
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SEARCH_TEXT : 

			AppAPI.searchText(action.search);

			AppStore.setSearchText(action.search); 

			AppStore.emitChange(CHANGE_EVENT); 

			break; 

		case AppConstants.RECEIVE_RESULTS : 

			AppStore.setResults(action.results); 

			AppStore.emitChange(CHANGE_EVENT); 

			break; 

	}

	return true;
});

module.exports = AppStore;