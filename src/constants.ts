export const DefaultMenuItems = [
  {
    id: 'jp-mainmenu-file',
    label: 'File',
    items: [
      {
        type: 'submenu',
        submenu: {
          id: 'jp-mainmenu-file-new',
          label: 'New',
          items: [
            {
              command: 'console:create',
              rank: 1
            },
            {
              command: 'notebook:create-new',
              rank: 10
            }
          ]
        },
        rank: 0
      },
      {
        type: 'separator',
        rank: 2
      },
      {
        command: 'filemenu:create-console',
        rank: 2.1
      },
      {
        command: 'filemenu:close-and-cleanup',
        rank: 3.1
      },
      {
        type: 'separator',
        rank: 99
      },
      {
        command: 'filemenu:logout',
        rank: 99
      },
      {
        command: 'filemenu:shutdown',
        rank: 99
      },
      {
        type: 'separator',
        rank: 3
      },
      {
        command: 'application:close',
        rank: 3
      },
      {
        command: 'application:close-all',
        rank: 3.2
      },
      {
        type: 'separator',
        rank: 98
      },
      {
        command: 'apputils:print',
        rank: 98
      },
      {
        command: 'workspace-ui:save-as',
        rank: 40
      },
      {
        command: 'workspace-ui:save',
        rank: 40
      },
      {
        type: 'separator',
        rank: 6
      },
      {
        command: 'docmanager:download',
        rank: 6
      },
      {
        type: 'separator',
        rank: 6
      },
      {
        command: 'filebrowser:create-main-launcher',
        rank: 1
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        command: 'filebrowser:open-path',
        rank: 1
      },
      {
        command: 'filebrowser:open-url',
        rank: 1
      },
      {
        type: 'separator',
        rank: 100
      },
      {
        command: 'hub:control-panel',
        rank: 100
      },
      {
        command: 'hub:logout',
        rank: 100
      },
      {
        type: 'separator',
        rank: 100
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        type: 'submenu',
        rank: 10,
        submenu: {
          id: 'jp-mainmenu-file-notebookexport',
          label: 'Save and Export Notebook As…'
        }
      },
      {
        type: 'separator',
        rank: 10
      }
    ],
    rank: 1
  },
  {
    id: 'jp-mainmenu-edit',
    label: 'Edit',
    items: [
      {
        command: 'editmenu:undo',
        rank: 0
      },
      {
        command: 'editmenu:redo',
        rank: 0
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        command: 'editmenu:clear-current',
        rank: 10
      },
      {
        command: 'editmenu:clear-all',
        rank: 10
      },
      {
        type: 'separator',
        rank: 200
      },
      {
        command: 'editmenu:go-to-line',
        rank: 200
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        command: 'documentsearch:start',
        rank: 10
      },
      {
        command: 'documentsearch:highlightNext',
        rank: 10
      },
      {
        command: 'documentsearch:highlightPrevious',
        rank: 10
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        type: 'separator',
        rank: 4
      },
      {
        command: 'notebook:undo-cell-action',
        rank: 4
      },
      {
        command: 'notebook:redo-cell-action',
        rank: 4
      },
      {
        type: 'separator',
        rank: 5
      },
      {
        command: 'notebook:cut-cell',
        rank: 5
      },
      {
        command: 'notebook:copy-cell',
        rank: 5
      },
      {
        command: 'notebook:paste-cell-below',
        rank: 5
      },
      {
        command: 'notebook:paste-cell-above',
        rank: 5
      },
      {
        command: 'notebook:paste-and-replace-cell',
        rank: 5
      },
      {
        type: 'separator',
        rank: 6
      },
      {
        command: 'notebook:delete-cell',
        rank: 6
      },
      {
        type: 'separator',
        rank: 7
      },
      {
        command: 'notebook:select-all',
        rank: 7
      },
      {
        command: 'notebook:deselect-all',
        rank: 7
      },
      {
        type: 'separator',
        rank: 8
      },
      {
        command: 'notebook:move-cell-up',
        rank: 8
      },
      {
        command: 'notebook:move-cell-down',
        rank: 8
      },
      {
        type: 'separator',
        rank: 9
      },
      {
        command: 'notebook:split-cell-at-cursor',
        rank: 9
      },
      {
        command: 'notebook:merge-cells',
        rank: 9
      },
      {
        command: 'notebook:merge-cell-above',
        rank: 9
      },
      {
        command: 'notebook:merge-cell-below',
        rank: 9
      },
      {
        type: 'separator',
        rank: 9
      }
    ],
    rank: 2
  },
  {
    id: 'jp-mainmenu-view',
    label: 'View',
    items: [
      {
        type: 'separator',
        rank: 10
      },
      {
        command: 'viewmenu:line-numbering',
        rank: 10
      },
      {
        command: 'viewmenu:match-brackets',
        rank: 10
      },
      {
        command: 'viewmenu:word-wrap',
        rank: 10
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        command: 'application:toggle-mode',
        rank: 1
      },
      {
        command: 'application:toggle-presentation-mode',
        rank: 1
      },
      {
        type: 'separator',
        rank: 2
      },
      {
        command: 'application:toggle-left-area',
        rank: 2
      },
      {
        command: 'application:toggle-right-area',
        rank: 2
      },
      {
        type: 'separator',
        rank: 9.9
      },
      {
        command: 'apputils:display-notifications',
        rank: 9.92
      },
      {
        type: 'separator',
        rank: 9.99
      },
      {
        command: 'apputils:activate-command-palette',
        rank: 0
      },
      {
        type: 'separator',
        rank: 40
      },
      {
        type: 'submenu',
        submenu: {
          id: 'jp-mainmenu-view-codemirror-theme',
          label: 'Text Editor Syntax Highlighting'
        },
        rank: 40
      },
      {
        type: 'separator',
        rank: 40
      },
      {
        command: 'debugger:show-panel',
        rank: 5
      },
      {
        command: 'filebrowser:toggle-hidden-files',
        rank: 9.95
      },
      {
        type: 'separator'
      },
      {
        command: 'logconsole:open',
        rank: 9.95
      },
      {
        type: 'separator',
        rank: 9.99
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        command: 'notebook:hide-cell-code',
        rank: 10
      },
      {
        command: 'notebook:hide-cell-outputs',
        rank: 10
      },
      {
        command: 'notebook:hide-all-cell-code',
        rank: 10
      },
      {
        command: 'notebook:hide-all-cell-outputs',
        rank: 10
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        command: 'notebook:show-cell-code',
        rank: 11
      },
      {
        command: 'notebook:show-cell-outputs',
        rank: 11
      },
      {
        command: 'notebook:show-all-cell-code',
        rank: 11
      },
      {
        command: 'notebook:show-all-cell-outputs',
        rank: 11
      },
      {
        type: 'separator',
        rank: 11
      },
      {
        command: 'notebook:toggle-render-side-by-side-current',
        rank: 12
      },
      {
        type: 'separator',
        rank: 12
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        command: 'statusbar:toggle',
        rank: 1
      },
      {
        type: 'separator',
        rank: 1
      }
    ],
    rank: 3
  },
  {
    id: 'jp-mainmenu-run',
    label: 'Run',
    items: [
      {
        command: 'runmenu:run',
        rank: 0
      },
      {
        type: 'separator'
      },
      {
        command: 'runmenu:run-all',
        rank: 999
      },
      {
        command: 'runmenu:restart-and-run-all',
        rank: 999
      },
      {
        type: 'separator',
        rank: 10
      },
      {
        command: 'notebook:run-cell-and-insert-below',
        rank: 10
      },
      {
        command: 'notebook:run-cell',
        rank: 10
      },
      {
        command: 'notebook:run-in-console',
        rank: 10
      },
      {
        type: 'separator',
        rank: 11
      },
      {
        command: 'notebook:run-all-above',
        rank: 11
      },
      {
        command: 'notebook:run-all-below',
        rank: 11
      },
      {
        type: 'separator',
        rank: 12
      },
      {
        command: 'notebook:render-all-markdown',
        rank: 12
      },
      {
        type: 'separator',
        rank: 12
      }
    ],
    rank: 4
  },
  {
    id: 'jp-mainmenu-kernel',
    label: 'Kernel',
    items: [
      {
        command: 'kernelmenu:interrupt',
        rank: 0
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        command: 'kernelmenu:restart',
        rank: 1
      },
      {
        command: 'kernelmenu:restart-and-clear',
        rank: 1
      },
      {
        command: 'runmenu:restart-and-run-all',
        rank: 1.1
      },
      {
        type: 'separator',
        rank: 1.5
      },
      {
        command: 'kernelmenu:reconnect-to-kernel',
        rank: 1.5
      },
      {
        type: 'separator',
        rank: 2
      },
      {
        command: 'kernelmenu:shutdown',
        rank: 2
      },
      {
        command: 'kernelmenu:shutdownAll',
        rank: 2
      },
      {
        type: 'separator',
        rank: 3
      },
      {
        command: 'kernelmenu:change',
        rank: 3
      },
      {
        type: 'separator',
        rank: 1.2
      },
      {
        command: 'debugger:restart-debug',
        rank: 1.2
      },
      {
        command: 'notebook:restart-and-run-to-selected',
        rank: 1
      }
    ],
    rank: 5
  },
  {
    id: 'jp-mainmenu-tabs',
    label: 'Tabs',
    items: [
      {
        command: 'application:activate-next-tab',
        rank: 0
      },
      {
        command: 'application:activate-previous-tab',
        rank: 0
      },
      {
        command: 'application:activate-next-tab-bar',
        rank: 0
      },
      {
        command: 'application:activate-previous-tab-bar',
        rank: 0
      },
      {
        command: 'tabsmenu:activate-previously-used-tab',
        rank: 0
      }
    ],
    rank: 500
  },
  {
    id: 'jp-mainmenu-settings',
    label: 'Settings',
    items: [
      {
        command: 'settingeditor:open',
        rank: 1000
      },
      {
        type: 'submenu',
        submenu: {
          id: 'jp-mainmenu-settings-apputilstheme',
          label: 'Theme',
          items: [
            {
              type: 'separator'
            },
            {
              command: 'apputils:theme-scrollbars'
            },
            {
              type: 'separator'
            },
            {
              command: 'apputils:incr-font-size',
              args: {
                key: 'code-font-size'
              }
            },
            {
              command: 'apputils:decr-font-size',
              args: {
                key: 'code-font-size'
              }
            },
            {
              type: 'separator'
            },
            {
              command: 'apputils:incr-font-size',
              args: {
                key: 'content-font-size1'
              }
            },
            {
              command: 'apputils:decr-font-size',
              args: {
                key: 'content-font-size1'
              }
            },
            {
              type: 'separator'
            },
            {
              command: 'apputils:incr-font-size',
              args: {
                key: 'ui-font-size1'
              }
            },
            {
              command: 'apputils:decr-font-size',
              args: {
                key: 'ui-font-size1'
              }
            }
          ]
        },
        rank: 0
      },
      {
        type: 'submenu',
        submenu: {
          id: 'jp-mainmenu-view-codemirror-keymap',
          label: 'Text Editor Key Map',
          items: [
            {
              command: 'codemirror:change-keymap',
              args: {
                keyMap: 'default'
              }
            },
            {
              command: 'codemirror:change-keymap',
              args: {
                keyMap: 'sublime'
              }
            },
            {
              command: 'codemirror:change-keymap',
              args: {
                keyMap: 'vim'
              }
            },
            {
              command: 'codemirror:change-keymap',
              args: {
                keyMap: 'emacs'
              }
            }
          ]
        },
        rank: 31
      },
      {
        type: 'submenu',
        submenu: {
          id: 'jp-mainmenu-view-codemirror-theme',
          label: 'Text Editor Theme',
          items: [
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'jupyter'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'default'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'abcdef'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'base16-dark'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'base16-light'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'hopscotch'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'material'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'mbo'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'mdn-like'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'seti'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'solarized dark'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'solarized light'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'the-matrix'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'xq-light'
              }
            },
            {
              command: 'codemirror:change-theme',
              args: {
                theme: 'zenburn'
              }
            }
          ]
        },
        rank: 31
      },
      {
        type: 'separator',
        rank: 39
      },
      {
        type: 'separator',
        rank: 9
      },
      {
        type: 'submenu',
        submenu: {
          id: 'jp-mainmenu-settings-consoleexecute',
          label: 'Console Run Keystroke',
          items: [
            {
              command: 'console:interaction-mode',
              args: {
                interactionMode: 'terminal'
              }
            },
            {
              command: 'console:interaction-mode',
              args: {
                interactionMode: 'notebook'
              }
            }
          ]
        },
        rank: 9
      },
      {
        type: 'separator',
        rank: 9
      },
      {
        type: 'separator',
        rank: 100
      },
      {
        command: 'extensionmanager:toggle',
        rank: 100
      },
      {
        type: 'separator',
        rank: 100
      },
      {
        type: 'separator',
        rank: 5
      },
      {
        command: 'filebrowser:toggle-navigate-to-current-directory',
        rank: 5
      },
      {
        type: 'separator',
        rank: 5
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        type: 'submenu',
        rank: 1,
        submenu: {
          id: 'jp-mainmenu-settings-language',
          label: 'Language'
        }
      },
      {
        type: 'separator',
        rank: 1
      }
    ],
    rank: 999
  },
  {
    id: 'jp-mainmenu-help',
    label: 'Help',
    items: [
      {
        command: 'help:about',
        rank: 0
      },
      {
        type: 'separator',
        rank: 0
      },
      {
        type: 'separator',
        rank: 2
      },
      {
        command: 'help:jupyter-forum',
        rank: 2
      },
      {
        type: 'separator',
        rank: 2
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        command: 'help:launch-classic-notebook',
        rank: 1
      },
      {
        type: 'separator',
        rank: 1
      },
      {
        type: 'separator',
        rank: 0.1
      },
      {
        command: 'inspector:open',
        rank: 0.1
      },
      {
        type: 'separator',
        rank: 0.1
      }
    ],
    rank: 1000
  }
];
