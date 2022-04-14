const translations = {
  closeBtn: {
    no: 'Lukk',
    en: 'Close',
  },
  sensorsBtn: {
    no: 'Sensorer',
    en: 'Sensors',
  },
  langBtn: {
    no: 'Språk',
    en: 'Language',
  },
  tkHeader: {
    no: 'TRONDHEIM KOMMUNE',
    en: 'TRONDHEIM MUNICIPALITY',
  },
  aqData: {
    no: 'LUFTKVALITETSDATA',
    en: 'AIR QUALITY DATA',
  },
  lastUpdate: {
    no: 'Sist oppdatert: ',
    en: 'Last update: ',
  },
  donutCategory: {
    1: {
      no: 'God',
      en: 'Good',
    },
    2: {
      no: 'Moderat',
      en: 'Moderate',
    },
    3: {
      no: 'Dårlig',
      en: 'Poor',
    },
    4: {
      no: 'Veldig dårlig',
      en: 'Very poor',
    },
  },
  O3: {
    text: {
      no: ['Ozon (O₃) er en reaktiv gass som finnes både nær bakken og høyere opp i atmosfæren. Høye konsentrasjoner av bakkenært ozon i Norge skyldes hovedsakelig langtransportert ozon fra Europa. Ozon kan gi betennelse og føre til skader i luftveiene, samt svekke luftveisfunksjon og øke luftveisplager. Det er også krav for O₃: 100 µg/m³ i time-intervaller, og 80 µg/m³ i 8-timers-intervaller'],
      en: ['Ozone (O₃) is a reactive gas found at ground level as well as higher up in the atmosphere. High concentrations of ozone in Norway are mainly caused by transported ozone from Europe. Ozone can cause inflammation and damages to the respiratory tract, and can reduce respiratory efficiency and worsen existing respiratory illnesses and diseases. There are criteria for the concentration of Ozone, with upper limits of average measurements being 100 µg/m³ for one-hour intervals and 80 µg/m³ for 8-hour intervals.'],
    },
    link: {
      text: {
        no: 'Les mer om ozon på FHI.no',
        en: 'More information about ozone at FHI.no',
      },
      url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/ozon',
    },
  },
  NO2: {
    text: {
      no: ['Nitrogenmonoksid (NO) og nitrogendioksid (NO₂) er reaktive gasser som dannes ved høy temperatur i forbrenningsprosesser, og disse har fellesbetegnelsen NOₓ. Hovedkilden til NOₓ er veitrafikk. Befolkningsstudier har vist at kortvarig eksponering for NO₂ ned mot 20-40 µg/m³ (døgnmiddel) er assosiert med økt forekomst av dødsfall og sykelighet forbundet med luftveis-, hjerte- og karsykdommer. I tillegg forverrer høy konsentrasjon av NO₂ astma og bronkitt.', 'Folkehelseinstituttet har kommet med luftkvalitetskriterier for NO₂: 300 µg/m³ i 15-min-intervaller, 100 µg/m³ i time-intervaller, og 40 µg/m³ som årsmiddel.'],
      en: ['Nitric oxide (NO) and nitrogen dioxide (NO₂) are reactive gases formed during combustion of fuels, with a common name NOₓ. The main source of NOₓ is motor vehicle traffic. Studies have shown that exposure to NO₂ at saturations of 20-40 µg/m³ (daily mean) are associated with increased mortality and morbidity related to respiratory tract infections and cardiovascular diseases.', 'The Norwegian Institute of Public Health has produced criteria for the concentration of NO₂ in Norwegian cities: the upper limits of average measurements are 300 µg/m³ for 15-minute intervals, 100 µg/m³ for one-hour intervals, and 40 µg/m³ as an annual mean.'],
    },
    link: {
      text: {
        no: 'Les mer om Nitrogendioksid på FHI.no',
        en: 'More information about nitric oxide at FHI.no',
      },
      url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/nitrogendioksid2/',
    },
  },
  PM10: {
    text: {
      no: ['Svevestøv (partikler, PM) består av små, luftbårne partikler som kan stamme fra forbrenningsprosesser, eller mekanisk slitasje. Eksponering for svevestøv i uteluft kan føre til helseskader. De viktigste kildene til partikler er veitrafikk, vedfyring og langtransportert forurensning. PM₁₀ er partikler som har en diameter på mindre enn 10 μm. PM₂.₅ er partikler med diameter under 2.5 μm. PM₁₀ inneholder altså de samme partiklene som PM₂.₅, i tillegg til flere, større. PM₂.₅ er altså finere støvkorn, som kan holde seg svevende i ukevis og reise langt. Dette gjør at PM₂.₅ har en jevnere fordeling i byene enn PM₁₀, som bare holder seg svevende i opptil noen timer.', 'Folkehelseinstituttet har kommet med luftkvalitetskriterier for svevestøv. For PM₁₀ er disse 30 µg/m³ i døgnmiddel, og 20 µg/m³ i årsmiddel. For PM₂.₅ er kriteriene 15 µg/m³ i døgnmiddel, og 8 µg/m³ i årsmiddel.'],
      en: ['Particulates (PM) are microscopic airborne particles that can be caused by the burning of fossil fuels and various industrial processes. They have impacts on climate and precipitation that adversely affect human health, in ways additional to direct inhalation. PM₁₀ describes particulates with a diameter of 10 μm or less, and PM₂.₅ describes particulates with a diameter of 2.5 μm or less. This means that PM₁₀ includes the same particulates as PM₂.₅, in addition to larger ones. PM₂.₅-particulates can stay airborne for days or even weeks, and therefore travel far. Because of this, PM₂.₅ is more evenly distributed in cities compared to larger particulates, which only stay airborne for a few hours.', 'In the charts, PM₂.₅ is colored orange, with PM₁₀ being the entire height of the bar. The Norwegian Institute of Public Health has produced criteria for particulates in Norwegian cities. The upper limits for PM₁₀ are 30 µg/m³ as a daily mean and 20 µg/m³ as an annual mean. The upper limits for PM₂.₅ are 15 µg/m³ as a daily mean and 8 µg/m³ as an annual mean.'],
    },
    link: {
      text: {
        no: 'Les mer om svevestøv på FHI.no',
        en: 'More information about particulates at FHI.no',
      },
      url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/svevestov/',
    },
  },
  'PM2.5': {
    text: {
      no: ['Svevestøv (partikler, PM) består av små, luftbårne partikler som kan stamme fra forbrenningsprosesser, eller mekanisk slitasje. Eksponering for svevestøv i uteluft kan føre til helseskader. De viktigste kildene til partikler er veitrafikk, vedfyring og langtransportert forurensning. PM₁₀ er partikler som har en diameter på mindre enn 10 μm. PM₂.₅ er partikler med diameter under 2.5 μm. PM₁₀ inneholder altså de samme partiklene som PM₂.₅, i tillegg til flere, større. PM₂.₅ er altså finere støvkorn, som kan holde seg svevende i ukevis og reise langt. Dette gjør at PM₂.₅ har en jevnere fordeling i byene enn PM₁₀, som bare holder seg svevende i opptil noen timer.', 'Folkehelseinstituttet har kommet med luftkvalitetskriterier for svevestøv. For PM₁₀ er disse 30 µg/m³ i døgnmiddel, og 20 µg/m³ i årsmiddel. For PM₂.₅ er kriteriene 15 µg/m³ i døgnmiddel, og 8 µg/m³ i årsmiddel.'],
      en: ['Particulates (PM) are microscopic airborne particles that can be caused by the burning of fossil fuels and various industrial processes. They have impacts on climate and precipitation that adversely affect human health, in ways additional to direct inhalation. PM₁₀ describes particulates with a diameter of 10 μm or less, and PM₂.₅ describes particulates with a diameter of 2.5 μm or less. This means that PM₁₀ includes the same particulates as PM₂.₅, in addition to larger ones. PM₂.₅-particulates can stay airborne for days or even weeks, and therefore travel far. Because of this, PM₂.₅ is more evenly distributed in cities compared to larger particulates, which only stay airborne for a few hours.', 'In the charts, PM₂.₅ is colored orange, with PM₁₀ being the entire height of the bar. The Norwegian Institute of Public Health has produced criteria for particulates in Norwegian cities. The upper limits for PM₁₀ are 30 µg/m³ as a daily mean and 20 µg/m³ as an annual mean. The upper limits for PM₂.₅ are 15 µg/m³ as a daily mean and 8 µg/m³ as an annual mean.'],
    },
    link: {
      text: {
        no: 'Les mer om svevestøv på FHI.no',
        en: 'More information about particulates at FHI.no',
      },
      url: 'https://www.fhi.no/nettpub/luftkvalitet/temakapitler/svevestov/',
    },
  },
  shortInfoGood: {
    no: 'Liten eller ingen risiko for helseeffekter.',
    en: 'Low or no risk of adverse effects.',
  },
  shortInfoModerate: {
    no: 'Moderat helserisiko - Helseeffekter kan forekomme hos enkelte astmatikere og personer med andre luftveissykdommer eller alvorlige hjertekarsykdommer. Friske personer vil sannsynligvis ikke ha helseeffekter.',
    en: 'Moderate risk of adverse effects - Adverse effects may occur in some Asthma and other respiratory diseases and serious cardiovascular diseases. Most likely no risk to healthy individuals.',
  },
  shortInfoPoor: {
    no: 'Betydelig helserisiko - Helseeffekter forekommer hos astmatikere og personer med andre luftveissykdommer eller hjertekarsykdommer. Luftveisirritasjoner og ubehag kan forekomme hos friske personer.',
    en: 'Considerable risk of adverse effects - Adverse effects occur in some Asthma and other respiratory diseases and cardiovascular disease. Respiratory irritation and discomfort may occur in healthy individuals.',
  },
  shortInfoVeryPoor: {
    no: 'Alvorlig helserisiko - Sårbare grupper i befolkningen er svært utsatte for helseeffekter. Luftveisirritasjoner og ubehag forekommer hos friske personer.',
    en: 'Serious risk of adverse effects - Sensitive population groups are very susceptible to adverse effects. Respiratory irritation and discomfort occur in healthy individuals.',
  },
};
export default translations;
