import { useEffect, useState } from "react";
import * as d3 from "d3";
import { Path, Svg } from "./styles";

type Props = {
  geojson: any;
  width: number;
  height: number;
};

interface PathCountry {
  id: string;
  name: string;
  path?: string;
}

function WorldMap({ geojson, width, height }: Props) {
  const [countries, setCountries] = useState<PathCountry[]>([]);

  useEffect(() => {
    const projection = d3.geoMercator().fitSize([width, height], geojson);
    const genPath = d3.geoPath().projection(projection);

    const countries: PathCountry[] = geojson.features.map((feature: any) => {
      const { properties, geometry } = feature;
      return { ...properties, path: genPath(geometry) };
    });

    setCountries(countries);
  }, [width, height, geojson]);

  return (
    <Svg width={width} height={height}>
      {countries.map(({ id, name, path }, index) => (
        <Path key={index} data-testid={name} d={path} />
      ))}
    </Svg>
  );
}

export default WorldMap;
