const REQUIRED_FIELD = 'Обязательно для заполнения';

export const nameValidation = {
	required: REQUIRED_FIELD
}

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(!!!re.test(String(value).toLowerCase())) {
			return 'Некорректный email'
		}

        return true;
    }
};

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
        if(value.length < 6) {
            return 'Пароль должен длиннее 6-ти символов'
        }

        return true;
    }
};