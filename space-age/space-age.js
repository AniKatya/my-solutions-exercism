//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const planetName = planet.toLowerCase();
  const earthYears = seconds / 31557600;
  let coef = 0;
  switch (planetName) {
    case "mercury":
      coef = 0.2408467;
      break;
    case "venus":
      coef = 0.61519726;
      break;
    case "mars":
      coef = 1.8808158;
      break;
    case "jupiter":
      coef = 11.862615;
      break;
    case "saturn":
      coef = 29.447498;
      break;
    case "uranus":
      coef = 84.016846;
      break;
    case "neptune":
      coef = 164.79132;
      break;
    case "earth":
      coef = 1;
      break;
    default:
      coef = 0;
      break;
  }
  const age = +((earthYears / coef).toFixed(2));
  return age;
};

