module.exports = function isPointsOnLine(points) {
  // Solution comes from counting Area by cartesian product
  // If area is equal to 0, then all points lie on a single line.
  if (points.length <= 2) return true;

  var area = 0;

  for (var i = 0; i < points.length - 1; i++) {
    area = area + points[i][0] * points[i + 1][1] - points[i][1] * points[i + 1][0];
  }
  area += points[points.length - 1][0] * points[0][1] - points[points.length - 1][1] * points[0][0];
  area = Math.abs(area / 2);

  return area === 0;
}
