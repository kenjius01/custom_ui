import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { Dialog, showDialog } from '@jupyterlab/apputils';

// import { MainAreaWidget } from '@jupyterlab/apputils';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { IMenuItem } from './constants';

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

    let listMenuItem: IMenuItem[] = [];

    const updateSettings = (settings: ISettingRegistry.ISettings): void => {
      listMenuItem = settings?.composite?.menu as IMenuItem[];
      settingRegistry.set(MENU_SETTING_ORIGIN, 'menus', listMenuItem);
      // listMenuItem?.forEach((menuItem: IMenuItem) => {
      //   const typeMenu: TMenuType = TypeMenu[menuItem.id];

      //   if (menuItem.disabled === true) {
      //     removeItemWithId(menuItem?.id);

      //     listOriginMenu = [
      //       ...listOriginMenu,
      //       {
      //         id: menuItem.id,
      //         disabled: menuItem.disabled
      //       }
      //     ];
      //     return;
      //   }
      //   if (!mainMenu[typeMenu]?.rank) {
      //     return;
      //   }

      //   //* Set rank menu item

      //   removeItemWithId(menuItem?.id);
      //   listOriginMenu = [
      //     ...listOriginMenu,
      //     {
      //       id: menuItem.id,
      //       rank: menuItem?.rank
      //     }
      //   ];

      //   //* Check if have menuItem.items
      //   if (!menuItem.items) {
      //     return;
      //   }

      //   //* map for each item in menu item
      //   menuItem?.items.forEach((item: IItem) => {
      //     //* if item.type === 'command'
      //     if (item.type !== 'submenu') {
      //       //* Find item match children of menu item
      //       const findItem = mainMenu[typeMenu]?.items.find(
      //         i => i.command === item.command
      //       ) as Menu.IItem;

      //       //! Remove item
      //       mainMenu[typeMenu]?.menu.removeItem(findItem);
      //       if (item?.disabled) {
      //         return;
      //       }

      //       //* set menu item with rank
      //       mainMenu[typeMenu]?.menu.insertItem(Math.round(item.rank ?? 0), {
      //         command: findItem?.command,
      //         submenu: findItem?.submenu,
      //         type: findItem?.type
      //       });
      //     }

      //     //* if item.type === submenu
      //     if (item.type === 'submenu') {
      //       if (item.disabled || item.submenu?.disabled) {
      //         //? Find match item
      //         const findItem = mainMenu[typeMenu].items.find(
      //           i => i.type === 'submenu' && i.label === item.submenu?.label
      //         ) as Menu.IItem;

      //         //! Remove item
      //         mainMenu[typeMenu].menu.removeItem(findItem);
      //         return;
      //       }
      //       if (!item.submenu?.items) {
      //         return;
      //       }

      //       //? Similary
      //       item.submenu.items.forEach((sub: IItem) => {
      //         if (sub.disabled) {
      //           const findItem = mainMenu[typeMenu].items.find(
      //             i => i.type === 'submenu' && i.label === item.submenu?.label
      //           ) as Menu.IItem;

      //           const subDisableItem = findItem.submenu?.items.find(
      //             i => i.type === sub.type && i.command === sub.command
      //           ) as Menu.IItem;

      //           findItem.submenu?.removeItem(subDisableItem);
      //         }
      //       });
      //     }
      //   });
      // });
    };

    //* Update settings
    Promise.all([settingRegistry?.load(PLUGIN_ID), app.restored]).then(
      ([settings]) => {
        updateSettings(settings);
        settings?.changed.connect(async () => {
          updateSettings(settings);
          displayInformation();
        });
      }
    );
  }
};

export default plugin;
