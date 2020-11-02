function renderLicenseBadge(license) { 
  if (license !== "None") { 
    return `![GitHub License]`
  }
  return ``
}

function renderLicenseLink(license) { 
  if (license !== "none") { 
    return ( 
      `\n* [License](#license)\n`
    )
  }
  return ``
}

function renderLicenseSection(license) { 
  if (license !== "None") { 
    return ( 
      `## License
      This project is licesned with ${license} license`
    )
  }
  return ``
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##Description 
  ${data.descrption}

  ## Table of Contents 

  *[Installation](#intallation)

  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ##Installation 

  To install dependencies, please run this command: 
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage 
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## contributing 

  ${data.contributing}

  ## Tests 

  to run tests, run the following command: 

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions 

  If you have questions about this project, please contact the owner or create an issue.
  

`;
}

module.exports = generateMarkdown;
