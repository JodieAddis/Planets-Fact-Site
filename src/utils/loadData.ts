import planetsData from "../data/data.json";

export const loadData = (name: string) => {
  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase(),
  );
  return planet || null;
};
