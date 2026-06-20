/**
 * Framer Motion animation preset for interactive tap/hover effects.
 * Apply to a `motion.*` element via spread: `<motion.div {...tapEffect}>`.
 *
 * @type {{ whileHover: Object, whileTap: Object, transition: Object }}
 * @property {Object} whileHover - Scale up and lift the element slightly on hover.
 * @property {Object} whileTap   - Scale down and reset vertical position on press.
 * @property {Object} transition - Spring physics config (stiffness 500, damping 15).
 */
export const tapEffect = {
  whileHover: { scale: 1.02, y: -2 },
  whileTap: { scale: 0.98, y: 0 },
  transition: { type: "spring", stiffness: 500, damping: 15 }
};
