Ext.define('MyApp.view.SearchPanel', {
  extend: 'Ext.form.Panel',

  requires: [
    'Ext.form.field.ComboBox'
  ],

  xtype: 'searchpanel',
  bodyPadding: 10,

  submitForm: function() {
    this.getForm().submit({
      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=animals&format=json'
    });
  },

  items: [{
    xtype: 'textfield',
    itemId: 'tags',
    fieldLabel: 'Tags:',
    width: 275,
    name: 'tags'
  }, {
    xtype: 'combo',
    itemId: 'searchType',
    fieldLabel: 'Use Tags:',
    store: [
      ["any", "Any"],
      ["all", "All"]
    ],
    name: 'tagmode',
    value: 'all',
    width: 275
  }],

  buttons: [{
    text: 'Search Public Photos',

    handler: function(button) {
      console.log('event fired');
      this.up('panel').fireEvent('searchFlickr', this.up('panel'));
    }
  }]

});