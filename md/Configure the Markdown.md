# Configure the Markdown

When you want to configure how the markdown views on the sidebar you'll want to use the list.json or you're selected json in "list-json-location": "/md/list.json".
<br>

Once you opened your list <br>
it will read in order of 
###### Example List <br>
###### Do not copy these as you'll want to make your own for your MD's and do not put // in .json as parsers will flag that
```json 
{
    "List": [
        "Introduction.md", // 1
        "Setup.md", // 2
        "How to Config.md", // 3
        "Writing Markdown.md", // 4
        "Configure the Markdown.md" // 5
    ]
}
```
They will render like this
![Sidebar4-23-26](/markdown-images/Sidebar4-23-26.png)
in the exact order you put them in your list json. <br>
The order in the folder of your markdown files do not matter at all.

<br>

That is really all you need to know about the config of the markdown's as it is that simple.