// TODO: Create a function that returns a license badge based on which license is passed in
// render license badge based on the user's choice of license
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
}

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

  ## License
  ${renderLicenseBadge(answer.licenseBadges)}  
  The application is covered by the ${answer.licenseBadges} license.    

  ## Contributing

  ${answer.contributionGuidelines}

  ## Tests

  ${answer.testInstructions}

  ## Questions
  Click my GitHub [username](https://github.com/${
    answer.githubUsername
  }) to browse my projects and other activity:
  [${answer.githubUsername}](https://github.com/${answer.githubUsername})  

  For further questions, please send me an [email](mailto:${
    answer.emailAddress
  }) at ${answer.emailAddress}
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
`;
  return readmeTemplate;
};

module.exports = generateTemplate;
