const pollutantDescriptions = {
  PM10: {
    text: ['Svevestøv (partikler, PM) består av små, luftbårne partikler som kan stamme fra forbrenningsprosesser, eller mekanisk slitasje. Eksponering for svevestøv i uteluft kan føre til helseskader. De viktigste kildene til partikler er veitrafikk, vedfyring og langtransportert forurensning.', 'PM₁₀ er partikler som har en diameter på mindre enn 10 μm. PM₂.₅ er partikler med diameter under 2.5 μm. PM₁₀ inneholder altså de samme partiklene som PM₂.₅, i tillegg til flere, større. PM₂.₅ er altså finere støvkorn, som kan holde seg svevende i ukevis og reise langt. Dette gjør at PM₂.₅ har en jevnere fordeling i byene enn PM₁₀, som bare holder seg svevende i opptil noen timer.', 'Folkehelseinstituttet har kommet med luftkvalitetskriterier for svevestøv. For PM₁₀ er disse 30 µg/m³ i døgnmiddel, og 20 µg/m³ i årsmiddel. For PM₂.₅ er kriteriene 15 µg/m³ i døgnmiddel, og 8 µg/m³ i årsmiddel.'],
    link: { url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/svevestov/', text: 'Les mer om svevestøv på FHI.no' },
  },
  'PM2.5': {
    text: ['Svevestøv (partikler, PM) består av små, luftbårne partikler som kan stamme fra forbrenningsprosesser, eller mekanisk slitasje. Eksponering for svevestøv i uteluft kan føre til helseskader. De viktigste kildene til partikler er veitrafikk, vedfyring og langtransportert forurensning.', 'PM₁₀ er partikler som har en diameter på mindre enn 10 μm. PM₂.₅ er partikler med diameter under 2.5 μm. PM₁₀ inneholder altså de samme partiklene som PM₂.₅, i tillegg til flere, større. PM₂.₅ er altså finere støvkorn, som kan holde seg svevende i ukevis og reise langt. Dette gjør at PM₂.₅ har en jevnere fordeling i byene enn PM₁₀, som bare holder seg svevende i opptil noen timer.', 'Folkehelseinstituttet har kommet med luftkvalitetskriterier for svevestøv. For PM₁₀ er disse 30 µg/m³ i døgnmiddel, og 20 µg/m³ i årsmiddel. For PM₂.₅ er kriteriene 15 µg/m³ i døgnmiddel, og 8 µg/m³ i årsmiddel.'],
    link: { url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/svevestov/', text: 'Les mer om svevestøv på FHI.no' },
  },
  NO2: {
    text: ['Nitrogenmonoksid (NO) og nitrogendioksid (NO₂) er reaktive gasser som dannes ved høy temperatur i forbrenningsprosesser, og disse har fellesbetegnelsen NOₓ. Hovedkilden til NOₓ er veitrafikk. Befolkningsstudier har vist at kortvarig eksponering for NO₂ ned mot 20-40 µg/m³ (døgnmiddel) er assosiert med økt forekomst av dødsfall og sykelighet forbundet med luftveis-, hjerte- og karsykdommer. I tillegg forverrer høy konsentrasjon av NO₂ astma og bronkitt.', 'Folkehelseinstituttet har kommet med luftkvalitetskriterier for NO₂: 300 µg/m³ i 15-min-intervaller, 100 µg/m³ i time-intervaller, og 40 µg/m³ som årsmiddel.'],
    link: { url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/nitrogendioksid2/', text: 'Les mer om Nitrogendioksid på FHI.no' },
  },
  O3: {
    text: ['Ozon (O₃) er en reaktiv gass som finnes både nær bakken og høyere opp i atmosfæren. Høye konsentrasjoner av bakkenært ozon i Norge skyldes hovedsakelig langtransportert ozon fra Europa. Ozon kan gi betennelse og føre til skader i luftveiene, samt svekke luftveisfunksjon og øke luftveisplager. Det er også krav for O₃: 100 µg/m³ i time-intervaller, og 80 µg/m³ i 8-timers-intervaller'],
    link: { url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/ozon', text: 'Les mer om ozon på FHI.no' },
  },
};

export default pollutantDescriptions;
