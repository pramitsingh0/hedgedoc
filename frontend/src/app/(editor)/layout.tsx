/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import '../../../global-styles/index.scss'
import { ApplicationLoader } from '../../components/application-loader/application-loader'
import { BaseUrlContextProvider } from '../../components/common/base-url/base-url-context-provider'
import { FrontendConfigContextProvider } from '../../components/common/frontend-config-context/frontend-config-context-provider'
import { MotdModal } from '../../components/common/motd-modal/motd-modal'
import { DarkMode } from '../../components/layout/dark-mode/dark-mode'
import { ExpectedOriginBoundary } from '../../components/layout/expected-origin-boundary'
import { UiNotificationBoundary } from '../../components/notifications/ui-notification-boundary'
import { StoreProvider } from '../../redux/store-provider'
import { getBaseUrls } from '../../utils/base-url-parser'
import { configureLuxon } from '../../utils/configure-luxon'
import { getFrontendConfig } from '../../utils/frontend-config-fetcher'
import type { Metadata } from 'next'
import React from 'react'

configureLuxon()

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const baseUrls = getBaseUrls()
  const frontendConfig = await getFrontendConfig()

  return (
    <html lang='en'>
      <head>
        <base href={baseUrls?.editor} />
        <link color='#b51f08' href='/icons/safari-pinned-tab.svg' rel='mask-icon' />
      </head>
      <body>
        <ExpectedOriginBoundary expectedOrigin={baseUrls.editor}>
          <BaseUrlContextProvider baseUrls={baseUrls}>
            <FrontendConfigContextProvider config={frontendConfig}>
              <StoreProvider>
                <ApplicationLoader>
                  <DarkMode />
                  <MotdModal />
                  <UiNotificationBoundary>{children}</UiNotificationBoundary>
                </ApplicationLoader>
              </StoreProvider>
            </FrontendConfigContextProvider>
          </BaseUrlContextProvider>
        </ExpectedOriginBoundary>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  themeColor: '#b51f08',
  applicationName: 'HedgeDoc',
  appleWebApp: {
    title: 'HedgeDoc'
  },
  description: 'HedgeDoc - Collaborative markdown notes',
  viewport: 'width=device-width, initial-scale=1',
  title: 'HedgeDoc',
  manifest: '/icons/site.webmanifest'
}
