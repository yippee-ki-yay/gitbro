module.exports = (intent, values) => {
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

    case 'commit':
        let param = values[0] ? values[0] : "";
        return {command: `git commit -m '${param}'`, out: ""}
    break;

    case 'push_origin':
        return {command: `git push origin HEAD`, out: ""}
    break;

    default:
      return {command: "", out: "Doesn't look like anything to me"}
  }
}
