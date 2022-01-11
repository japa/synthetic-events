/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { SuiteStartNode, SuiteEndNode } from '@japa/core'

const suite1: [SuiteStartNode, SuiteEndNode] = [
  {
    name: 'unit',
  },
  {
    name: 'unit',
    errors: [],
    hasError: false,
  },
]

const suite2: [SuiteStartNode, SuiteEndNode] = [
  {
    name: 'integration',
  },
  {
    name: 'integration',
    errors: [],
    hasError: true,
  },
]

const suite3: [SuiteStartNode, SuiteEndNode] = [
  {
    name: 'e2e',
  },
  {
    name: 'e2e',
    errors: [
      {
        phase: 'setup',
        error: new Error('setup failed'),
      },
      {
        phase: 'setup:cleanup',
        error: new Error('setup cleanup failed'),
      },
    ],
    hasError: true,
  },
]

export default [suite1, suite2, suite3]
