interface PlanetImageProps {
  view: string;
  url: string | undefined;
  pinUrl: string;
}

const Component = ({ view, url, pinUrl }: PlanetImageProps) => {
  return (
    <div className="mb-10 flex items-center justify-center md:mb-0">
      {view == "" && (
        <img src={url} alt="planet image" className="planet_image" />
      )}
      {view == "overview" && (
        <img src={url} alt="planet image" className="planet_image" />
      )}
      {view == "structure" && (
        <img src={url} alt="planet image" className="planet_image" />
      )}
      {view == "surface" && (
        <div className="planet_image relative mb-10 lg:mb-0">
          <img src={url} alt="planet image" className=" mx-auto" />
          <img
            src={pinUrl}
            alt="planet image"
            className="absolute left-1/2 top-3/4 z-10 mx-auto w-1/2 -translate-x-1/2 -translate-y-1/3 transform md:w-1/4 "
          />
        </div>
      )}
    </div>
  );
};

export default Component;
