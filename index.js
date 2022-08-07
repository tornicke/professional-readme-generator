const fs = require("fs");

const renderTemplate = require("./utils/generateMarkdown");

/*setting a default name for "filename"*/
const writeMdTemplate = (mdTemplate, filename = "SampleREADME") => {
  fs.writeFile(`${filename}.md`, mdTemplate, (err) =>
    err ? console.log(err) : console.log("Your input was added.")
  );
};
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
      message: "How should a user run the app?",
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
    {
      //! License badges?
      name: "licenseBadges",
      type: "list",
      message:
        "Which license type applies to your project? Click on 'enter' to select",
      choices: ["MIT", "MPL_2.0", "IPL_1.0"],
    },
    {
      name: "githubUsername",
      type: "input",
      message: "What is your GitHub username?",
    },
  ])
  .then((answer) => {
    const mdTemplate = renderTemplate(answer);
    writeMdTemplate(mdTemplate);
  });
