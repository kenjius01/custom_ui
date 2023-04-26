// import { ReactWidget } from '@jupyterlab/apputils';
// import React from 'react';
// import { AutoForm } from 'uniforms-semantic';
// import { bridge as schema } from './Schema';

// export interface IProps {
//   callback: (value: any) => void;
//   currentSettings: any;
// }
// // const filterInputClass = style({
// //   boxSizing: 'border-box',

// //   width: '100%',
// //   height: '2em',

// //   /* top | right | bottom | left */
// //   padding: '1px 18px 2px 7px',

// //   color: 'var(--jp-ui-font-color1)',
// //   fontSize: 'var(--jp-ui-font-size1)',
// //   fontWeight: 300,

// //   backgroundColor: 'var(--jp-layout-color1)',

// //   border: 'var(--jp-border-width) solid var(--jp-border-color2)',
// //   borderRadius: '3px',

// //   $nest: {
// //     '&:active': {
// //       border: 'var(--jp-border-width) solid var(--jp-brand-color1)'
// //     },
// //     '&:focus': {
// //       border: 'var(--jp-border-width) solid var(--jp-brand-color1)'
// //     }
// //   }
// // });

// const MenuCustomForm = (props: IProps): JSX.Element => {
//   const { callback, currentSettings } = props;
//   console.log({ currentSettings });

//   // const schema: JSONSchema7 = {
//   //   title: 'Main Menu',
//   //   description: 'Main JupyterLab menu settings.',
//   //   properties: {
//   //     menu: {
//   //       title: 'The application menu description.',
//   //       description:
//   //         'Note: To disable a menu or a menu item,\ncopy it to User Preferences and add the\n"disabled" key. The following example will disable\nthe "Tabs" menu and "Restart Kernel and Run up to Selected Cell"\nitem:\n{\n  "menu": [\n    {\n      "id": "jp-mainmenu-tabs",\n      "disabled": true\n    },\n    {\n      "id": "jp-mainmenu-kernel",\n      "items": [\n        {\n          "command": "notebook:restart-and-run-to-selected",\n          "disabled": true\n        }\n      ]\n    }\n  ]\n}\n\nMenu description:',
//   //       items: {
//   //         $ref: '#/definitions/menu'
//   //       },
//   //       type: 'array'
//   //     }
//   //   },
//   //   additionalProperties: false,
//   //   definitions: {
//   //     menu: {
//   //       properties: {
//   //         label: {
//   //           description: 'Menu label',
//   //           type: 'string'
//   //         },
//   //         rank: {
//   //           description: 'Menu rank',
//   //           type: 'number',
//   //           minimum: 0
//   //         },
//   //         disabled: {
//   //           description: 'Whether the menu is disabled or not',
//   //           type: 'boolean',
//   //           default: false
//   //         },
//   //         id: {
//   //           readOnly: true,
//   //           description: 'Menu unique id',
//   //           type: 'string',
//   //           pattern: '[a-z][a-z0-9\\-_]+'
//   //         },
//   //         items: {
//   //           description: 'Menu items',
//   //           type: 'array',
//   //           items: {
//   //             $ref: '#/definitions/menuItem'
//   //           }
//   //         }
//   //       },
//   //       additionalProperties: false,
//   //       type: 'object'
//   //     },
//   //     menuItem: {
//   //       properties: {
//   //         args: {
//   //           description: 'Command arguments',
//   //           type: 'object'
//   //         },
//   //         command: {
//   //           description: 'Command id',
//   //           type: 'string',
//   //           readOnly: true
//   //         },
//   //         disabled: {
//   //           description: 'Whether the item is disabled or not',
//   //           type: 'boolean',
//   //           default: false
//   //         },
//   //         type: {
//   //           description: 'Item type',
//   //           type: 'string',
//   //           enum: ['command', 'submenu', 'separator'],
//   //           default: 'command'
//   //         },
//   //         rank: {
//   //           description: 'Item rank',
//   //           type: 'number',
//   //           minimum: 0
//   //         },
//   //         submenu: {
//   //           description: 'Submenu definition',
//   //           oneOf: [
//   //             {
//   //               $ref: '#/definitions/menu'
//   //             },
//   //             {
//   //               type: 'null'
//   //             }
//   //           ]
//   //         }
//   //       },
//   //       additionalProperties: false,
//   //       type: 'object'
//   //     }
//   //   },
//   //   type: 'object'
//   // };

//   const onSubmit = (data: any) => {
//     console.log('submit', { data });
//     callback(data);
//   };

//   return <AutoForm schema={schema} onSubmit={onSubmit} />;
// };

// /**
//  * A Counter Lumino Widget that wraps a UI.
//  */
// export class CustomMenu extends ReactWidget {
//   callback: (value: any) => void;
//   currentSettings: any;
//   /**
//    * Constructs a new Widget.
//    */
//   constructor(props: IProps) {
//     super();
//     this.callback = props.callback;
//     this.currentSettings = props.currentSettings;
//   }

//   render(): JSX.Element {
//     return (
//       <MenuCustomForm
//         callback={this.callback}
//         currentSettings={this.currentSettings}
//       />
//     );
//   }
// }
