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
    fill: #0000ff;
    stroke: #ccc;
`;