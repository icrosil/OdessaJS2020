function TimeLine({ viewBox, svgProps }) {
  const [data] = useState(defaultData);

  const [xScale, yScale, line, area] = useMemo(
    () => getScales({ viewBox, data }),
    [viewBox, data],
  );

  return (
    <section>
      <svg {...svgProps}>
        <Stripe color={colors.stripe} />
        <Gradient />
        <Path />
        {data.map(({ date, value }) => (
          <Circle key={`${date}_${value}`} />
        ))}
        <Axis scale={xScale} translateY={dimension.height} />
      </svg>
    </section>
  );
}
