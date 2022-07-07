import { TextField, Typography } from '@mui/material';
import { Controller, useForm, useFormState } from 'react-hook-form';

import { Form, FormButton, PasswordInput } from '@Components';
import { loginValidation, passwordValidation } from './validation';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/user/userSlice';

export const LoginForm = (props) => {
	const { handleSubmit, control , reset } = useForm();
	const dispatch = useDispatch();
	const { errors } = useFormState({ 
        control
    })

	const auth = getAuth();

	const onSubmit = ({email, password}) =>  {
		
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;

				console.log(user);

				dispatch(setUser({
					email: user.email,
					id: user.uid,
					name: user.displayName,
					token: user.accessToken
				}))
				// ...
			})
			.catch((error) => {
				alert(error.message);
			})
	} ;

	return(
		<Form onSubmit={handleSubmit(onSubmit)}>
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

			<FormButton variant='contained' color='info' fullWidth type='submit'>
				<Typography variant='btn'>
					Войти
				</Typography>
			</FormButton>
		</Form>
	)
}