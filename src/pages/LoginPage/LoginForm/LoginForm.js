import { TextField, Typography } from '@mui/material';
import { Controller, useForm, useFormState } from 'react-hook-form';

import { Form, FormButton, PasswordInput } from '@Components';
import { loginValidation, passwordValidation } from './validation';

export const LoginForm = (props) => {
	const { handleSubmit, control , reset } = useForm();

	const { errors } = useFormState({ 
        control
    })

	const onSubmit = data =>  {
		console.log(data); 
	} ;

	return(
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="login"
				control={control}
				rules={loginValidation}
				render={({ field }) => 
					<TextField 
						label='Электронная почта'
						onChange={(e) => field.onChange(e.target.value)}
              			value={field.value}
						fullWidth 
						color='success'
						error={!!errors.login?.message}
                        helperText={ errors?.login?.message }
					/>
				}
			/>

			<Controller
				name="password"
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