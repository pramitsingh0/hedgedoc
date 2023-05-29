/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { getConfig } from '../api/config'
import type { FrontendConfig } from '../api/config/types'
import { getBaseUrls } from './base-url-parser'
import { Logger } from './logger'
import { isBuildTime, isTestMode } from './test-modes'

const logger = new Logger('Frontend config fetcher')

const fetch = async (baseUrl: string): Promise<FrontendConfig | undefined> => {
  try {
    return await getConfig(baseUrl)
  } catch (error) {
    logger.error(`Couldn't fetch frontend configuration from ${baseUrl}api/private/config`)
    return undefined
  }
}

let frontendConfig: FrontendConfig | undefined

/**
 * Fetches and caches the {@link FrontendConfig frontend config} from the backend.
 */
export const getFrontendConfig = async (): Promise<FrontendConfig | undefined> => {
  if (isBuildTime) {
    return undefined
  }
  const baseUrl = getBaseUrls().editor

  // some e2e tests need an adjusted frontend config. Therefore, the cache is deactivated.
  if (isTestMode) {
    return undefined
  }

  if (frontendConfig === undefined) {
    frontendConfig = await fetch(baseUrl)
    if (!isTestMode) {
      //to prevent console spamming because the cache is deactivated
      logger.info(`Fetched frontend config from ${baseUrl}api/private/config`)
    }
  }
  return frontendConfig
}
