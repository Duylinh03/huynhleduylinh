export const useSpotlight = () => {
  if (process.server) return;

  const onMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty("--mx", `${x}%`);
    document.documentElement.style.setProperty("--my", `${y}%`);
  };

  window.addEventListener("mousemove", onMove, { passive: true });

  if (import.meta.hot) {
    import.meta.hot.dispose(() =>
      window.removeEventListener("mousemove", onMove),
    );
  }
};
