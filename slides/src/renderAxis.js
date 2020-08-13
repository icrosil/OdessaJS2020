class TrendChart extends Component {
  renderAxis() {
    const { hideDomain, textStyle, lineStyle, d3Axis, scale, renderAxis } = this.props;

    const axisElement = d3.select(this.axis).call(d3Axis.scale(scale));

    // remove domain line
    if (hideDomain) axisElement.select('.domain').remove();

    // add styles to textElements
    axisElement
      .selectAll('.tick text')
      .style('fill', textStyle.fill)
      .style('stroke', textStyle.stroke)
      .style('font-size', textStyle.fontSize);

    forEach(lineStyle, (style, key) => {
      axisElement.selectAll('.tick line').attr(key, style);
    });
  }

  // lifecycles
  render() {}
}
