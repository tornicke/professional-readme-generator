// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// render license badge based on the user's choice of license
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateTemplate = (answer) => {
  const readmeTemplate = `
  # ${answer.projectTitle}

  ## Description

  ${answer.projectDescription}
  
  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${answer.installationInstructions}
  
  ## Usage

  ${answer.usageInformation}
  
  //! Check this and decide if it needs to be taken out
  To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

  ![alt text](assets/images/screenshot.png)

  ## License
  The application is covered by the ${answer.licenseBadges} license. 
  For further information, please click this badge: ${renderLicenseBadge(
    answer.licenseBadges
  )}

  ## Contributing

  ${answer.contributionGuidelines}

  ## Tests

  ${answer.testInstructions}

  ## Questions
  Click my GitHub username [username](https://github.com/${
    answer.githubUsername
  }) to browse my projects and other activity:
  [${answer.githubUsername}](https://github.com/${answer.githubUsername})

  For further questions, please send me an [email](mailto:${
    answer.emailAddress
  }) at ${answer.emailAddress}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

`;
  return readmeTemplate;
};

module.exports = generateTemplate;
