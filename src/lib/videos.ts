/**
 * YouTube video IDs per tape slot. Use `null` for loading placeholders.
 * Replace with real IDs when the channel has footage.
 *
 * @example
 * export const TAPE_SLOTS = ["abc123", null, null] as const;
 */
export const TAPE_SLOTS = [null, null, null] as const;

export type TapeSlot = (typeof TAPE_SLOTS)[number];

export const TAPE_COUNT = TAPE_SLOTS.length;

/** @deprecated Use TAPE_SLOTS — kept for imports not yet updated */
export const VIDEO_IDS = TAPE_SLOTS;
