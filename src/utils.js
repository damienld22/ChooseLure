// FISH
export const PERCH = 'Perche';
export const PIKE = 'Brochet';

// SEASONS
export const SUMMER = 'Été';
export const WINTER = 'Hiver';
export const AUTUMN = 'Automne';
export const SPRING = 'Printemps';

export function putElementInMiddle(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
}

export function getResultsFromContext({targetFish, season}) {
  if (targetFish === PERCH) {
    return getPerchResults({ season });
  } else if (targetFish === PIKE) {
    return getPikeResults({ season });
  }
}

function getPikeResults({season}) {
  if (season === SPRING) {
    return [
      "Le spinnerbait est un classique toute saison, surtout en début de saison"
    ]
  } else if (season === SUMMER) {
    return [
      "Le spinnerbait est un classique toute saison"
    ];
  } else if (season === AUTUMN) {
    return [
      "Le spinnerbait est un classique toute saison"
    ];
  } else if (season === WINTER) {
    return [
      "Le spinnerbait est un classique toute saison"
    ]
  }


  return [];
}

function getPerchResults({season}) {
  return [];
}