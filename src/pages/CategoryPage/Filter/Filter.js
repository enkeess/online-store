import {Container} from '@BaseComponents';
import {  useForm } from "react-hook-form";

import styled from '@emotion/styled';
import { FormButton } from '@Components';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { CheckboxBlock } from './CheckboxBlock';
import { InputSliderBlock } from './InputSliderBlock';
import { RadioBlock } from './RadioBlock/RadioBlock';
import { nanoid } from 'nanoid';

const StyledAccordion = styled(Accordion)`
	background: none;
	box-shadow: none;
`

const StyledAccordionSummary = styled(AccordionSummary)`
	padding: 0;
	background: none;

	svg {
		height: 35px;
		width: auto;
	}
`
const StyledAccordionDetails = styled(AccordionDetails)`
	padding: 0;
`

const StyledFieldset = styled.fieldset`
	border: none;
	padding: 15px 0;
	width: 100%;
`

const StyledLegend = styled.legend`
`

const FilterBlockContent = ({control, filter}) => {
	const {label, params, isDropdown, type, name, defaultValue} = filter;

	switch(type) {
		case 'checkboxBlock': 
			return <CheckboxBlock control={control} name={name} params={params}/>
		case 'radio': 
			return <RadioBlock control={control} name={name} params={params}/>
			
		case 'slider': {
			return <InputSliderBlock control={control} name={name} params={params} defaultValue={defaultValue}/>
		}
		default: 
			return null;
	}
}

const FilterBlock = ({control, filter}) => {

	const {label, isDropdown} = filter;

	if(isDropdown) {
		return(
			<StyledFieldset>
				<StyledAccordion>
					<StyledAccordionSummary
						expandIcon={<ExpandMoreIcon size='large'/>}
						aria-controls="panel1a-content"
					>	
						<StyledLegend>
							<Typography variant='filter'>{label}</Typography>
						</StyledLegend>
						
					</StyledAccordionSummary>
					
					<StyledAccordionDetails>
						<FilterBlockContent filter={filter} control={control}/>
					</StyledAccordionDetails>
				</StyledAccordion>
			</StyledFieldset>
		)
	} else {
		return(
			<StyledFieldset>
				<StyledLegend>
					<Typography variant='filter'>{label}</Typography>
				</StyledLegend>

				<FilterBlockContent filter={filter} control={control}/>
			</StyledFieldset>
		)
	}

}
	
const FilterBase = styled.div`
	padding-top: 10px;
	
`

export const Filter = ({filters}) => {

	const { handleSubmit, control , reset, register, resetField, setValue } = useForm({
		defaultValues: (function setDefault(){
			let obj = {};

			filters.forEach(filter => {
				obj[filter.name] = {};
				switch(filter.type) {
					case 'checkboxBlock':
						filter.params.forEach(({value}) => {
							obj[filter.name][value] = false;
						});
						break;
					default:
						obj[filter.name] = filter.defaultValue;
						break;
				}
			});

			console.log(obj);
			return obj;
		})()
	});

	const onSubmit = data =>  {
		console.log(data);
	} ;

	const onReset = () => {
		reset();
	}

	return(
		
			<form onSubmit={handleSubmit(onSubmit)}>
				{
					filters.map(filter => (
						<FilterBlock control={control} filter={filter} key={filter.id}/>
					))
				}
				<FormButton type='submit' fullWidth variant='contained' color='info' sx={{marginTop: '30px'}}>
					<Typography variant='btn'>
						Применить фильтры
					</Typography>
				</FormButton>

				<FormButton  fullWidth variant='contained' color='error' sx={{marginTop: '10px'}} onClick={onReset}>
					<Typography variant='btn'>
						Сбросить фильтры
					</Typography>
				</FormButton>
			</form> 
		
	)
}















