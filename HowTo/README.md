# How to
This how to contains links to setup pages and other information. Also, futherdown the page is help to use github, step by step, and project structure.

[Our project structure](#Structure)

[Get ready to code](#Start-coding)

[Push to github](#Upload-your-work)

## Setup
### Git and Github

[Git setup](Github.md)

### Communation and Tasks managment

[Communation & tasks](Communation.MD)

### Jest
[Jest](Jest.md)

## Structure

The folder structure in our game engine is like this.
* Ludum
    * .circleci (setup for continuous integration)
    * accessories (diagram etc.)
    * Entities (diagram etc.)
    * HowTo (setup and help)
    * ~~node_modules (react library)~~
    * public ()
    * src (where the code is)
        * components (all the classes)
        * resources
            * images
            * audio
            * sprites
            * video
        * utils ()
    * packages and more


## Github commands

### Start coding
#### Step 1.
Goto the Ludum repo in github.com

#### Step 2
Create a new branch **branch name should be the same as the task name**

#### Step 3.
1. Open Ludum in vscode
2. Open terminal in vscode. (Ctrl+Shift+æ)
3. Write these commands:
    1. <code>git fetch</code> (getting the newest from Ludum)
    2. <code>git pull</code> (make sure you are up to date)
    3. <code>git checkout ***[name of your branch]*** </code> (f.x. git checkout KT-Player-Class) this switches your work space into your branch
4. Code or do what your task needs.

### Upload your work
To upload your work you need to write these commands
1. <code>git status</code> (see a list of modified files)
2. <code>git add .</code> (add all to list) or <code>git add ***[filename]*** </code> (choose which files should be added to list)
3. <code>git commit -m" ***[short description]*** "</code> (needed)
4. <code>git push</code> (pushes your work into your branch on github)

Now your branch on github should be up to date with your work. To merge this into master, make a PR(pull request) and assign someone as a reviewer.
When your work is approved, you can merge into master.

