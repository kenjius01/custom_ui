// import Ajv, { JSONSchemaType } from 'ajv';
// import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

// type FormData = {
//   firstName: string;
//   lastName: string;
//   workExperience: number;
// };

// const schema: JSONSchemaType<FormData> = {
//   title: 'Guest',
//   type: 'object',
//   properties: {
//     firstName: { type: 'string' },
//     lastName: { type: 'string' },
//     workExperience: {
//       description: 'Work experience in years',
//       type: 'integer',
//       minimum: 0,
//       maximum: 100
//     }
//   },
//   required: ['firstName', 'lastName']
// };

// const ajv = new Ajv({
//   allErrors: true,
//   useDefaults: true,
//   keywords: ['uniforms']
// });

// function createValidator(schema: any) {
//   const validator = ajv.compile(schema);

//   return (model: any) => {
//     validator(model);
//     return validator.errors?.length ? { details: validator.errors } : null;
//   };
// }

// const schemaValidator = createValidator(schema);

// export const bridge = new JSONSchemaBridge(schema, schemaValidator);

// //Test

// // commands.addCommand('Test', {
// //     caption: 'Custom layout',
// //     label: 'Customize layout',
// //     execute: () => {
// //       const content = new CustomMenu({
// //         currentSettings,
// //         callback: onCallBack
// //       });
// //       const widget = new MainAreaWidget<CustomMenu>({ content });

// //       widget.title.label = 'MenuItem Custom';
// //       app.shell.add(widget, 'main');
// //     }
// //   });
// //   const menu = new Menu({ commands });
// //   menu.title.label = 'Customize';

// //   menu.addItem({ command: 'Test' });

// //   mainMenu.addMenu(menu, { rank: 300 });
