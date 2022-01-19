/*
 * @japa/synthetic-events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { TestEndNode, TestStartNode } from '@japa/core'

const test1: [TestStartNode, TestEndNode] = [
  {
    title: 'create an instance of test',
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'create an instance of test',
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 20,
    errors: [],
    hasError: false,
  },
]

const test2: [TestStartNode, TestEndNode] = [
  {
    title: 'define timeout for the test',
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'define timeout for the test',
    tags: [],
    timeout: 2000,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 18,
    errors: [],
    hasError: false,
  },
]

const test3: [TestStartNode, TestEndNode] = [
  {
    title: 'disable timeout for the test',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'disable timeout for the test',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 3000,
    errors: [],
    hasError: false,
  },
]

const test4: [TestStartNode, TestEndNode] = [
  {
    title: 'ping 3rd party service',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Endpoint is incorrect',
    isTodo: false,
  },
  {
    title: 'ping 3rd party service',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Endpoint is incorrect',
    isTodo: false,
    duration: 200,
    errors: [{ phase: 'test', error: new Error('Unable to reach server') }],
    hasError: true,
  },
]

const test5: [TestStartNode, TestEndNode] = [
  {
    title: 'mark test to be skipped',
    tags: [],
    timeout: 0,
    isSkipped: true,
    skipReason: 'Skipping in CI',
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'mark test to be skipped',
    tags: [],
    timeout: 0,
    isSkipped: true,
    skipReason: 'Skipping in CI',
    isFailing: false,
    isTodo: false,
    duration: 0,
    errors: [],
    hasError: false,
  },
]

const test6: [TestStartNode, TestEndNode] = [
  {
    title: 'mark test as todo',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: true,
  },
  {
    title: 'mark test as todo',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: true,
    duration: 1,
    errors: [],
    hasError: false,
  },
]

const test7: [TestStartNode, TestEndNode] = [
  {
    title: 'define tags',
    tags: ['@slow', '@regression'],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'define tags',
    tags: ['@slow', '@regression'],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 1,
    errors: [],
    hasError: false,
  },
]

const test8: [TestStartNode, TestEndNode] = [
  {
    title: 'define dataset for the test',
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
  },
  {
    title: 'define dataset for the test',
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
  },
]

const test9: [TestStartNode, TestEndNode] = [
  {
    title: 'define dataset for the test',
    tags: [],
    dataset: {
      size: 3,
      row: { id: 2, name: 'virk' },
      index: 1,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'define dataset for the test',
    tags: [],
    dataset: {
      size: 3,
      row: { id: 2, name: 'virk' },
      index: 1,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 300,
    errors: [],
    hasError: false,
  },
]

const test10: [TestStartNode, TestEndNode] = [
  {
    title: 'define dataset for the test',
    tags: [],
    dataset: {
      size: 3,
      row: { id: 3, name: 'virk' },
      index: 2,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'define dataset for the test',
    tags: [],
    dataset: {
      size: 3,
      row: { id: 3, name: 'virk' },
      index: 2,
    },
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 300,
    errors: [],
    hasError: false,
  },
]

const test11: [TestStartNode, TestEndNode] = [
  {
    title: 'multiple calls to exec should result in a noop',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'multiple calls to exec should result in a noop',
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
  },
]

const test12: [TestStartNode, TestEndNode] = [
  {
    title: 'fail test when executor raises an exception',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
  },
  {
    title: 'fail test when executor raises an exception',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: false,
    isTodo: false,
    duration: 10,
    errors: [
      {
        phase: 'test',
        error: new Error('Test failed'),
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
  },
]

const test13: [TestStartNode, TestEndNode] = [
  {
    title: 'regression test passing',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Retries are not working',
    isTodo: false,
  },
  {
    title: 'regression test passing',
    tags: [],
    timeout: 0,
    isSkipped: false,
    isFailing: true,
    failReason: 'Retries are not working',
    isTodo: false,
    duration: 200,
    errors: [],
    hasError: false,
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
