
const fs = require('fs');
function ReadMeTemplate(resPonses)
 {
    return `
    <style>
    <h1 align='center'>${resPonses.projectTitle}</h1>
    
    ## Description
    ${resPonses.description}
    
    ## Table of Contents
        -[Description](#Desrcription)
        -[Installation](#Installation)
        -[Usage](#Usage)
        -[Credits](#Credits)
        -[Licensen](#License)
        -[Badges](#Badges)
        -[Freatures](#Freatures)
        -[Contributing](#Contributing)
        -[Test](#Tests)
    
    ## Installation
        ${resPonses.installation}
        
    ## Usage 
        ${resPonses.usage}
        
    ## Credits 
        ${resPonses.credits}
        
    ## License 
        This application is covered by ${resPonses.license} license.
        
    ## Badges 
    
    ## Features 
        ${resPonses.features}
        
    ## contributing
    
    ## Tests
    
    
    `;
}

module.exports = ReadMeTemplate;

let data = ""
           + " "
 + "";
  
fs.writeFileSync("programming.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));