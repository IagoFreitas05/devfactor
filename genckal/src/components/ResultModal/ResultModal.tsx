import {Modal, Text} from "react-native";
import {CloseButton, ModalBody, TextBody, Title} from "./styles";
import React, {useState} from "react";

export interface Userdata {
    age: number;
    gender: string;
    high: number,
    weight: number,
    activity: number,
    tmb: number
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
                <TextBody>Seu metabolismo basal é: {match.tmb}</TextBody>
                <TextBody>Manter seu peso você precisa consumir em
                    média: {Math.round(match.tmb * match.activity)} </TextBody>
                <TextBody>Aumentar seu peso você precisa consumir em
                    média:{Math.round(match.tmb * match.activity) + 450} </TextBody>
                <TextBody>Diminuir seu peso você precisa consumir em
                    média:{Math.round(match.tmb * match.activity) - 450} </TextBody>
            </ModalBody>
        </Modal>
    </>)
}
