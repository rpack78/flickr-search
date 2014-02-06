Ext.define('MyApp.controller.Main', {
	extend: 'Ext.app.Controller',

	requires: [
		// 'Ext.data.JsonP',
		'Ext.data.proxy.JsonP',
		'MyApp.model.Flickr'
	],

	init: function() {

		this.listen({
			component: {
				'searchpanel': {
					searchFlickr: this.onSearchFlickr
				}
			}
		});
	},

	onSearchFlickr: function(component) {
		console.log('got the event');
		var myTags = component.down('#tags').getValue();
		var searchType = component.down('#searchType').getValue();

		var store = Ext.create('Ext.data.Store', {
			model: 'MyApp.model.Flickr',
			autoLoad: true,
			proxy: {
				type: 'jsonp',
				url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + myTags + '&tabmode=' + searchType,
				reader: {
					type: 'json'
					// root: 'items'
				}
			}
		});

		jsonFlickrFeed = function(jsonData) {
			console.log(jsonData);
			Ext.create('Ext.view.View', {

				store: store,

				// itemTpl: '<img src="{media.m}" />',
				itemTpl: 'test',

				// cls: 'movies',
				// itemCls: 'movie',
				// overItemCls: 'over',
				// selectedItemCls: 'selected',

				emptyText: 'No results found',
				renderTo: 'resultsPanel'
			});
		}
	}

});