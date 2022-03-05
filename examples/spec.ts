/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Emitter } from '@japa/core'
import { fire } from '../index'
const emitter = new Emitter()

emitter.on('suite:start', (suite) => console.log(suite.name))
emitter.on('group:start', (group) => console.log(`  ${group.title}`))
emitter.on('test:end', (test) => {
  const retries = test.retries ? ` (${test.retryAttempt}/${test.retries})` : ''
  console.log(`    > ${test.title.expanded} (${test.duration})${retries}`)
})

fire(emitter)
