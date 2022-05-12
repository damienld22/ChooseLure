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