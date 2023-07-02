/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/**
 * Determines if the client is running on an Apple device like a Mac or an iPhone.
 * This is necessary to e.g. determine different keyboard shortcuts.
 */
export const isAppleDevice: () => boolean = () =>
  navigator.platform.startsWith('Mac') || navigator.platform === 'iPhone'
