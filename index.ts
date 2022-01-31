/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Emitter } from '@japa/core'

import testEvents from './src/Events/tests'
import groupEvents from './src/Events/groups'
import suitesEvents from './src/Events/suites'

export async function fire(emitter: Emitter) {
  emitter.emit('runner:start', {})

  for (let suitesEvent of suitesEvents) {
    await emitter.emit('suite:start', suitesEvent[0])

    for (let groupEvent of groupEvents) {
      await emitter.emit('group:start', groupEvent[0])

      for (let testEvent of testEvents) {
        await emitter.emit('test:start', testEvent[0])
        await emitter.emit('test:end', testEvent[1])
      }

      await emitter.emit('uncaught:exception', new Error('Something failed outside of test'))
      await emitter.emit('group:end', groupEvent[1])
    }

    await emitter.emit('suite:end', suitesEvent[1])
  }

  emitter.emit('runner:end', {
    hasError: false,
    errors: [],
  })
}
