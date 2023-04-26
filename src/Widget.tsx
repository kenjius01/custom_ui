import { ReactWidget } from '@jupyterlab/apputils';
import React, { useState } from 'react';
import Form, { UiSchema } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';
import '../style/index.css';
import { DefaultMenuItems } from './constants';

export interface IProps {
  callback: (value: any) => void;
  currentSettings: any;
}

const MenuCustomForm = (props: IProps): JSX.Element => {
  const { callback, currentSettings } = props;
  const [formData, setFormData] = useState({ menu: currentSettings });

  const schema: JSONSchema7 = {
    title: 'Main Menu',
    description: 'Main JupyterLab menu settings.',
    properties: {
      menu: {
        title: 'The application menu description.',
        items: {
          $ref: '#/definitions/menu'
        },
        type: 'array'
      }
    },
    additionalProperties: false,
    definitions: {
      menu: {
        properties: {
          label: {
            description: 'Menu label',
            type: 'string'
          },
          rank: {
            description: 'Menu rank',
            type: 'number',
            minimum: 0
          },
          disabled: {
            description: 'Whether the menu is disabled or not',
            type: 'boolean',
            default: false
          },
          id: {
            readOnly: true,
            description: 'Menu unique id',
            type: 'string',
            pattern: '[a-z][a-z0-9\\-_]+'
          },
          items: {
            description: 'Menu items',
            type: 'array',
            items: {
              $ref: '#/definitions/menuItem'
            }
          }
        },
        additionalProperties: false,
        type: 'object'
      },
      menuItem: {
        properties: {
          args: {
            description: 'Command arguments',
            type: 'object',
            readOnly: true
          },
          command: {
            description: 'Command id',
            type: 'string',
            readOnly: true
          },
          disabled: {
            description: 'Whether the item is disabled or not',
            type: 'boolean',
            default: false
          },
          type: {
            description: 'Item type',
            type: 'string',
            enum: ['command', 'submenu', 'separator'],
            default: 'command',
            readOnly: true
          },
          rank: {
            description: 'Item rank',
            type: 'number',
            minimum: 0
          },
          submenu: {
            description: 'Submenu definition',
            oneOf: [
              {
                $ref: '#/definitions/menu'
              },
              {
                type: 'null'
              }
            ]
          }
        },
        additionalProperties: false,
        type: 'object'
      }
    },
    type: 'object'
  };
  const uiSchema: UiSchema = {};
  const handleSubmit = (e: any) => {
    e.preventDefault();
    callback(formData.menu);
  };
  const onResetData = () => {
    setFormData({ menu: DefaultMenuItems });
    callback([]);
  };

  return (
    <div className="jp-CustomMenuItem">
      <div className="actionForm">
        <button type="submit" onClick={handleSubmit} className={'submitButton'}>
          Save
        </button>
        <button type="button" onClick={onResetData} className={'resetButton'}>
          Reset to Default
        </button>
      </div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        liveValidate
        formData={formData}
        className={'formRfjs'}
        onChange={e => setFormData(e.formData)}
      />
    </div>
  );
};

/**
 * A Counter Lumino Widget that wraps a UI.
 */
export class CustomMenu extends ReactWidget {
  callback: (value: any) => void;
  currentSettings: any;
  /**
   * Constructs a new Widget.
   */
  constructor(props: IProps) {
    super();
    this.callback = props.callback;
    this.currentSettings = props.currentSettings;
  }

  render(): JSX.Element {
    return (
      <MenuCustomForm
        callback={this.callback}
        currentSettings={this.currentSettings}
      />
    );
  }
}
