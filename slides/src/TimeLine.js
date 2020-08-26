function TimeLine({ viewBox, svgProps }) {
  const [data] = useState(defaultData);

  const [xScale, yScale, line, area] = useMemo(
    () => getScales({ viewBox, data }),
    [viewBox, data],
  );

  return (
    <section>
      <svg {...svgProps}>
        <Stripe color={colors.stripe} scale={yScale} />
        {data.map(({ line, id }) => (
          <GradientLine key={id} data={line} />
        ))}
        <AxisX scale={xScale} translateY={dimension.height} />
        <AxisY scale={yScale} />
      </svg>
    </section>
  );
}
