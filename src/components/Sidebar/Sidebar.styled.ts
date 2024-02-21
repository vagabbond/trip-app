import styled from "styled-components";

export const AppSideBar = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 width: 400px;
 padding: 20px;
 height: 100vh;
 background-color: #110e3b;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const AppSideBarTitle = styled.h2`
 font-size: 32px;
 font-weight: 700;
 color: #fff;
`;

export const AppSidiBarInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
 margin-bottom: 80px;
`;

export const AppSideBarInfoWrapper = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`;

export const AppSidiBarInfoTitle = styled.p`
 font-size: 16px;
 font-weight: 400;
 color: #0c0c0c;
`;

export const AppSidiBarInfoDegre = styled.p`
 font-size: 32px;
 font-weight: 700;
 color: #fff;
`;
export const AppSidiBarInfoText = styled.p`
 font-size: 24px;
 font-weight: 400;
 color: #fff;
`;

export const AppSideBarTimer = styled.ul`
 list-style: none;
 width: 100%;
 display: flex;
 justify-content: space-around;
 gap: 20px;
`;

export const SideBarTimerItem = styled.li`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
`;
export const SideBarTimerItemValue = styled.p`
 font-size: 32px;
 font-weight: 700;
 color: #fff;
`;
export const SideBarTimerItemText = styled.p`
 font-size: 16px;
 font-weight: 300;
 color: #fff;
 text-transform: uppercase;
`;

export const Svg = styled.svg`
 width: 50px;
 height: 50px;
`;

export const AppSideBarBtnClose = styled.button`
 position: absolute;
 top: 20px;
 left: 20px;
 background-color: transparent;
 border: none;
 outline: none;
 cursor: pointer;
`;
