Ext.define('MyApp.view.Main', {
  extend: 'Ext.container.Container',
  requires: [
    'Ext.tab.Panel',
    'Ext.layout.container.Border',
    'MyApp.view.SearchPanel',
    'MyApp.view.ResultsPanel'
  ],

  xtype: 'app-main',

  layout: {
    type: 'border'
  },

  items: [{
    region: 'west',
    xtype: 'searchpanel',
    title: 'Search Flickr',
    width: 300
  }, {
    region: 'center',
    xtype: 'resultspanel',
    title: 'Results',
    id: 'resultsPanel'
  }]
});