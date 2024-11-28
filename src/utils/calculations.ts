export const calculateManaBase = (stats) => {
  const MODIFIER = 0.92;
  const totalCards = stats.totalCards;
  
  if (totalCards === 0) return {
    avgCMCPerCard: 0,
    totalManaCards: 0,
    redSources: 0,
    greenSources: 0,
    blueSources: 0,
    blackSources: 0,
    whiteSources: 0,
    colorlessSources: 0
  };

  const avgCMC = stats.totalCMC / totalCards;
  const totalManaNeeded = Math.round((totalCards * avgCMC * MODIFIER));
  
  const colorDistribution = {
    redSources: Math.round((stats.red / stats.totalCMC) * totalManaNeeded) || 0,
    greenSources: Math.round((stats.green / stats.totalCMC) * totalManaNeeded) || 0,
    blueSources: Math.round((stats.blue / stats.totalCMC) * totalManaNeeded) || 0,
    blackSources: Math.round((stats.black / stats.totalCMC) * totalManaNeeded) || 0,
    whiteSources: Math.round((stats.white / stats.totalCMC) * totalManaNeeded) || 0,
    colorlessSources: Math.round((stats.colorless / stats.totalCMC) * totalManaNeeded) || 0
  };

  return {
    avgCMCPerCard: avgCMC.toFixed(2),
    totalManaCards: totalManaNeeded,
    ...colorDistribution
  };
};