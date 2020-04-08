# Git Conventional Commit Pratice project

### How to add this in your project

Follow below steps
1. Follow below commands
```sh
$ cd project
$ yarn add commitizen @commitlint/cli @commitlint/config-conventional husky -D
$ npx commitizen init cz-conventional-changelog --save-dev --save-exact
```
2. Open package.json and add like below
```json
{
  "name": "git-conventionalcommits",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@commitlint/cli": "^8.3.5",
    "@commitlint/config-conventional": "^8.3.4",
    "commitizen": "^4.0.4",
    "cz-conventional-changelog": "^3.1.0",
    "husky": "^4.2.3"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}

```

3. Create commitlint.config.js file and paste below code

```js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

4. Now try with git-cz command to commit
