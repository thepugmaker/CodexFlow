# Writing Markdown

Writing the markdown here is like any other markdown for any other platform. <br>
The markdown here allows very similar markdown to Github. <br>
Example of what our renderer can do <br>
https://remarkjs.github.io/react-markdown/ <br>
###### We also use rehype-raw, and remark-gfm for rendering <br>

### Example of some markdown <br>
###### This isn't the true README.md this could be old or wrong or missing info go check the real README.md at the root of this project
```markdown 
# CodexFlow
### **Another documentation software** 
*Entirely built in Typescript*

![GitHub Release](https://img.shields.io/github/v/release/thepugmaker/CodexFlow?include_prereleases)

**Why use this over anything else?** <br>
It's just git cloning, then drag and dropping, and then changing a few lines of config code <br>
and it's simple to change everything is either its own component or page, <br>
I'm aiming to make the documentation source super easy to edit. <br>
Already made for you, this is public anyone can use this which means <br>
you don't have to make it yourself or use a different service thats heavier or more complex <br>

## How to use
You put your markdown docs in /md and it will auto load everything on it's own. <br>
Then you'll want to change config.json which is in the same directory as this README.md. <br>
You'll also want to delete all the examples cause this is also the entire website to our documentation. <br>

**This is how you'll start**
bash
git clone https://github.com/thepugmaker/CodexFlow.git
cd CodexFlow
npm install

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
Please check out [react-markdown](https://remarkjs.github.io/react-markdown/)'s way of creating markdown as their the library that runs this website. <br>
or even use this README as a guide, As this is the main way I've tested.

## TODO list
- [ ] Logo
- [ ] Move on to next page in list
- [ ] Add date edited
- [ ] Search
- [ ] Mutiple Docs in one site
- [ ] Categories 

## Plans/TODO for future
*This is not in order* <br>
- [ ] Fork react-markdown and add features to help CodexFlow (Fork Plans)
- [ ] Better config editing
- [ ] Everything can be changed in the one config.json
- [ ] Fix for mutiple devices

I plan to start the fork after I release the first version of this.

Fork plans are gonna be in their own ForkPlans.md

## Common Issues
- empty
### Issue title
How to fix it

## Servers

Run the development server:

bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

or Run the production server:
bash
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


**I haven't tested yarn, pnpm, or bun at this point only npm**
```
# Other features

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Line
___

---

***

## Emphasis

**This is bold text** <br>
__This is bold text__ <br>
*This is italic text* <br>
_This is italic text_ <br>
~~Strikethrough~~ <br>


## Lists

- Test1
- Test2
- 3
- 4
- 5 

Numbed

1. Test
2. Test2
3. Test3


1. 4
1. 5

Number with offset:

57. 1
1. 2


## Code

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block Code full

```
Sample text here...
```

```markdown

```typescript
function foobar() {
    do.something();
}
end with ```

```
Remove the end with and just have the 3 **```** 's and your good

## Tables

| Title | Description |
| ------ | ----------- |
| foo   | def |
| bar | returns 1 |
| foobar | returns 2 |

Right aligned columns

| Title  | Description |
| ------:| -----------:|
| Foo    | def |
| Bar    | returns 1 |
| foobar | returns 2 |


## Links

[link text](https://codexflow.mrpugpug.com)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

### [Footnotes]

Footnote 1 link[^first].

Footnote 2 link[^second].

___

---

***

### Helpful sources to know what was wrong <br>
- https://markdown-it.github.io/
<br>
### Markdown features to add <br>
- Horizontal lines
- Typographic replacements 
- Blockquotes
- Fix inline code 
- Fix images
- Emojis
- Definition lists
- Containers
- Footnotes
- Subscript / Superscript
###### HTML Tags that aren't supported in this markdown
```html
- <ins>
- <mark>
```