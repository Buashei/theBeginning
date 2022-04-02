const _ = require("lodash");

module.exports = (plop) => {
  // plop generator code
  plop.setHelper("camelCase", (txt) => _.camelCase(txt));
  plop.setHelper("lowerCase", (txt) => txt.toLowerCase());
  plop.setHelper("createPath", (txt) => txt.replace(/-/, "/"));
  plop.setHelper("capitalize", (txt) => _.capitalize(txt));

  plop.setGenerator("Components", {
    description: "Generate some new components",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What type of component would you like to create?",
        choices: ["atoms", "molecules", "organisms", "views"],
        default: "atoms",
      },
      {
        type: "input",
        name: "name",
        message: "What would you like to name your component?",
        description: "Create new component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{type}}/{{name}}/{{name}}.tsx",
        templateFile: "__plop-templates__/components/componentTemplate.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{name}}/{{name}}.scss",
        templateFile: "__plop-templates__/components/styleSheetsTemplate.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{name}}/{{name}}Types.ts",
        templateFile: "__plop-templates__/components/typesTemplate.ts.hbs",
      },
      {
        type: "add",
        path: "__tests__/unit/components/{{type}}/{{name}}/{{name}}.test.tsx",
        templateFile: "__plop-templates__/components/testTemplate.test.tsx.hbs",
      },
      {
        type: "modify",
        pattern:  /(\/\/ addExportHere)/g,
        path: "src/components/{{type}}/index.tsx",
        template: 'export { {{name}} } from \'./{{name}}/{{name}}\';\n$1'
      },
    ], // end of api actions
  });
};