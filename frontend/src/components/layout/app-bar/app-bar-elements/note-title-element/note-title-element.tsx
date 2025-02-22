/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { useMayEdit } from '../../../../../hooks/common/use-may-edit'
import { useNoteTitle } from '../../../../../hooks/common/use-note-title'
import { useTranslatedText } from '../../../../../hooks/common/use-translated-text'
import { UiIcon } from '../../../../common/icons/ui-icon'
import { ShowIf } from '../../../../common/show-if/show-if'
import React, { Fragment } from 'react'
import { Lock as IconLock } from 'react-bootstrap-icons'

/**
 * Renders the title of the current note and an optional read-only marker.
 */
export const NoteTitleElement: React.FC = () => {
  const isWriteable = useMayEdit()
  const noteTitle = useNoteTitle()
  const readOnlyLabel = useTranslatedText('appbar.editor.readOnly')

  return (
    <Fragment>
      <ShowIf condition={!isWriteable}>
        <span className={'text-secondary me-2'}>
          <UiIcon icon={IconLock} title={readOnlyLabel} />
        </span>
      </ShowIf>
      <span className={'text-truncate mw-100'}>{noteTitle}</span>
    </Fragment>
  )
}
