const fs = require("fs");

module.exports = function (plop) {
    plop.setGenerator("component", {
        description: "Generar un nuevo componente",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Nombre del componente:",
            },
            {
                type: "confirm",
                name: "addToInterfaces",
                message: "¿Deseas agregarlo a store/interfaces.json?",
                default: true,
            },
        ],
        actions: (data) => {
            const actions = [
                {
                    type: "add",
                    path: "react/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
                    templateFile: "plop-templates/Component.tsx.hbs",
                },
                {
                    type: "add",
                    path: "react/{{pascalCase name}}.tsx",
                    templateFile: "plop-templates/ComponentIndex.tsx.hbs",
                },
                {
                    type: "add",
                    path: "react/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
                    templateFile: "plop-templates/Component.module.css.hbs",
                },
                {
                    type: "add",
                    path: "react/components/{{pascalCase name}}/index.ts",
                    templateFile: "plop-templates/index.ts.hbs",
                },
            ];

            // Si el usuario quiere agregar la interfaz, añadimos esta acción
            if (data.addToInterfaces) {
                actions.push({
                    type: "modify",
                    path: "store/interfaces.json",
                    transform: (fileContents, { name }) => {
                        const json = JSON.parse(fileContents);

                        // Agregar nueva interfaz al objeto JSON
                        json[name.toLowerCase()] = {
                            component: name,
                        };

                        return JSON.stringify(json, null, 2); // Formatear con espacios
                    },
                });
            }

            return actions;
        },
    });
};