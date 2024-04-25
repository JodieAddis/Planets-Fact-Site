import planetsData from "../data/planets.json";

export const loadData = (name: string) => {
  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase(),
  );
  return planet || null;
};
