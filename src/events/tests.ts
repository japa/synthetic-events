/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Assert } from '@japa/assert'
import type { TestEndNode, TestStartNode } from '@japa/core/types'

let assertionError
try {
  new Assert().deepEqual({ id: 1 }, { id: 2 })
} catch (error) {
  assertionError = error
}

const test1: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'create an instance of test',
      expanded: 'create an instance of test',
    },
    isPinned: false,
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'create an instance of test',
      expanded: 'create an instance of test',
    },
    isPinned: false,
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 20,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test2: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'define timeout for the test',
      expanded: 'define timeout for the test',
    },
    isPinned: false,
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    retries: 4,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'define timeout for the test',
      expanded: 'define timeout for the test',
    },
    isPinned: false,
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 18,
    retries: 4,
    retryAttempt: 2,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test3: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'disable timeout for the test',
      expanded: 'disable timeout for the test',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'disable timeout for the test',
      expanded: 'disable timeout for the test',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 3000,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test4: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'ping 3rd party service',
      expanded: 'ping 3rd party service',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Endpoint is incorrect',
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'ping 3rd party service',
      expanded: 'ping 3rd party service',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Endpoint is incorrect',
    isTodo: false,
    duration: 200,
    errors: [{ phase: 'test', error: new Error('Unable to reach server') }],
    hasError: true,
    meta: {},
  },
]

const test5: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'mark test to be skipped',
      expanded: 'mark test to be skipped',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: true,
    skipReason: 'Skipping in CI',
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'mark test to be skipped',
      expanded: 'mark test to be skipped',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: true,
    skipReason: 'Skipping in CI',
    isFailing: false,
    isTodo: false,
    duration: 0,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test6: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'mark test as todo',
      expanded: 'mark test as todo',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: true,
    meta: {},
  },
  {
    title: {
      original: 'mark test as todo',
      expanded: 'mark test as todo',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: true,
    duration: 1,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test7: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'define tags',
      expanded: 'define tags',
    },
    isPinned: false,
    tags: ['@slow', '@regression'],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'define tags',
      expanded: 'define tags',
    },
    isPinned: false,
    tags: ['@slow', '@regression'],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 1,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test8: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'define dataset for the test "{name}"',
      expanded: 'define dataset for the test "virk"',
    },
    isPinned: true,
    tags: [],
    dataset: {
      size: 3,
      row: { id: 1, name: 'virk' },
      index: 0,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'define dataset for the test "{name}"',
      expanded: 'define dataset for the test "virk"',
    },
    isPinned: true,
    tags: [],
    dataset: {
      size: 3,
      row: { id: 1, name: 'virk' },
      index: 0,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 300,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test9: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'define dataset for the test "{name}"',
      expanded: 'define dataset for the test "nikk"',
    },
    isPinned: false,
    tags: [],
    dataset: {
      size: 3,
      row: { id: 2, name: 'nikk' },
      index: 1,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'define dataset for the test "{name}"',
      expanded: 'define dataset for the test "nikk"',
    },
    isPinned: false,
    tags: [],
    dataset: {
      size: 3,
      row: { id: 2, name: 'nikk' },
      index: 1,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 300,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test10: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'define dataset for the test "{name}"',
      expanded: 'define dataset for the test "romain"',
    },
    isPinned: false,
    tags: [],
    dataset: {
      size: 3,
      row: { id: 3, name: 'romain' },
      index: 2,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'define dataset for the test "{name}"',
      expanded: 'define dataset for the test "romain"',
    },
    isPinned: false,
    tags: [],
    dataset: {
      size: 3,
      row: { id: 3, name: 'romain' },
      index: 2,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 300,
    errors: [],
    hasError: false,
    meta: {},
  },
]

const test11: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'multiple calls to exec should result in a noop',
      expanded: 'multiple calls to exec should result in a noop',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'multiple calls to exec should result in a noop',
      expanded: 'multiple calls to exec should result in a noop',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 10,
    errors: [
      {
        phase: 'setup',
        error: new Error('Setup phase failed'),
      },
    ],
    hasError: true,
    meta: {},
  },
]

const test12: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'fail test when executor raises an exception',
      expanded: 'fail test when executor raises an exception',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'fail test when executor raises an exception',
      expanded: 'fail test when executor raises an exception',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 10,
    errors: [
      {
        phase: 'test',
        error: assertionError,
      },
      {
        phase: 'setup:cleanup',
        error: new Error('Setup cleanup failed'),
      },
      {
        phase: 'teardown',
        error: new Error('teardown failed'),
      },
    ],
    hasError: true,
    meta: {},
  },
]

const test13: [TestStartNode, TestEndNode] = [
  {
    title: {
      original: 'regression test passing',
      expanded: 'regression test passing',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Retries are not working',
    isTodo: false,
    meta: {},
  },
  {
    title: {
      original: 'regression test passing',
      expanded: 'regression test passing',
    },
    isPinned: false,
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Retries are not working',
    isTodo: false,
    duration: 200,
    errors: [],
    hasError: false,
    meta: {},
  },
]

export default [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
  test13,
]
