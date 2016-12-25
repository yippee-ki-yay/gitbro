# gitbro
Conversational interface for git, screwing up your repository was never this easy!

Ok so what's going on here? Well this is a very simple script that adds nlp on top of your git cli.
So this makes typing in commands like you would say it to your colleagues and this will actually do what you ask (maybe).

### Installation

You have to have node/node-babel installed and npm
Download code and run 'npm install -g' and 'npm link'

### Examples

So this is most useful for some less common operations you use, which you can't remember the exact command but know what you want. But lets start with the basic shit

 - To init a repo
```
'gitbro create repo' or like 'gitbro init' or like 'git bro init this shit' or like 'git bro create here'
```
You get the point it tries and figures out what you meant to say so each command here can have a bunch of variations and you can say commands in a different way.

- To run git status
```
'gitbro check changes' or maybe 'git status' ...
```

- To add/stage all files
```
'gitbro stage all file'
```

- To commit
```
'gitbro commit "some commit msg"'
```

- Push to origin on current branch
```
'gitbro push to origin' or like 'gitbro push pls'
```

- What branch am I at?

```
'gitbro what branch am I at???'
```

- List commits (real nice)
```
'gitbro list commits'
```
