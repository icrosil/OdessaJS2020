function AxisHook({ d3Axis, scale, translateX, translateY, renderAsap }) {
  const ref = useRef(renderAsap ? document.createElement('g') : undefined);

  useEffect(() => {
    d3.select(ref.current).call(d3Axis.scale(scale));
  }, [d3Axis, scale])

  if (renderAsap) {
    ref.current.setAttribute(
      'transform',
      `translate(${translateX}, ${translateY})`,
    );
    d3.select(ref.current).call(d3Axis.scale(scale));
    const [axis] = reactHtmlParser(ref.current.outerHTML);
    return axis;
  }

  return <g ref={ref} transform={`translate(${translateX}, ${translateY})`} />
}
