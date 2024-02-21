import styled from "styled-components";

export const TripContainer = styled.li`
 width: 200px;
 height: 275px;
 box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
  rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

export const TripButton = styled.button`
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
 padding: 0;
 margin: 0;
 outline: none;
 border: none;
 &:focus {
  border: 1px solid #a3d3ff;
 }
`;

export const TripImgContainer = styled.div``;
export const TripImg = styled.img`
 height: 200px;
 width: 100%;
 object-fit: cover;
 object-position: center;
`;

export const TripInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 100%;
 padding: 20px;
 gap: 5px;
`;

export const TripTitle = styled.h3`
 font-size: 14px;
 text-transform: capitalize;
 font-weight: 700;
 color: #808080;
`;
export const TripDate = styled.p`
 font-size: 12px;
 color: #b9b9b9;
`;
