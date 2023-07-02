'use client'

/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { BaseAppBar } from './base-app-bar'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { Container } from 'react-bootstrap'

export const ContainerBaseAppBar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <BaseAppBar>{children}</BaseAppBar>
    </Container>
  )
}
