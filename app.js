//We've added a third and final item to our tab panel - scroll down to see it
Ext.application({
    name: 'Sencha',

    launch: function() {
        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: '1st tab',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img width="65%" src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists and forms to create a simple app</p>",
                        '<h2>Sencha Touch (2.0.0pr1)</h2>'
                    ].join("")
                },
                {
                    xtype: 'list',
                    title: '2nd tab',
                    iconCls: 'star',
                    store: {
                        fields: ['title', 'url'],
                        data: [
                            {title: 'Ext Scheduler 2.0', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
                            {title: 'Previewing Sencha Touch 2', url: 'sencha-touch-2-what-to-expect'},
                            {title: 'Sencha Con 2011', url: 'senchacon-2011-now-packed-with-more-goodness'},
                            {title: 'Documentation in Ext JS 4', url: 'new-ext-js-4-documentation-center'}
                        ]
                    },
                    itemTpl: '{title}',
                },
                //this is the new item
                {
                    xtype: 'formpanel',
                    title: '3rd tab',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: '(email address is optional)',
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',
                            handler: function() {
                                this.up('formpanel').submit();
                            }
                        }
                    ]
                }
            ]
        }).setActiveItem(2);
    }
});
