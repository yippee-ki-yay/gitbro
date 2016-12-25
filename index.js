#!/usr/bin/env babel-node

"use strict";

const {Wit, log} = require("node-wit");

const client = new Wit({accessToken: '6XQFDRJVZG2DV54ROJMEWHSLNPAKQ3HM'});

const commands = require('./commands');
const exec = require('child_process').exec;

(async function main() {

  let userCommand = getInput();

  if(userCommand) {
    let response = await client.message(userCommand);

    let intent = response.entities.intent[0];

    let values = getValues(response);

    if(intent) {

      let {command, out} = commands(intent, values);

      exec(command, (err, stdout, stderr) => {
        if(out) {
          console.log(out);
        } else {
          console.log(stdout);
        }

        if(stderr) {
          console.log(stderr);
        }

      });
    } else {
      console.log("Lol wut?");
    }


  }

})();

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

function getValues(response) {
  let query = response.entities.agenda_entry;

  if(query) {
    return query.map(e => {return e.value;})
  }

  return [];
}
