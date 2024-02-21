import styled from "styled-components";

export const WeatherLi = styled.li`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100px;
 padding: 10px;
 border-radius: 10px;
 background-color: #f5f5f5;
`;
export const Svg = styled.svg`
 stroke-width: 2;

 width: 24px;
 height: 24px;
`;

export const WeatherTitle = styled.p`
 font-size: 12px;
 color: #b9b9b9;
 margin-bottom: 20px;
`;

export const WeatherDate = styled.p`
 font-size: 12px;
 color: #0c0c0c;
 margin-top: 20px;
`;
