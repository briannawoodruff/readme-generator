// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  ${data.badge}

  ## Description:
  ${data.description}
  <br />

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation:
  ${data.installation}
  <br />
  
  ## Usage:
  ${data.usage}
  <br />

  ## License: 
  ${data.badge}
  <br />
  ${data.licenses}
  <br />

  ## Contributing:
  ${data.contributing}
  ${data.email} or visit my GitHub [${data.username}](https://github.com/${data.username}).
  <br />

  ## Tests:
  ${data.tests}
  <br />
  
  ## Questions:
  If you have any questions, you can contact me at ${data.email} or visit my GitHub [${data.username}](https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;
