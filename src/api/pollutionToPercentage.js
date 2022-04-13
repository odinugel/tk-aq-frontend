import aqCategory from '../utils/aqCategory';

/* "Ettersom NO bare synes å kunne utløse effekter ved meget høye konsentrasjoner,
som den generelle befolkning sjelden eller aldri blir utsatt for,
omtales kun helseeffekter av NO2 i denne rapporten."

..hmmm ok.
*/

// _MAX values from:
// https://luftkvalitet.miljodirektoratet.no/artikkel/artikler/helserad_og_forurensningsklasser/#Forurensningsklasser

export default function pollutionToPercentage(dust, gas) {
  const PM10_MAX = 400;
  const PM25_MAX = 150;
  const NO2_MAX = 400;
  const O3_MAX = 240;
  const { PM10, 'PM2.5': PM25 } = dust[0];
  const { NO2, O3 } = gas[0];

  return [
    {
      name: 'PM10',
      percentage: ((PM10 / PM10_MAX) * 100),
      category: aqCategory('PM10', PM10),
      realValue: PM10,
    },
    {
      name: 'PM2.5',
      percentage: ((PM25 / PM25_MAX) * 100),
      category: aqCategory('PM25', PM25),
      realValue: PM25,
    },
    {
      name: 'NO2',
      percentage: ((NO2 / NO2_MAX) * 100),
      category: aqCategory('NO2', NO2),
      realValue: NO2,
    },
    {
      name: 'O3',
      percentage: ((O3 / O3_MAX) * 100),
      category: aqCategory('O3', O3),
      realValue: O3,
    },
  ];
}
