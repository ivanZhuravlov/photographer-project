export default interface TransitionGroupProps {
  entering?: Record<string, unknown>;
  entered?: Record<string, unknown>;
  exiting?: Record<string, unknown>;
  exited?: Record<string, unknown>;
  unmounted?: Record<string, unknown>;
}
