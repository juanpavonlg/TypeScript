const REQUIRED_ELEMENTS = ["H", "C", "N", "O", "P", "Ca"];

export function bestPlanet(solarSystem: string[], maxSize: number): string {
  let ans = "";
  let max = 0;
  for (const planet of solarSystem) {
    const regExp = /(?=.*H[^a-z])(?=.*C[^a-z])(?=.*N[^a-z])(?=.*O[^a-z])(?=.*P[^a-z])(?=.*Ca)/;
    if (regExp.test(planet)) {
      const sfc = +planet.match(/\d+/)![0];
      if (sfc > max && sfc <= maxSize) {
        ans = planet;
        max = sfc;
      }
    }
  }
  return ans;
} // bestPlanet()

console.log(bestPlanet(["OHNCCaP_100", "OHC_200", "OCa_50", "OHCCaP_400", "OHNCCaP_225", "OHCa_250"], 250));
console.log(bestPlanet(["GeTlPaCOMg_357","OCfNMnPHAcCaCn_229","DyCaPoC_18","PCaAcONC_232","CPHCaON_319","NHDyOSbMdCa_160","OHCaNP_378","CHRgNCaO_61","CmPuPOH_344"], 307));
