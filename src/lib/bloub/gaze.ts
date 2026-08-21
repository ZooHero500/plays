/**
 * Gaze helper copied from https://github.com/jeremy-prt/bloub `src/ui/gaze.ts`.
 * Vanilla TS only — no Vue.
 *
 * MIT License — Copyright (c) 2026 Jérémy Perret
 */

import type { Look } from './bot/engine'
import { clamp } from './bot/math'

/**
 * Angles en degres d'orientation de tete. CHOISIS, pas releves : la video de
 * reference ne montre aucun suivi de curseur. Assez amples pour se distinguer de
 * la derive au repos (±7deg de lacet, ±5,5 de tangage), assez retenus pour
 * qu'aucun oeil ne parte derriere le limbe de la sphere.
 */
export const YAW_MAX = 16
export const PITCH_MAX = 13

/**
 * Hauteur a laquelle le regard se tient, curseur au centre. CHOISIE : legerement
 * au-dessus de l'equateur, ce qui donne un bot attentif plutot qu'absent.
 */
export const PITCH = 10

/**
 * Direction ou la tete se pose dans la vue des reglages : le bot cesse de regarder en haut a
 * droite (sa pose de repos) pour regarder a GAUCHE, du cote du panneau.
 */
export const TURN = 26

/**
 * Tour complet parcouru EN CHEMIN : les yeux ne glissent pas en travers du
 * visage, ils font le tour de la boule avant d'arriver.
 */
export const SPIN = 360

/**
 * Duree du tour. Un peu plus courte que le bloc d'entree (`swirl`) : les yeux
 * doivent etre poses a gauche avant que les anneaux ne s'effacent.
 */
export const TURN_TIME = 1.1

export interface Aim {
  /** ecart horizontal du pointeur au centre du bot, -1 a 1 (droite positive) */
  nx: number
  /** ecart vertical, -1 a 1, dans le sens de l'ecran (bas positif) */
  ny: number
  /** avancement de l'arrivee, 0 a 1 */
  tour: number
  /** false = aucun pointeur connu : la tete reste tournee, mais elle revit */
  pointer: boolean
}

/**
 * Cible de regard.
 *
 * `tour` mene tout : il fait monter l'emprise sur la pose (`mix`) et fondre le
 * tour parcouru (`spin`) en meme temps. A 0 la pose de l'etat commande seule ; a
 * 1 la tete est posee a gauche et suit le curseur.
 */
export function lookTarget({ nx, ny, tour, pointer }: Aim): Look {
  return {
    yaw: -TURN + nx * YAW_MAX,
    // tangage positif = regard vers le haut, alors que le y de l'ecran descend
    pitch: PITCH - ny * PITCH_MAX,
    mix: tour,
    spin: SPIN * (1 - tour),
    wander: pointer ? 0 : 1
  }
}
