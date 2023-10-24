module.exports = function (plop) {
  // Criando o gerador de componentes
  plop.setGenerator("component", {
    description: "Create a new shared component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/shared/{{pascalCase name}}/index.tsx",
        templateFile: "component-template/component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/shared/{{pascalCase name}}/styles.ts",
        templateFile: "component-template/component/styles.ts.hbs",
      },
    ],
  });
};
