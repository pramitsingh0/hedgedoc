'use client'

/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { NewNoteButton } from '../../common/new-note-button/new-note-button'
import { SettingsButton } from '../../global-dialogs/settings-dialog/settings-button'
import { BrandingElement } from './app-bar-elements/branding-element'
import { HelpDropdown } from './app-bar-elements/help-dropdown/help-dropdown'
import { UserElement } from './app-bar-elements/user-element'
import styles from './navbar.module.scss'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Trans } from 'react-i18next'

/**
 * Renders the base app bar with branding, help, settings user elements.
 */
export const BaseAppBar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Navbar expand={true} className={'px-2 py-1 align-items-center'}>
      <Nav className={`d-flex align-items-center justify-content-start gap-2 flex-grow-1 ${styles.side}`}>
        <BrandingElement />
        <span className={styles.history}>
          <Button variant={'secondary'} href={'/history'}>
            <Trans i18nKey='landing.navigation.history' />
          </Button>
        </span>
      </Nav>
      <Nav className={`d-flex align-items-center ${styles.center}`}>
        <h4 className={'m-0'}>{children}</h4>
      </Nav>
      <Nav className={`d-flex align-items-center justify-content-end gap-2 flex-grow-1 ${styles.side}`}>
        <HelpDropdown />
        <SettingsButton />
        <NewNoteButton />
        <UserElement />
      </Nav>
    </Navbar>
  )
}
