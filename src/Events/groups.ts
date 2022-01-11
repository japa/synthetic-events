/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { GroupStartNode, GroupEndNode } from '@japa/core'

const group1: [GroupStartNode, GroupEndNode] = [
  {
    title: 'main group',
  },
  {
    title: 'main group',
    errors: [],
    hasError: false,
  },
]

const group2: [GroupStartNode, GroupEndNode] = [
  {
    title: 'user group',
  },
  {
    title: 'user group',
    errors: [],
    hasError: false,
  },
]

const group3: [GroupStartNode, GroupEndNode] = [
  {
    title: 'manager group',
  },
  {
    title: 'manager group',
    errors: [
      {
        error: new Error('setup failed'),
        phase: 'setup',
      },
    ],
    hasError: true,
  },
]

const group4: [GroupStartNode, GroupEndNode] = [
  {
    title: 'failing group',
  },
  {
    title: 'failing group',
    errors: [
      {
        error: new Error('setup failed'),
        phase: 'setup',
      },
      {
        error: new Error('setup cleanup failed'),
        phase: 'setup:cleanup',
      },
    ],
    hasError: true,
  },
]

export default [group1, group2, group3, group4]
