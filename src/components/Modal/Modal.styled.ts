import styled from "styled-components";

export const ModalContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 1000;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ModalContent = styled.div`
 position: relative;
 width: 80%;
 max-width: 500px;
 background-color: #fff;
 padding: 20px;
 border-radius: 5px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CloseButton = styled.button`
 position: absolute;
 top: 10px;
 right: 10px;
 border: none;
 outline: none;
 background-color: transparent;
 cursor: pointer;
`;

export const ModalTitle = styled.h2`
 font-size: 24px;
 margin-bottom: 20px;
 color: #0c0c0c;
`;

export const ModalForm = styled.form`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;
export const ModalLabel = styled.label`
 span {
  color: red;
 }
`;

export const ModalSelect = styled.select`
 padding: 10px;
 border-radius: 5px;
 border: 1px solid #c1c1c1;
 outline: none;
`;
export const ModalOption = styled.option``;

export const ModalDatePicker = styled.input`
 padding: 10px;
 border-radius: 5px;
 border: 1px solid #c1c1c1;
 outline: none;
`;
export const ModalInputContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
`;
export const ModalButtonsWraper = styled.div`
 display: flex;
 justify-content: flex-end;
 gap: 20px;
`;

export const ModalSubmitButton = styled.button`
 padding: 10px;
 border-radius: 5px;
 border: none;
 outline: none;
 background-color: #1990f9;
 color: #fff;
 cursor: pointer;
 &:hover {
  background-color: #0d6efd;
 }
`;
export const ModalCancelButton = styled.button`
 padding: 10px;
 border-radius: 5px;

 border: none;
 outline: none;
 background-color: #f2f4f8;
 color: #0c0c0c;
 cursor: pointer;
 &:hover {
  background-color: #e0e2e7;
 }
`;

export const ModalError = styled.p`
 color: red;
 font-size: 14px;
`;
