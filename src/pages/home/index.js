/* IMPORTANDO O React E O useState */
import React, { useState } from 'react';

/* IMPORTAÇÃO DE ALGUNS COMPONENTES DO react-native */
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

/* IMPORTANDO AS PROPRIEDADES PARA FAZER O CADASTRO, LOGIN E LOGOUT */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

/* IMPORTANDO O auth */
import { auth } from '../../services/firebaseConnection';

/* EXPORTANDO A FUNÇÃO Home() */
export function Home() {

    /* STATES */

    /* STATE DE EMAIL */
    const [email, setEmail] = useState(''); /* PRIMEIRO PARAMETRO: NOME DO STATE, SEGUNDO PARAMETRO: FUNÇÃO QUE VAI FAZER A ALTERAÇÃO | IRÁ COMEÇAR COM STRING VAZIA */

    /* STATE DE SENHA */
    const [password, setPassword] = useState('');

    /* FUNÇÃO PARA CADASTRAR NOVO USUÁRIO */
    /* OBS: ESSA FUNÇÃO TEM QUE SER ASSINCRONA PQ TEMOS QUE ESPERAR UMA REQUISIÇÃO PARA DEPOIS CONTINUAR COM O FLUXO DO CODIGO */
    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(value => { /* .then() EXECUTA ALGO CASO TUDO DER CERTO */
                console.log('cadastrado com sucesso!\n' + value.user.uid);
            })
            .catch(error => console.log(error)); /* .catch() EXECUTA ALGO CASO DER ERRO */
    };

    /* FUNÇÃO PARA LOGAR NO APLICATIVO */
    async function loginUser() {
        await signInWithEmailAndPassword(auth, email, password).then(value => {
            console.log('logado com sucesso!');
        })
            .catch(error => console.log(error));
    }

    /* FUNÇÃO PARA DESLOGAR DO APLICATIVO */
    async function logout() {
        await signOut(auth)
            .then(() => {
                console.log('saiu com sucesso!');
            })
            .catch(error => console.log(error));
    }

    return (

        /* INICIO DA VIEW */
        <View style={styles.container}>

            {/* TEXTO SIMPLES */}
            <Text>Firebase App Test</Text>

            {/* CAMPO DE EMAIL */}
            <TextInput
                placeholder="E-mail" /* TEXTO DESCRITIVO DO CAMPO */
                placeholderTextColor="#313131" /* COR DO TEXTO DESCRITIVO */
                value={email} /* VALUE IRÁ PASSAR O VALOR E O STATE(QUE FAZ A ALTERAÇÃO DO VALOR) */
                onChangeText={value => setEmail(value)} /* QUANDO O TEXTO FOR ALTERADO, IRÁ CHAMAR A FUNÇÃO | PASSA O NOVO VALOR DO INPUT PARA A FUNÇÃO*/
                style={styles.input} /* ESTILOS DO CAMPO */
            ></TextInput>

            {/* CAMPO DE SENHA */}
            <TextInput
                placeholder="Senha"
                placeholderTextColor="#313131"
                value={password}
                onChangeText={value => setPassword(value)}
                style={[styles.input, { marginBottom: 10 }]}
            ></TextInput>

            {/* BOTÃO PARA CADASTRAR NOVO USUÁRIO */}
            <Button
                title="CADASTRAR" // PARAMETRO title É OBRIGATORIO NO REACT-NATIVE
                onPress={() => createUser()} /* QUANDO BOTÃO FOR PRESSIONADO EXECUTAR ALGO, NO CAO ESTOU CHAMANDO A FUNÇÃO */
            />

            {/* BOTÃO PARA LOGAR NO APP */}
            <Button
                title="LOGAR"
                onPress={() => loginUser()}
            />

            {/* BOTÃO PARA DESLOGAR DO APP */}
            <Button
                title="SAIR"
                onPress={() => logout()}
            />

        </View>
        /* FIM DA VIEW */

    )
}

/* ESTILOS DOS COMPONENTES */
const styles = StyleSheet.create({

    /* CONTAINER PRINCIPAL */
    container: {
        flex: 1,                    /* COBRIR 100% DA TELA */
        justifyContent: "center",   /* ALINHAR NO CENTRO */
        alignItems: "center"        /* ALINHAR NO CENTRO */
    },

    /* CAMPOS */
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#313131',
        marginTop: 5,
        width: '80%',
        height: 50
    },

})