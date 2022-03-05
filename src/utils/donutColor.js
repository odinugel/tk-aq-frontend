export default function donutColor(category) {
  if (category === 'Good') { return 'donutGood'; }
  if (category === 'Moderate') { return 'donutModerate'; }
  if (category === 'Poor') { return 'donutPoor'; }
  return 'donutVeryPoor';
}
