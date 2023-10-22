import {FormBody, FormHeader, Title} from "./style";
import {StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";
import {ResultModal, Userdata} from "../ResultModal/ResultModal";

const styles = StyleSheet.create({
    TextInput: {
        width: '100%',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.1)",
        shadowColor: 'rgba(0,0,0,0.45)',
        borderRadius: 10,
        padding: 16,
        fontSize: 16,
        shadowOffset: {width: -1, height: 2},
        shadowRadius: 11,
        shadowOpacity: -4,
        marginTop: 16
    },
    ButtonInput: {
        width: "100%",
        backgroundColor: "#7ED957",
        alignItems: "center",
        padding: 16,
        marginTop: 20,
        borderRadius: 12
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    }
});
const pickerSelectStyles = StyleSheet.create({
    input: {
        shadowOffset: {width: -1, height: 2},
        shadowRadius: 11,
        shadowOpacity: -4,
        shadowColor: 'rgba(0,0,0,0.45)',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        borderRadius: 10,
        color: 'black',
        paddingRight: 30,
        marginTop: 16,
        backgroundColor: "transparent"
    },
});


export default function Form() {
    const [openGender, setOpenGender] = useState(false);
    const [openAct, setOpenAct] = useState(false);
    const [genders, setGenders] = useState([
        {label: 'Masculino', value: 'male'},
        {label: 'Feminino', value: 'female'}
    ]);
    const [actLevel, setActLevel] = useState([
        {label: 'Sedentário', value: 1.2},
        {label: 'Pouca atividade', value: 1.375},
        {label: 'Atividade moderada', value: 1.55},
        {label: 'Atividade intensa', value: 1.725},
        {label: 'Atividade muito intensa', value: 1.9},
    ]);
    const [gender, setGender] = useState("");
    const [activity, setActivity] = useState(0);
    const [age, setAge] = useState(0);
    const [high, setHigh] = useState(0);
    const [weight, setWeight] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState<Userdata>({} as Userdata);
    function handleOpenModal(){
        setUserData({
            age: age,
            gender: gender,
            high: high,
            weight: weight,
            activity: activity,
            tmb: Math.round(
                gender === 'female'
                    ? (655 + (9.6 * weight) + (1.8 * high) - (4.7 * age))
                    : (66 + (13.7 * weight) + (5 * high) - (6.8 * age))
            )
        });
        setModalVisible(true);
    }
    return (
        <>
            <ResultModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                match={userData}></ResultModal>
            <FormHeader>
                <Title>GenKcal</Title>
            </FormHeader>
            <FormBody>
                <DropDownPicker
                    style={pickerSelectStyles.input}
                    open={openGender}
                    value={gender}
                    items={genders}
                    setOpen={setOpenGender}
                    setValue={setGender}
                    setItems={setGenders}
                />
                <TextInput
                    onChangeText={(value) => setAge(Number(value))}
                    placeholder={"sua idade"}
                    style={styles.TextInput}
                    keyboardType={"numeric"}>

                </TextInput>
                <TextInput
                    onChangeText={(value) => setHigh(Number(value))}
                    placeholder={"sua altura (em centímetros ex: 172 )"}
                    style={styles.TextInput}
                    keyboardType={"numeric"}>
                </TextInput>
                <TextInput
                    onChangeText={(value) => setWeight(Number(value))}
                    placeholder={"seu peso (em Kg )"}
                    style={styles.TextInput}
                    keyboardType={"numeric"}>
                </TextInput>
                <DropDownPicker
                    style={pickerSelectStyles.input}
                    open={openAct}
                    value={activity}
                    items={actLevel}
                    setOpen={setOpenAct}
                    setValue={setActivity}
                    setItems={setActLevel}
                />
                <TouchableOpacity
                    style={styles.ButtonInput}
                    onPress={() => {
                        handleOpenModal();
                    }}
                ><Text style={styles.ButtonText}>Calcular</Text></TouchableOpacity>
            </FormBody>
        </>
    )
}
