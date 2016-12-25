#!/usr/bin/env babel-node

"use strict";

const {Wit, log} = require("node-wit");

const client = new Wit({accessToken: '6XQFDRJVZG2DV54ROJMEWHSLNPAKQ3HM'});

const exec = require('child_process').exec;

(async function main() {

  let userCommand = getInput();

  if(userCommand) {
    let response = await client.message(userCommand);

    let intent = response.entities.intent[0];

    console.log(response);

    if(intent) {

      let {command, out} = mapCommand(intent);

      exec(command, (err, stdout, stderr) => {
        if(out) {
          console.log(out);
        } else {
          console.log(stdout);
        }

      });
    } else {
      console.log("Lol wut?");
    }


  }

})();

function mapCommand(intent) {
  switch (intent.value) {
    case 'init':
        return {command: "git init", out: "Git repo initilaized in this folder"}
    break;

    case 'status':
        return {command: "git status", out: ""}
    break;

    case 'stage':
        return {command: "git add -A", out: "All files staged/added"}
    break;

    case 'curr_branch':
        return {command: "git branch | grep \\*", out: ""}
    break;

    case 'ignore':
        return {command: "git status", out: ""}
    break;

    case 'unstage':
        return {command: "git status", out: ""}
    break;

    default:
      return {command: "", out: "Doesn't look like anything to me"}
  }
}

function getInput() {
  const args = process.argv;

  let userCommand = "";

  if(args.length > 2) {

    let first, second, otherParams;

    [first, second, ...otherParams] = args;

    userCommand = otherParams.join(' ');

  } else {
    console.log("You said nothing, and expect something?")
  }

  return userCommand;
}
