import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Dialog, showDialog } from '@jupyterlab/apputils';

// import { MainAreaWidget } from '@jupyterlab/apputils';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { Menu } from '@lumino/widgets';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { PartialJSONObject } from '@lumino/coreutils';

/**
 * Initialization data for the jlab_custom_ui extension.
 */
const PLUGIN_ID = 'jlab_custom_ui:plugin';

type IItem = {
  label?: string;
  args?: any;
  command?: string;
  disabled?: boolean;
  rank?: number;
  type?: 'command' | 'submenu';
  submenu?: IMenuItem;
};
interface IMenuItem extends PartialJSONObject {
  disabled?: boolean;
  id: string;
  items?: IItem[];
  label?: string;
  rank?: number;
}
type TMenuType =
  | 'fileMenu'
  | 'editMenu'
  | 'viewMenu'
  | 'runMenu'
  | 'kernelMenu'
  | 'tabsMenu'
  | 'settingsMenu'
  | 'helpMenu';

const TypeMenu: any = {
  'jp-mainmenu-file': 'fileMenu',
  'jp-mainmenu-edit': 'editMenu',
  'jp-mainmenu-view': 'viewMenu',
  'jp-mainmenu-run': 'runMenu',
  'jp-mainmenu-kernel': 'kernelMenu',
  'jp-mainmenu-tabs': 'tabsMenu',
  'jp-mainmenu-settings': 'settingsMenu',
  'jp-mainTestmenu-help': 'helpMenu'
};

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
    // const { commands } = app;

    async function displayInformation(): Promise<void> {
      const result = await showDialog({
        title: 'Information',
        body: 'Menu customization has changed. You will need to reload JupyterLab to see the changes.',
        buttons: [Dialog.cancelButton(), Dialog.okButton({ label: 'Reload' })]
      });

      if (result.button.accept) {
        location.reload();
      }
    }
    console.log(mainMenu.fileMenu.rank);

    let listMenuItem: IMenuItem[] = [];

    const updateSettings = (settings: ISettingRegistry.ISettings): void => {
      listMenuItem = settings?.composite?.menu as IMenuItem[];

      listMenuItem?.forEach((menuItem: IMenuItem) => {
        const typeMenu: TMenuType = TypeMenu[menuItem.id];
        if (menuItem.disabled) {
          mainMenu[typeMenu]?.menu.dispose();
          return;
        }

        //* Set rank of menu item
        mainMenu.addMenu(mainMenu[typeMenu].menu, { rank: menuItem?.rank });

        //* Check if have menuItem.items
        if (!menuItem.items) {
          return;
        }

        //* map for each item in menu item
        menuItem?.items.forEach((item: IItem) => {
          //* if item.type === 'command'
          if (item.type !== 'submenu') {
            //* Find item match children of menu item
            const findItem = mainMenu[typeMenu]?.items.find(
              i => i.command === item.command
            ) as Menu.IItem;

            //! Remove item
            mainMenu[typeMenu]?.menu.removeItem(findItem);
            if (item?.disabled) {
              return;
            }

            //* set menu item with rank
            mainMenu[typeMenu]?.menu.insertItem(Math.round(item.rank ?? 0), {
              command: findItem?.command,
              submenu: findItem?.submenu,
              type: findItem?.type
            });
          }

          //* if item.type === submenu
          if (item.type === 'submenu') {
            if (item.disabled || item.submenu?.disabled) {
              //? Find match item
              const findItem = mainMenu[typeMenu].items.find(
                i => i.type === 'submenu' && i.label === item.submenu?.label
              ) as Menu.IItem;

              //! Remove item
              mainMenu[typeMenu].menu.removeItem(findItem);
              return;
            }
            if (!item.submenu?.items) {
              return;
            }

            //? Similary
            item.submenu.items.forEach((sub: IItem) => {
              if (sub.disabled) {
                const findItem = mainMenu[typeMenu].items.find(
                  i => i.type === 'submenu' && i.label === item.submenu?.label
                ) as Menu.IItem;

                const subDisableItem = findItem.submenu?.items.find(
                  i => i.type === sub.type && i.command === sub.command
                ) as Menu.IItem;

                findItem.submenu?.removeItem(subDisableItem);
              }
            });
          }
        });
      });
    };

    //* Update settings
    Promise.all([settingRegistry?.load(PLUGIN_ID), app.restored]).then(
      ([settings]) => {
        updateSettings(settings);

        settings?.changed.connect(async () => {
          await displayInformation();
          updateSettings(settings);
        });
      }
    );

    // const command = 'filemenu:logout';
    // const item = mainMenu.fileMenu.items.find(i => i.command === command);

    // if (item) {
    //   mainMenu.fileMenu.menu.removeItem(item);
    //   mainMenu.fileMenu.menu.insertItem(20, {
    //     command: item.command,
    //     args: item.args,
    //     submenu: item.submenu,
    //     type: item.type
    //   });
    // }
    // commands.addCommand('filemenu:logout', {
    //   caption: 'Custom layout',
    //   execute: () => {
    //     console.log('function');
    //   }
    // });
    // const menu = new Menu({ commands });
    // menu.title.label = 'Customize';
    // menu.addItem({ command: 'Test' });

    // mainMenu.addMenu(menu, { rank: 300 });
  }
};

export default plugin;
