/*
 * Initial viewport dimensions are useful on mobile devices where browser elements
 * are gradually hidden as the user scrolls from the beginning of the page.
 */
export function setupVisualViewportCSSVariables(): void {
  if (window.visualViewport) {
    document.documentElement.style.setProperty('--visualviewport-initial-height', window.visualViewport.height + 'px');
    document.documentElement.style.setProperty('--visualviewport-initial-width', window.visualViewport.width + 'px');

    window.visualViewport.addEventListener('resize', e => {
      document.documentElement.style.setProperty('--visualviewport-height', window.visualViewport.height + 'px');
      document.documentElement.style.setProperty('--visualviewport-width', window.visualViewport.width + 'px');
    }, {passive: true});
  }
}
