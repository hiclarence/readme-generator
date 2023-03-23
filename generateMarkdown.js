const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  switch (license) {
    case 'Apache License 2.0': 
      return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg'); 
      break;
    case 'Creative Commons Attribution 4.0': 
      return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg'); 
      break;
    case 'MIT': 
      return ('https://img.shields.io/badge/License-MIT-yellow.svg'); 
      break;
    default: 
      return ' '
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0': 
      return ('https://opensource.org/licenses/Apache-2.0'); 
      break;
    case 'Creative Commons Attribution 4.0': 
      return ('https://creativecommons.org/licenses/by/4.0/'); 
      break;
    case 'MIT': 
      return ('https://opensource.org/licenses/MIT'); 
      break;
    default: 
      return ' '
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache License 2.0': 
      return ("Apache License, Version 2.0 Apache License Version 2.0, January 2004 http://www.apache.org/licenses/ TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION"); 
      break;
    case 'Creative Commons Attribution 4.0': 
      return ('Creative Commons Corporation (“Creative Commons”) is not a law firm and does not provide legal services or legal advice. Distribution of Creative Commons public licenses does not create a lawyer-client or other relationship. Creative Commons makes its licenses and related information available on an “as-is” basis. Creative Commons gives no warranties regarding its licenses, any material licensed under their terms and conditions, or any related information. Creative Commons disclaims all liability for damages resulting from their use to the fullest extent possible.'); 
      break;
    case 'MIT': 
      return ("THE SOFTWARE IS PROVIDED `AS IS`, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'); "); 
      break;
    default: 
      return ' '
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
  
# ${data.title}
![${data.licenseChoice}](${renderLicenseBadge(data.licenseChoice)})

## Description
${data.description}

## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation 
${data.installation}

## Usage
${data.usageInformation}

## License
${renderLicenseSection(data.licenseChoice)}

${renderLicenseLink(data.licenseChoice)}

## Contributing
${data.contributionGuidelines}
  
## Tests
${data.testInstructions}
  
## Questions
You may reach me at my email: ${data.emailAddress} or my github: https://github.com/${data.githubName}`;
}

module.exports = { generateMarkdown } ;
