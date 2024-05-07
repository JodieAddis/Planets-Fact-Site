interface PlanetImageProps {
  view: string;
  url: string;
}

const Component = ({ view, url }: PlanetImageProps) => {
  return (
    <div className="mb-10 flex items-center justify-center lg:mb-0">
      {view == "" && (
        <img src={url} alt="planet image" className="w-1/3 lg:w-5/6" />
      )}
      {view == "overview" && (
        <img src={url} alt="planet image" className="w-1/3" />
      )}
      {view == "structure" && (
        <img src={url} alt="planet image" className="w-1/3" />
      )}
      {view == "surface" && (
        <div className="relative pb-10">
          <img
            src={`../../../../public/assets/img/${name}.svg`}
            alt="planet image"
            className="mx-auto w-1/3"
          />
          <img
            src={`../../../../public/assets/img/geology-${name}.png`}
            alt="planet image"
            className="mx-auto w-1/6"
          />
        </div>
      )}
    </div>
  );
};

export default Component;
