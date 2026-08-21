/**
 * Paint a Bloub idle frame as solid body + solid eye paths.
 * No <mask>, no paper backing — eyes sit on top of the orange body.
 */

import type { BotFrame } from './bot/engine'

export const BODY_FILL = '#F29425'
export const EYE_FILL = '#F2EFE8'
export const FACE_PX = 64

/** Tight crop around the idle ball (r = 100). Leaves slack for breath/drift. */
export const VIEW_HALF = 108
export const VIEWBOX = `${-VIEW_HALF} ${-VIEW_HALF} ${VIEW_HALF * 2} ${VIEW_HALF * 2}`

const NS = 'http://www.w3.org/2000/svg'
const EYE_SLOTS = 2

export function applyFrame(svg: SVGSVGElement, frame: BotFrame): void {
  const body = svg.querySelector('.bloub-body')
  if (body instanceof SVGPathElement) {
    body.setAttribute('d', frame.bodyPath)
    body.setAttribute('fill', BODY_FILL)
    if (frame.bodyAlpha < 1) body.setAttribute('opacity', String(frame.bodyAlpha))
    else body.removeAttribute('opacity')
  }

  const nodes = svg.querySelectorAll('.bloub-eye')
  for (let i = 0; i < nodes.length; i++) {
    const el = nodes[i]
    if (!(el instanceof SVGPathElement)) continue
    const eye = frame.eyes[i]
    if (!eye) {
      el.setAttribute('d', '')
      el.setAttribute('opacity', '0')
      continue
    }
    el.setAttribute('d', eye.d)
    el.setAttribute('transform', eye.matrix)
    el.setAttribute('opacity', String(eye.alpha))
    el.setAttribute('fill', EYE_FILL)
  }
}

export function ensureSvg(host: HTMLElement): SVGSVGElement {
  const existing = host.querySelector('svg')
  if (existing) {
    if (!existing.querySelector('.bloub-eye')) {
      for (let i = host.querySelectorAll('.bloub-eye').length; i < EYE_SLOTS; i++) {
        existing.appendChild(eyePath())
      }
    }
    return existing
  }

  const svg = document.createElementNS(NS, 'svg')
  svg.setAttribute('viewBox', VIEWBOX)
  svg.setAttribute('width', String(FACE_PX))
  svg.setAttribute('height', String(FACE_PX))
  svg.setAttribute('aria-hidden', 'true')

  const body = document.createElementNS(NS, 'path')
  body.setAttribute('class', 'bloub-body')
  body.setAttribute('fill', BODY_FILL)
  svg.appendChild(body)

  for (let i = 0; i < EYE_SLOTS; i++) svg.appendChild(eyePath())

  host.appendChild(svg)
  return svg
}

function eyePath(): SVGPathElement {
  const eye = document.createElementNS(NS, 'path')
  eye.setAttribute('class', 'bloub-eye')
  eye.setAttribute('fill', EYE_FILL)
  return eye
}
