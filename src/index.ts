import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';
import { Menu } from '@lumino/widgets';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { CustomMenu } from './Widget';
import { MainAreaWidget } from '@jupyterlab/apputils';

/**
 * Initialization data for the jlab_custom_ui extension.
 */
const PLUGIN_ID = 'jlab_custom_ui:plugin';
const MENU_SETTING_ORIGIN = '@jupyterlab/mainmenu-extension:plugin';

const plugin: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  autoStart: true,
  requires: [IMainMenu, ISettingRegistry],

  activate: (
    app: JupyterFrontEnd,
    mainMenu: IMainMenu,
    settingRegistry: ISettingRegistry
  ) => {
    console.log('JupyterLab extension jlab_custom_ui is activated!');
    const { commands } = app;

    //Test
    let currentSettings: any = [];
    settingRegistry?.get(MENU_SETTING_ORIGIN, 'menus').then(values => {
      currentSettings = values.composite;
    });

    const onCallBack = (data: any) => {
      settingRegistry?.set(MENU_SETTING_ORIGIN, 'menus', data);
    };

    commands.addCommand('customMenuItem', {
      caption: 'Custom layout',
      label: 'Customize MenuItem',
      execute: () => {
        const content = new CustomMenu({
          currentSettings,
          callback: onCallBack
        });
        const widget = new MainAreaWidget<CustomMenu>({ content });
        widget.title.label = 'Custom MenuItem';
        app.shell.add(widget, 'main');
      }
    });
    const menu = new Menu({ commands });
    menu.title.label = 'Customize';

    menu.addItem({ command: 'customMenuItem' });

    mainMenu.addMenu(menu, { rank: 1000 });
  }
};

export default plugin;
