import styled from "styled-components/native";

export const ModalBody = styled.View`
  flex: 1;
  background: #fafafa;
  padding: 32px 24px 0;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const Title = styled.Text`
  opacity: 0.8;
  margin-top: 18px;
  font-weight: bold;
`;

export const TextBody = styled.Text`
  font-size: 12px;
  margin-top: 6px;
`


