/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

beforeEach(() => {
  cy.intercept('GET', 'public/motd.md', {
    body: '404 Not Found!',
    statusCode: 404
  })
  cy.intercept('HEAD', 'public/motd.md', {
    statusCode: 404
  })
})
