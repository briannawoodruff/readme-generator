// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

  ## Description:
  ***
  ${data.description}

  ## Table of Contents:
  ***
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributors](#contributors)

  ## Installation:
  ***
  ${data.installation}

  ## Usage:
  ***
  ${data.usage}

  ## Licenses:
  ***
  ### ${data.licenses} License

  ## Contributors:
  ***
  ${data.contributors}

  ## Username:
  ***
  ${data.username}
  
  ## Project Repo:
  ***
  ${data.repo}
   
  `;
}

module.exports = generateMarkdown;
