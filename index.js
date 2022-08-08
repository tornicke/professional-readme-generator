const fs = require("fs");

const renderTemplate = require("./utils/generateMarkdown");

/*setting a default name for "filename"*/
const writeMdTemplate = (mdTemplate, filename = "SampleREADME") => {
  fs.writeFile(`${filename}.md`, mdTemplate, (err) =>
    err
      ? console.log(err)
      : console.log("Your professional README file was generated.")
  );
};
/*adding questions below*/
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      name: "projectTitle",
      type: "input",
      message: "What is your project title?",
    },
    {
      name: "projectDescription",
      type: "input",
      message: "How would you describe your project?",
    },
    {
      name: "installationInstructions",
      type: "input",
      message: "How can a user install the app?",
    },
    {
      name: "usageInformation",
      type: "input",
      message: "How can the user run the app?",
    },
    {
      name: "contributionGuidelines",
      type: "input",
      message: "How can others contribute to your project?",
    },
    {
      name: "testInstructions",
      type: "input",
      message: "How can a user test your app?",
    },
    /*"list" type for the license question*/
    {
      name: "licenseBadges",
      type: "list",
      message:
        "Which license type applies to your project? Click on 'enter' to select",
      choices: [
        "MIT",
        "MPL_2.0",
        "IPL_1.0",
        "ISC",
        "IBM",
        "Apache_2.0",
        "BSD_3_Clause",
      ] /*listing names only, adding the names to the template literals in "generateMarkdown"*/,
    },
    {
      name: "githubUsername",
      type: "input",
      message: "What is your GitHub username?",
    },
    {
      name: "emailAddress",
      type: "input",
      message: "What is your email address?",
    },
  ])
  .then((answer) => {
    const mdTemplate = renderTemplate(answer);
    writeMdTemplate(mdTemplate);
  });
