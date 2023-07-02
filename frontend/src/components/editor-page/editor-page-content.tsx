'use client'

/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { CommunicatorImageLightbox } from '../markdown-renderer/extensions/image/communicator-image-lightbox'
import { ExtensionEventEmitterProvider } from '../markdown-renderer/hooks/use-extension-event-emitter'
import { ChangeEditorContentContextProvider } from './change-content-context/codemirror-reference-context'
import { EditorPane } from './editor-pane/editor-pane'
import { useComponentsFromAppExtensions } from './editor-pane/hooks/use-components-from-app-extensions'
import { useNoteAndAppTitle } from './head-meta-properties/use-note-and-app-title'
import { useScrollState } from './hooks/use-scroll-state'
import { useSetScrollSource } from './hooks/use-set-scroll-source'
import { useUpdateLocalHistoryEntry } from './hooks/use-update-local-history-entry'
import { RealtimeConnectionAlert } from './realtime-connection-alert/realtime-connection-alert'
import { RendererPane } from './renderer-pane/renderer-pane'
import { Sidebar } from './sidebar/sidebar'
import { Splitter } from './splitter/splitter'
import React, { useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export enum ScrollSource {
  EDITOR = 'editor',
  RENDERER = 'renderer'
}

/**
 * This is the content of the actual editor page.
 */
export const EditorPageContent: React.FC = () => {
  useTranslation()

  useUpdateLocalHistoryEntry()

  const scrollSource = useRef<ScrollSource>(ScrollSource.EDITOR)
  const [editorScrollState, onMarkdownRendererScroll] = useScrollState(scrollSource, ScrollSource.EDITOR)
  const [rendererScrollState, onEditorScroll] = useScrollState(scrollSource, ScrollSource.RENDERER)
  const setRendererToScrollSource = useSetScrollSource(scrollSource, ScrollSource.RENDERER)
  const setEditorToScrollSource = useSetScrollSource(scrollSource, ScrollSource.EDITOR)

  const leftPane = useMemo(
    () => (
      <EditorPane
        scrollState={editorScrollState}
        onScroll={onEditorScroll}
        onMakeScrollSource={setEditorToScrollSource}
      />
    ),
    [onEditorScroll, editorScrollState, setEditorToScrollSource]
  )

  const rightPane = useMemo(
    () => (
      <RendererPane
        frameClasses={'h-100 w-100'}
        onMakeScrollSource={setRendererToScrollSource}
        onScroll={onMarkdownRendererScroll}
        scrollState={rendererScrollState}
      />
    ),
    [onMarkdownRendererScroll, rendererScrollState, setRendererToScrollSource]
  )

  const editorExtensionComponents = useComponentsFromAppExtensions()
  useNoteAndAppTitle()

  return (
    <ChangeEditorContentContextProvider>
      <ExtensionEventEmitterProvider>
        {editorExtensionComponents}
        <CommunicatorImageLightbox />
        <div className={'flex-fill d-flex h-100 w-100 overflow-hidden flex-row'}>
          <Splitter
            left={leftPane}
            right={rightPane}
            additionalContainerClassName={'overflow-hidden position-relative'}
          />
          <Sidebar />
        </div>
      </ExtensionEventEmitterProvider>
    </ChangeEditorContentContextProvider>
  )
}
