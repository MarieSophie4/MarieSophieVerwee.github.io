# Personal Website of Marie-Sophie Verwee

## Personal notes - how to deploy
1. Go to gh-pages branch
2. Execute
```
git merge main
ng build --configuration production --base-href https://mariesophieverwee.github.io/
npx angular-cli-ghpages --dir=dist/browser
```
3. Done go have a look at the [new website](https://mariesophieverwee.github.io/)
