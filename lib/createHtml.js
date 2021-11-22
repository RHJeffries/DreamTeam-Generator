const path = require('path');
const fs = require('fs');
const tempHtml = path.resolve(__dirname, '../src');

const createHTML = employees => {
    const html = [];
  
    // filtering managers
    html.push(...employees
      .filter(employee => employee.getRole() === 'Manager')
      .map(manager => createManager(manager))
    );

    // filtering engineers
    html.push(...employees
      .filter(employee => employee.getRole() === 'Engineer')
      .map(engineer => createEngineer(engineer))
    );

    // filtering interns
    html.push(...employees
      .filter(employee => employee.getRole() === 'Intern')
      .map(intern => createIntern(intern))
    );
    
    return createMain(html.join(""));
  
  };

  // the function that creates the HTML div for each manager
  const createManager = manager => {
    let template = fs.readFileSync(path.resolve(tempHtml, 'manager.html'), 'utf8');
    template = replacePlaceholders(template, 'name', manager.getName());
    template = replacePlaceholders(template, 'role', manager.getRole());
    template = replacePlaceholders(template, 'email', manager.getEmail());
    template = replacePlaceholders(template, 'id', manager.getId());
    template = replacePlaceholders(template, 'officeNumber', manager.getOfficeNumber());
    return template;
  };
  
    // the function that creates the HTML div for each engineer
  const createEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(tempHtml, 'engineer.html'), 'utf8');
    template = replacePlaceholders(template, 'name', engineer.getName());
    template = replacePlaceholders(template, 'role', engineer.getRole());
    template = replacePlaceholders(template, 'email', engineer.getEmail());
    template = replacePlaceholders(template, 'id', engineer.getId());
    template = replacePlaceholders(template, 'github', engineer.getGithub());
    return template;
  };
  
    // the function that creates the HTML div for each intern
  const createIntern = intern => {
    let template = fs.readFileSync(path.resolve(tempHtml, 'intern.html'), 'utf8');
    template = replacePlaceholders(template, 'name', intern.getName());
    template = replacePlaceholders(template, 'role', intern.getRole());
    template = replacePlaceholders(template, 'email', intern.getEmail());
    template = replacePlaceholders(template, 'id', intern.getId());
    template = replacePlaceholders(template, 'school', intern.getSchool());
    return template;
  };
  
    // the function that takes the html array from the createHTML function and creates the index.html file 
  const createMain = html => {
    const template = fs.readFileSync(path.resolve(tempHtml, 'index.html'), 'utf8');
    
    return replacePlaceholders(template, 'team', html);
  };
  
  // function that replaces all the placeholders in the HTML template based on the values assigned to each class
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm');
    return template.replace(pattern, value);
  };
  
  module.exports = createHTML;