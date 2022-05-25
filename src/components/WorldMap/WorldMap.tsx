import { useEffect, useState } from "react";
import * as d3 from "d3";
import { Path, Svg, VisitedPath, WantToVisitPath } from "./styles";

type Props = {
  geojson: any;
  width: number;
  height: number;
  visited: string[];
  wantToVisit: string[];
};

interface PathCountry {
  name: string;
  path?: string;
}

function WorldMap({ geojson, width, height, visited, wantToVisit }: Props) {
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
      {countries.map(({ name, path }, index) => {
        if (visited.includes(name)) {
          return <VisitedPath key={index} data-testid={name} d={path} />;
        } else if (wantToVisit.includes(name)) {
          return <WantToVisitPath key={index} data-testid={name} d={path} />;
        }
        return <Path key={index} data-testid={name} d={path} />;
      })}
    </Svg>
  );
}

export default WorldMap;
