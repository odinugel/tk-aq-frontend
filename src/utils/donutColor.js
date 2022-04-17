export default function donutColor(category) {
  if (category === 1) { return 'donutGood'; }
  if (category === 2) { return 'donutModerate'; }
  if (category === 3) { return 'donutPoor'; }
  return 'donutVeryPoor';
}
