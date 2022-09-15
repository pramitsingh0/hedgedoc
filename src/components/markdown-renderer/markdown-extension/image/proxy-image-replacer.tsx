/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import type { Element } from 'domhandler'
import React from 'react'
import type { NodeReplacement } from '../../replace-components/component-replacer'
import { ComponentReplacer, DO_NOT_REPLACE } from '../../replace-components/component-replacer'
import { ProxyImageFrame } from './proxy-image-frame'

export type ImageClickHandler = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void

/**
 * Detects image tags and loads them via image proxy if configured.
 */
export class ProxyImageReplacer extends ComponentReplacer {
  private readonly clickHandler?: ImageClickHandler

  constructor(clickHandler?: ImageClickHandler) {
    super()
    this.clickHandler = clickHandler
  }

  public replace(node: Element): NodeReplacement {
    return node.name !== 'img' ? (
      DO_NOT_REPLACE
    ) : (
      <ProxyImageFrame
        id={node.attribs.id}
        className={`${node.attribs.class} cursor-zoom-in`}
        src={node.attribs.src}
        alt={node.attribs.alt}
        title={node.attribs.title}
        width={node.attribs.width}
        height={node.attribs.height}
        onClick={this.clickHandler}
      />
    )
  }
}
