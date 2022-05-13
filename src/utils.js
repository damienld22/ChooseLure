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
      "Le spinnerbait est un classique toute saison, surtout en début de saison",
      "Le jerkbait couleur naturelle, notamment pour la pêche en pleine eau",
      "Le crankbait couleur naturelle",
      "La cuillère est toujours un classique"
    ]
  } else if (season === SUMMER) {
    return [
      "Le spinnerbait est un classique toute saison",
      "La cuillère est toujours un classique",
      "Uilisation de leurres plus petits de manière générale"
    ];
  } else if (season === AUTUMN) {
    return [
      "Le spinnerbait est un classique toute saison",
      "La cuillère est toujours un classique",
      "Le crankbait pour une propection large"
    ];
  } else if (season === WINTER) {
    return [
      "Le spinnerbait est un classique toute saison",
      "La cuillère est toujours un classique",
      "Utiliser des plus gros leurres de manière générale"
    ]
  } else {
    return [];
  }
}

function getPerchResults({season}) {
  if (season === SPRING) {
    return [
    ]
  } else if (season === SUMMER) {
    return [
    ];
  } else if (season === AUTUMN) {
    return [
    ];
  } else if (season === WINTER) {
    return [
    ]
  } else {
    return [];
  }
}