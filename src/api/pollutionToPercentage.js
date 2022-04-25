import aqCategory from '../utils/aqCategory';

/* "Ettersom NO bare synes å kunne utløse effekter ved meget høye konsentrasjoner,
som den generelle befolkning sjelden eller aldri blir utsatt for,
omtales kun helseeffekter av NO2 i denne rapporten."

..hmmm ok.
*/

// _MAX values from:
// https://luftkvalitet.miljodirektoratet.no/artikkel/artikler/helserad_og_forurensningsklasser/#Forurensningsklasser

export default function pollutionToPercentage(dust, gas) {
  const { PM10, 'PM2.5': PM25 } = dust[0];
  const { NO2, O3 } = gas[0];

  const PM10_MAX = 400;
  const PM25_MAX = 150;
  const NO2_MAX = 400;
  const O3_MAX = 240;

  // the following values ensure that 'very poor' starts at 90% instead of 100%
  // this is more informative as the last 10% can be
  // used by experienced users to infer the level of pollution
  // above the maximum threshold for 'very poor'
  const overhead = 0.1;
  const ADJUSTED_PM10_MAX = PM10_MAX + (PM10_MAX * overhead);
  const ADJUSTED_PM25_MAX = PM25_MAX + (PM25_MAX * overhead);
  const ADJUSTED_NO2_MAX = NO2_MAX + (NO2_MAX * overhead);
  const ADJUSTED_O3_MAX = O3_MAX + (O3_MAX * overhead);

  return [
    {
      name: 'PM10',
      percentage: (PM10 / ADJUSTED_PM10_MAX) * 100,
      category: aqCategory('PM10', PM10),
      realValue: PM10,
    },
    {
      name: 'PM2.5',
      percentage: ((PM25 / ADJUSTED_PM25_MAX) * 100),
      category: aqCategory('PM25', PM25),
      realValue: PM25,
    },
    {
      name: 'NO2',
      percentage: ((NO2 / ADJUSTED_NO2_MAX) * 100),
      category: aqCategory('NO2', NO2),
      realValue: NO2,
    },
    {
      name: 'O3',
      percentage: ((O3 / ADJUSTED_O3_MAX) * 100),
      category: aqCategory('O3', O3),
      realValue: O3,
    },
  ];
}
