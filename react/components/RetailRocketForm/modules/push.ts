// @ts-ignore
window.rrApiOnReady = window.rrApiOnReady || [];

export default function push(event: () => void) {
  // @ts-ignore
    window.rrApiOnReady.push(event);
}
