import styled from "styled-components";

type TSvg = {
    width: number;
    height: number;
};
  
export const Svg = styled.svg.attrs<TSvg>((props: any) => ({
    viewBox: `0 0 ` + props.width + ` ` + props.height,
    preserveAspectRatio: `xMidYMid meet`,
    width: props.width,
    height: props.height,
}))``;
  
export const Path = styled.path`
    fill: #f7f7f7;
    stroke: #ccc;
`;

export const VisitedPath = styled.path`
    fill: #a1d76a;
    stroke: #88BE51;
`;

export const WantToVisitPath = styled.path`
    fill: #e9a3c9;
    stroke: #D08AB0;
`;