# Boilerplate Manager
The goal is to have a CLI that can grab the latest version of a boilerplate and install it into a selected folder to prevent copy/paste errors or issues with missing code.

To use this run:
`npm i -g boilerplate-manager`

# commands

`bpmanager add`

The cli will prompt you for 3 thing:
1) the name of the repo you want to add. This can be any name recognizable to you.
2) github username that owns the repo you are trying to add. This is found in the url of the repo as well to make it easy.
3) github repo that you want to add to your list. This is just the project name.

`bpmanager init`

This will bring up a list of your saved boilerplates. Selecting one will downlod it to your working directory. Selecting 'none' cancels the action.

`bpmanager edit`

This will bring up a list of your saved boilerplates allowing you to select an entry to edit. It will then re-prompt you for each of the items with their current values. Leaving the field blank will maintain the current value.

`bpmanager delete`

This will bring up a list of your saved boilerplates. Selecting one will remove it from the list. You will be prompted to confirm before the action is completed.

`bpmanager clear`

This will remove all items from the list and will prompt before executing the action.

# Roadmap

- Check existing files in working directory and notify if a file will be overwritten when downloading new boilerplate.
