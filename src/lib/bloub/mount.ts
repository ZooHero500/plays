/**
 * Catalog-only Bloub island. Vanilla TS, no Vue.
 * Stays on `idle`. Never starts defaultCycle(). Body stays pinned.
 *
 * Follow: pointermove (ignore touch) → lookTarget → engine.setLook.
 * Blink / wander: inside BotEngine.sample via liveliness.
 * prefers-reduced-motion: one frozen idle frame, no rAF, no look.
 */

import { BotEngine } from './bot/engine'
import { clamp, easings } from './bot/math'
import { RAYON } from './bot/repere'
import { applyFrame, ensureSvg } from './draw'
import { lookTarget, TURN_TIME } from './gaze'

const MAX_DT = 0.064

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function mountBloub(host: HTMLElement): void {
  const engine = new BotEngine(RAYON, 'idle')
  const svg = ensureSvg(host)

  applyFrame(svg, engine.sample(0))
  if (prefersReducedMotion()) return

  let raf = 0
  let last = 0
  let clock = 0
  let pointer: { x: number; y: number } | null = null
  let aiming = false
  let turnSince = 0

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === 'touch') return
    pointer = { x: event.clientX, y: event.clientY }
  }

  const onPointerLeave = () => {
    pointer = null
  }

  const release = () => {
    if (!aiming) return
    engine.setLook(null, clock, TURN_TIME)
    aiming = false
  }

  const aim = () => {
    if (!pointer) {
      release()
      return
    }
    const box = svg.getBoundingClientRect()
    if (box.width === 0 || box.height === 0) return
    if (!aiming) turnSince = clock
    const halfW = Math.max(1, window.innerWidth / 2)
    const halfH = Math.max(1, window.innerHeight / 2)
    engine.setLook(
      lookTarget({
        nx: clamp((pointer.x - (box.left + box.width / 2)) / halfW, -1, 1),
        ny: clamp((pointer.y - (box.top + box.height / 2)) / halfH, -1, 1),
        tour: easings.easeOutQuint(clamp((clock - turnSince) / TURN_TIME)),
        pointer: true,
      }),
      clock,
    )
    aiming = true
  }

  const tick = (ms: number) => {
    raf = requestAnimationFrame(tick)
    const dt = last ? Math.min((ms - last) / 1000, MAX_DT) : 0
    last = ms
    clock += dt
    aim()
    applyFrame(svg, engine.sample(clock))
  }

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerleave', onPointerLeave)
  raf = requestAnimationFrame(tick)

  // Unused in static Astro, kept so a future nav swap can cancel cleanly.
  void raf
}
