/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { Logger } from '../../utils/logger'
import type { EditorConfig } from './types'

const logger = new Logger('EditorConfig Local Storage')

export const loadFromLocalStorage = (): Partial<EditorConfig> | undefined => {
  try {
    const stored = window.localStorage.getItem('editorConfig')
    if (!stored) {
      return undefined
    }
    return JSON.parse(stored) as EditorConfig
  } catch (_) {
    return undefined
  }
}

export const saveToLocalStorage = (editorConfig: EditorConfig): void => {
  try {
    const json = JSON.stringify(editorConfig)
    localStorage.setItem('editorConfig', json)
  } catch (error) {
    logger.error('Error while saving editor config in local storage', error)
  }
}
