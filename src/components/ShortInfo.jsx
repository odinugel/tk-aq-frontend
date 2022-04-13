export default function ShortInfo(category) {
  if (category === 'Good') { return 'Liten eller ingen risiko for helseeffekter.'; }
  if (category === 'Moderate') { return 'Moderat helserisiko - Helseeffekter kan forekomme hos enkelte astmatikere og personer med andre luftveissykdommer eller alvorlige hjertekarsykdommer. Friske personer vil sannsynligvis ikke ha helseeffekter.'; }
  if (category === 'Poor') { return 'Betydelig helserisiko - Helseeffekter forekommer hos astmatikere og personer med andre luftveissykdommer eller hjertekarsykdommer. Luftveisirritasjoner og ubehag kan forekomme hos friske personer.'; }
  if (category === 'Good') { return 'Liten eller ingen risiko for helseeffekter.'; }
  return 'Alvorlig helserisiko - Sårbare grupper i befolkningen er svært utsatte for helseeffekter. Luftveisirritasjoner og ubehag forekommer hos friske personer.';
}
