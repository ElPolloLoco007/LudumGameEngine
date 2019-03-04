# How to

## package.json

insert these lines.

add below version:

```
 "homepage": "https://taniarascia.github.io/react-tutorial",
```

and into the scripts section add:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

## terminal

write these commands

```
npm install --save-dev gh-pages
```

**_remember to push the package json file to github_**

```
npm run build

npm run deploy
```

### Credits

thanks to Tania Rascia.
https://www.taniarascia.com/getting-started-with-react/
