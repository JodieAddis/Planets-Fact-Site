interface PlanetImageProps {
  view: string;
  url: string;
  pinUrl: string;
}

const Component = ({ view, url, pinUrl }: PlanetImageProps) => {
  return (
    <div className="mb-10 flex items-center justify-center lg:mb-0">
      {view == "" && (
        <img src={url} alt="planet image" className="w-1/3 lg:w-5/6" />
      )}
      {view == "overview" && (
        <img src={url} alt="planet image" className="w-1/3 lg:w-5/6" />
      )}
      {view == "structure" && (
        <img src={url} alt="planet image" className="w-1/3 lg:w-5/6" />
      )}
      {view == "surface" && (
        <div className="relative pb-10">
          <img
            src={url}
            alt="planet image"
            className="mx-auto w-1/3 lg:w-5/6"
          />
          <img src={pinUrl} alt="planet image" className="mx-auto w-1/6" />
        </div>
      )}
    </div>
  );
};

export default Component;
