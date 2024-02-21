import styled from "styled-components";

interface IAppListProps {
 readonly gap: string;
 readonly mb?: string;
}

interface IAppContainerProps {
 readonly mr?: string;
}

export const Main = styled.main`
 display: flex;
 position: relative;
`;

export const AppLoginButton = styled.button`
 position: absolute;
 cursor: pointer;
 top: 20px;
 right: 20px;
 width: 40px;
 height: 40px;
 border: none;
 outline: none;
 background-color: #f2e6ee;
 border-radius: 50%;
 z-index: 3000;
`;

export const AppUserPhoto = styled.img`
 position: absolute;
 top: 20px;
 right: 80px;
 width: 40px;
 height: 40px;
 border-radius: 50%;
 z-index: 3000;
`;

export const AppContainer = styled.div<IAppContainerProps>`
 margin-right: ${(props) => props.mr || "0"};
 padding: 20px;
`;

export const AppHeader = styled.h1`
 font-size: 24px;
 font-weight: 400;
 color: #040404;
 span {
  font-weight: 700;
  color: #010101;
 }
 margin-bottom: 60px;
`;

export const AppForm = styled.form`
 margin-bottom: 40px;
`;

export const AppInput = styled.input`
 font-size: 16px;

 padding-left: 30px;
 padding-right: 10px;
 padding-top: 10px;
 padding-bottom: 10px;

 height: 35px;

 color: #0c0c0c;
 background-color: #f2e6ee;

 border-radius: 10px;
 border: none;
 outline: none;
 &:focus {
  outline: none;
  border: none;
 }
`;
export const InputContainer = styled.label`
 position: relative;
 display: inline-block;
 margin-bottom: 20px;
`;
export const InputIcon = styled.div`
 position: absolute;
 top: 55%;
 left: 10px;
 transform: translateY(-50%);
 cursor: pointer;
`;

export const AppList = styled.ul<IAppListProps>`
 list-style: none;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 gap: ${(props) => props.gap || "10px"};
 margin-bottom: ${(props) => props.mb || "0"};
`;

export const AppTitle = styled.h2`
 font-size: 20px;
 font-weight: 400;
 color: #0c0c0c;
 margin-bottom: 20px;
`;

export const AppTripContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 20px;
 margin-bottom: 40px;
`;

export const AppButton = styled.button`
 width: 200px;
 height: 200px;
 box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
  rgba(17, 17, 26, 0.1) 0px 0px 8px;
 background-color: #f2e6ee;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 10px;
 outline: none;
 border: none;
 cursor: pointer;
 &:focus {
  border: 1px solid #a3d3ff;
 }
 span {
  font-size: 18px;
  font-weight: 700;
  color: #0c0c0c;
 }
`;

export const AppErorrContainer = styled.div`
 display: flex;
 justify-content: center;
 padding: 20px;
 align-items: center;
 border: 3px solid #f5b7b1;
 background-color: #fadbd8;
 height: 50px;
 border-radius: 10px;
`;

export const AppErorrTitle = styled.p`
 color: #b93d30;
 font-size: 14px;
 font-weight: 400;
`;

export const Checkbox = styled.input`
 width: 20px;
 height: 20px;
`;

export const CheckboxContainer = styled.div`
 display: flex;
 gap: 10px;
`;
