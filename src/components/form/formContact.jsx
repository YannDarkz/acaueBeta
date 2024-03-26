
import firebaseConfig from '../../../firebaseConfig';
import {addDoc, collection, getDocs, getFirestore, doc, deleteDoc} from 'firebase/firestore'
import { useEffect } from 'react';
import { useUsers } from '../contexts/usersContext';


import styles  from './form_contact.module.scss';

import Input from "./input"
import TextArea from "./textArea";
import SubmitButton from "./submitBtn";

import { useForm } from 'react-hook-form'

export const deleteUser = async (id) => {
    const db = getFirestore(firebaseConfig);
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
};

const FormContact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { users, setUsers } = useUsers();
    
    const db = getFirestore(firebaseConfig)
    const userColletionRef = collection(db, "users")

    useEffect(()=>{
        
        const getUsers = async () =>{
            const data = await getDocs(userColletionRef)
            console.log("DATAZZIS",data)
            setUsers(data.docs.map(doc =>({ ...doc.data(), id: doc.id })))
        }
        getUsers()
        console.log("desmontademo")
    },[])

    const createUser = async (data) =>{
        const user = await addDoc(userColletionRef , data);
    }

    const handleSubmitForm = async (data) => {
        try {   
            console.log('Dados do formulário enviados com sucesso para o Firebase!,', data);
            setUsers(prevValue => ([...prevValue, data]))
             createUser(data)
            
            reset();
        } catch (error) {
            console.error('Erro ao enviar dados do formulário para o Firebase:', error);
        }
    }

    return (
        <form className={styles.container_form} onSubmit={handleSubmit(handleSubmitForm)}>
            <Input
                name="name"
                type="text"
                placeHolder="Nome e Sobrenome"
                text="Nome"
                {...register('name', {
                    required: "Campo obrigatório",
                })}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <Input
                name="email"
                type="email"
                placeHolder="Digite o E-mail"
                text="E-mail"
                {...register('email', {
                    required: "Campo obrigatório",
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <TextArea
                name="message"
                text="Mensagem"
                placeHolder="Escreva aqui sua mensagem..."
                {...register('message', {
                    required: "Campo obrigatório",
                })}
            />
              {errors.message && <p>{errors.message.message}</p>}
            <SubmitButton
                text="Enviar" />

        </form>
    )
}

export default FormContact;