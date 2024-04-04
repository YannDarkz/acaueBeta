import { useEffect } from 'react';
import { useUsers } from '../contexts/usersContext';


import styles from './form_contact.module.scss';

import Input from "./input"
import TextArea from "./textArea";
import SubmitButton from "./submitBtn";

import { useForm } from 'react-hook-form'

const FormContact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { users, setUsers } = useUsers();

    if (!users || users.length === 0) {
        // console.log("USUÁRIO NÃO ENTROU EM CONTATO! ")
    }else {
        console.log("USUÁRIO ENTROU EM CONTATO! ", users)
    }

    const handleSubmitForm = (data) => {

        // console.log('Dados do formulário enviados com sucesso para o Firebase!,', data);
        setUsers( data )
        reset()
    }

    return (

        <div id='contact' className={styles.container_contact}>
            <div className={styles.contact}>
                <p>Entre</p>
                <span></span>
            </div>

            <h3>Em contado</h3>

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
                {errors.name && <p className={styles.required}>{errors.name.message}</p>}
                <Input
                    name="email"
                    type="email"
                    placeHolder="Digite o E-mail"
                    text="E-mail"
                    {...register('email', {
                        required: "Campo obrigatório",
                    })}
                />
                {errors.email && <p className={styles.required}>{errors.email.message}</p>}
                <TextArea
                    name="message"
                    text="Mensagem"
                    placeHolder="Escreva aqui sua mensagem..."
                    {...register('message', {
                        required: "Campo obrigatório",
                    })}
                />
                {errors.message && <p className={styles.required}>{errors.message.message}</p>}
                <SubmitButton
                    text="Enviar" />

            </form>
        </div>
    )
}

export default FormContact;