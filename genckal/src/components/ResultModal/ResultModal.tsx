import {Modal, Text} from "react-native";
import {CloseButton, ModalBody, TextBody, Title} from "./styles";
import React, {useState} from "react";

interface Userdata {
    age: number;
    gender: string;
    high: number,
    weight: number,
    setAcvity: number
}

interface MatchModalProps {
    visible: boolean;
    onClose: () => void;
    match: Userdata | null;
}

export function ResultModal({visible, onClose, match}: MatchModalProps) {
    if (match == null) {
        return null;
    }

    const [tbm, setTbm] = useState(Math.round(
        match.gender === 'female'
            ? (655 + (9.6 * match.weight) + (1.8 * match.high) - (4.7 * match.age))
            : (66 + (13.7 * match.weight) + (5 * match.high) - (6.8 * match.age))
    ))
    return (<>
        <Modal
            visible={visible}
        >
            <CloseButton onPress={() => onClose()}>
                <Text>X</Text>
            </CloseButton>
            <ModalBody>
                <Title>Dados: </Title>
                <TextBody>peso: {match.weight} kg </TextBody>
                <TextBody>altura: {match.high} cm </TextBody>
                <TextBody></TextBody>
                <Title>Resultados: </Title>
                <TextBody>Seu metabolismo basal é: {tbm}</TextBody>
                <TextBody>Manter seu peso você precisa consumir em
                    média: {Math.round(tbm * match.setAcvity)} </TextBody>
                <TextBody>Aumentar seu peso você precisa consumir em
                    média:{Math.round(tbm * match.setAcvity) + 450} </TextBody>
                <TextBody>Diminuir seu peso você precisa consumir em
                    média:{Math.round(tbm * match.setAcvity) - 450} </TextBody>
            </ModalBody>
        </Modal>
    </>)
}
