/* "Ettersom NO bare synes å kunne utløse effekter ved meget høye konsentrasjoner,
som den generelle befolkning sjelden eller aldri blir utsatt for,
omtales kun helseeffekter av NO2 i denne rapporten."

..hmmm ok.
*/

export default function pollutionToPercentage(dust, gas) {
  const PM10_MAX = 400;
  const PM25_MAX = 150;
  const NO2_MAX = 400;
  const O3_MAX = 240;
  return {
    PM10: ((dust[0].PM10 / PM10_MAX) * 100),
    PM25: ((dust[0]['PM2.5'] / PM25_MAX) * 100),
    NO2: ((gas[0].NO2 / NO2_MAX) * 100),
    O3: ((gas[0].O3 / O3_MAX) * 100),
  };
}
