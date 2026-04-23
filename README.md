# CodexFlow
### **Another documentation software** 
*Entirely built in Typescript*

![GitHub Release](https://img.shields.io/github/v/release/thepugmaker/CodexFlow?include_prereleases)

**Why use this over anything else?** <br>
It's just git cloning, then drag and dropping, and then changing a few lines of config code <br>
and it's simple to change everything is either its own component or page, <br>
I'm aiming to make the documentation source super easy to edit. <br>

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