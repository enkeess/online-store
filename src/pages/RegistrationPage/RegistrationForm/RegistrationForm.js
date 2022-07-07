import { TextField, Typography } from '@mui/material';
import { Controller, useForm, useFormState } from 'react-hook-form';

import { Form, FormButton, PasswordInput } from '@Components';
import { loginValidation, nameValidation, passwordValidation } from './validation';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { setUser } from '@/redux/user/userSlice';
import { useDispatch } from 'react-redux';


export const RegistrationForm = (props) => {
	const { handleSubmit, control , reset } = useForm();

	const dispatch = useDispatch();
	const auth = getAuth();

	const { errors } = useFormState({ 
        control
    })


	
	const onSubmit = (data) =>  {
		console.log(data); 
		
		const {name, email, password} = data;
		
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
				updateProfile(user, {
					displayName: name,
				}).then(() => {
					dispatch(setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
						name
					}));
					
				}).catch((error) => {
					// An error occurred
					// ...
				})
			})
            .catch((error) => {
				alert(error.message);
			})
	} ;

	return(
		<Form onSubmit={handleSubmit(onSubmit)}>

			<Controller
				name="name"
				control={control}
				rules={nameValidation}
				defaultValue={''}
				render={({ field }) => 
					<TextField 
						label='Имя'
						onChange={(e) => field.onChange(e.target.value)}
              			value={field.value}
						fullWidth 
						color='success'
						error={!!errors.name?.message}
                        helperText={ errors?.name?.message }
					/>
				}
			/>

			<Controller
				name="email"
				defaultValue={''}
				control={control}
				rules={loginValidation}
				render={({ field }) => 
					<TextField 
						label='Электронная почта'
						onChange={(e) => field.onChange(e.target.value)}
              			value={field.value}
						fullWidth 
						color='success'
						error={!!errors.email?.message}
                        helperText={ errors?.email?.message }
					/>
				}
			/>

			<Controller
				name="password"
				defaultValue={''}
				control={control}
				rules={passwordValidation}
				render={({ field }) => 
					<PasswordInput 
						label='Пароль'
						onChange={(e) => field.onChange(e.target.value)}
              			value={field.value}
						fullWidth 
						color='success'
						error={!!errors.password?.message}
                        helperText={ errors?.password?.message }
					/>
				}
			/>

			<FormButton variant='contained' color='primary' fullWidth type='submit'>
				<Typography variant='btn'>
					Зарегистрироваться
				</Typography>
			</FormButton>
		</Form>
	)
}