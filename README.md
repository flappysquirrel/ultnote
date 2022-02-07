
# Ultnote 
## Quick Start
- Open or create a `.md` document
- Add a cell
- Chose your language in the bottom right
- Run the code and save the document
- The output is now saved to standard Markdown
- Upload to Github to see outputs rendered properly

## Description
Straight nodejs stateless implementation for notebooks with no npm dependencies or external binaries, works with compiled languages.

Rather than using any complicated kernels, it simply spawns a process that runs your local toolchain for the language you're using and returns outputs for all previous cells using the current cell's language.

## Keybindings
You can change keybindings in File > Preferences > Keybindings > search for "ultnote". Or you can run them via command palette typing in "ultnote"

### Search Notes
Press `alt+f` to open a welcome document and get started, `alt+f` will also open search in the `base path` (defaults to `~/ultnote`) which can be changed in settings: File > Preferences > Settings > search for "ultnote". Any notes you keep in here will be searchable from any repository by pressing `alt+f`.

### Open Generated Code
Press `alt+o` to open up the source code being used to generate outputs, which will allow you to check your code with a language server if it's not supported in the cells yet.

## Language Support
It's very simple to add your own language, look inside [src/languages/rust.ts](https://github.com/jackos/ultnote/blob/main/src/languages/rust.ts) for an example, then add your language to the switch statement in [`src/kernel.ts`](https://github.com/jackos/ultnote/blob/main/src/kernel.ts). Please open a pull request if you add a language, it's a lot easier than you might expect and it will be appreciated.

### Rust       
- [x] Runs (0.1ms)
- [ ] Language Server
- [x] Import External Code

### Go         
- [x] Runs (0.1ms)
- [ ] Language Server
- [x] Import External Code

### Javascript 
- [x] Runs (0.3ms)
- [x] Language Server
- [ ] Import External Code

### Typescript 
- [x] Runs (0.7ms)
- [x] Language Server
- [ ] Import External Code

## Inspiration
- Vimwiki
- Jupyter Notebook
- [This comment](https://news.ycombinator.com/item?id=11042400)

