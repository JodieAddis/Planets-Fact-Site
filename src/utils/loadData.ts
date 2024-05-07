import planetsData from "../data/data.json";

export const loadData = (name: string) => {
  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase(),
  );
  console.log(planet);
  return planet || null;
};
