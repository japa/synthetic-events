/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { GroupStartNode, GroupEndNode } from '@japa/core/types'

const group1: [GroupStartNode, GroupEndNode] = [
  {
    title: 'main group',
    meta: {},
  },
  {
    title: 'main group',
    errors: [],
    hasError: false,
    meta: {},
  },
]

const group2: [GroupStartNode, GroupEndNode] = [
  {
    title: 'user group',
    meta: {},
  },
  {
    title: 'user group',
    errors: [],
    hasError: false,
    meta: {},
  },
]

const group3: [GroupStartNode, GroupEndNode] = [
  {
    title: 'manager group',
    meta: {},
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
    meta: {},
  },
]

const group4: [GroupStartNode, GroupEndNode] = [
  {
    title: 'failing group',
    meta: {},
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
    meta: {},
  },
]

export default [group1, group2, group3, group4]
