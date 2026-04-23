# How to Config

First of all you need how know what they all mean

###### Do not copy this and put it in config.json it will cause errors as json parsers do not like //
```json
{
    "global": { // Everywhere can use this
        "sitename": "CodexFlow", // Name of your documentation
        "sitedescription": "Just some more documentation software", // Description of your documentation
        "background-color": "#121212", // Bg color
        "menubar-color": "#191919", // Title bar/ Menu bar color
        "sidebar-color": "#191919", // Sidebar color which is how you select different pages
        "github-link": "https://github.com/thepugmaker/CodexFlow", /* Link to your docs if you have one, 
        If your repo is public and this is filled with it people 
        can discover it. If its private and you put it here people can not access it but they will know the link. 
        If this is empty it will not show any Github Link anywhere as it's empty */
        "should-github-stuff": true // Shows the stuff to access the Github repo or other parts of the Github relating to the Github Link you put in
    },
    "homepage": { // Only homepage
        "view-docs-button-text": "Get Started" //
    },
    "logging": { // For console.log if any
        "logging-name": "CodexFlow", // Who made the logs?
        "should-log": true // Should anything be console.logged
    },
    "markdown": { // About markdown 
        "md-files-location": "/md", // Location to docs
        "list-json-location": "/md/list.json" // Location to list of docs 
        // Nether of these work currently
    }
}
```
Now you know how the config works. <br>
