# CodexFlow
### **Another documentation software** 
*Entirely built in Typescript*

![GitHub Release](https://img.shields.io/github/v/release/thepugmaker/CodexFlow?include_prereleases) 
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/thepugmaker/CodexFlow)

**Why use this over anything else?** <br>
1. Is it very quick to download and start making docs and it's simple to change everything is weather its own component or page. <br>
2. Very simple to edit into your own documentation. <br>
3. This is documentation software made for anyone, it's lightweight and simple despite being featureful. <br>
4. One unified language, Typescript (With a little Javascript, CSS, and JSON for configs) so if you understand Typescript using this documentation software will be no problem. 

## How to use
You put your markdown docs in /md and it will auto load everything on it's own. <br>
Then you'll want to change config.json which is in the same directory as this README.md. <br>
You'll also want to delete all the examples cause this is also the entire website to our documentation. <br>

**This is how you'll start**
```bash
git clone https://github.com/thepugmaker/CodexFlow.git
cd CodexFlow
npm install
```
or you could <br>
Download the source code to the latest stable build, That source code will be in releases on Github.

## What libraries and frameworks?
### Here's the list  
- [Next JS app router](https://nextjs.org/)
- [React JS](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [react-markdown](https://remarkjs.github.io/react-markdown/)
- [rehype-sanitize](https://github.com/rehypejs/rehype-sanitize)

## How do I create markdown for this?
Like any other markdown! <br>
Or even check our (documentation)[https://codexflow.mrpugpug.com/doc?md=Writing%20Markdown.md] for it 

## TODO list
*Not in order* <br>
*Once this todo list is finished and polish is finished then v1.0.0 can be released* <br>
- [ ] Logo <br>
    - Make favicon this logo <br>
- [ ] Move on to next page/category in list button <br>
- [ ] Add date edited <br>
    - In menu bar when in docs and selected md <br>
    - use a prefix like $C=cmdorotherthing <br>
- [ ] Search <br>
    - Search for headings in all docs <br>
- [ ] Mutiple Docs in one site <br>
    - Seperated by folders in md folder <br>
    - Allows like Docs, API, CDN, etc <br>
- [ ] Categories <br>
    - Like category with subdocs
```
List for docs can be like
{
    "List": {
        "guidecategory": [
            "Introduction.md",
            "Setup.md",
            "How to Config.md",
            "Writing Markdown.md",
            "Configure the Markdown.md"
        ],
        "example": [
            "example.md",
            "you get it at this point.md"
        ]
    }
}
```
- [ ] Select one page in the selceted category in category page <br>
    - Kinda like this https://docusaurus.io/docs/category/getting-started 
- [ ] Add Opengraph api <br>
    - Metadata for social sites in layout.tsx <br>
- [ ] Syntax highlighting <br>
    - Code blocks get syntax higlighting <br>
- [ ] Dark and Light mode switching <br>
    - Allows you to switch the docs between light and dark or set it to auto where the user then picks light or dark by choice giving <br>
- [ ] Fork react-markdown and add features to help CodexFlow (Fork Plans) or improve the viewer script <br>
    - The fork might happen but probably not unless I need to change something within it for parsing, I'll either add more to the MarkdownViewer.tsx or build a custom parser to add onto react-markdown <br>
- [ ] Make everything configurable <br>
    - Everything should be allowed to get changed by choice in config.json <br>
- [ ] Error handles for config part not existing or being wrong <br>
    - Handling developer errors + user errors in a safe way <br>
- [ ] Fix for mutiple devices <br>
    - Add mutiple device setup to fix sidebar, menubar, viewer, etc <br>
- [ ] Generate a static site <br>
    - Make this generate a static site so things like Github Pages work with these docs <br>
- [ ] Quickly switch to heading <br>
    - Focus on a certain heading and it's content <br>

I plan to start the fork after I do some of this to do list

Fork plans/Addon are gonna be in their own ForkPlans.md 

## Common Issues
- empty
### Issue title
How to fix it

## Servers

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

or Run the production server:

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
# or
bun build
bun start
```

**I haven't tested yarn, pnpm, or bun at this point only npm**