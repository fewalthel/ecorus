import {FC} from "react";
import {useForm} from "react-hook-form";
import {CreateUserDto, LanguageEnum} from "../../../app/models/generated";
import {Button} from "@ui/Button";
import styles from "./index.module.scss";
import {handleSignIn} from "@api/auth";
import {useAppContext} from "../../../AppContext";
import {useNavigate} from "react-router-dom";

interface Props {
    showModal: boolean
    setShowModal: (newValue: boolean) => void
    setCurrentModal: (newValue: string) => void
}

export const SignInModal: FC<Props> = ({showModal, setShowModal, setCurrentModal}: Props) => {
    const {setUser} = useAppContext()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<CreateUserDto>();


    const onSubmit = async (data: CreateUserDto) => {
        try {
            const response = await handleSignIn({...data, language: LanguageEnum.RU});
            setUser(response.data)
            navigate('/profile')
            setShowModal(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        showModal && (

            <div className={styles.signUpModal}>

                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3vw'}}>
                    <strong>Вход</strong>
                    <button className={styles.closeButton} onClick={() => setShowModal(false)}/>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email"
                           {...register("email")}
                    />
                    {errors.email && <span>{errors.email.message}</span>}

                    <input type="password" placeholder="Пароль"
                           {...register("password")}
                    />
                    {errors.password && <span>{errors.password.message}</span>}

                    <div className={styles.bottomButtons}>
                        <button>Войти с помощью смс</button>
                        <button onClick={() => setCurrentModal('Регистрация')}>
                            Регистрация
                        </button>
                    </div>

                    <Button text={'Войти'}/>
                </form>
            </div>

        )
    )
}