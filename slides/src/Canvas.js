function CanvasComponent() {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current?.getContext('2d');
    ctx.fillRect(0, 0, 100, 100);
  }, [canvasEl]);

  return (
    <canvas ref={canvasEl} width={300} height={300} />
  );
}
