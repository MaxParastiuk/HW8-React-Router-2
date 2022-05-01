import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERS_URI, USERS_URL } from "../../constants";
import { marginInput } from "../../customTheme/customTheme";
import { useDatas } from "../../hooks/hooks";

export default function CreateUser() {
	const { items: item, createItem } = useDatas(USERS_URL);
	const [value, setValue] = useState({ ...item });

	const navigate = useNavigate();
	const goBack = () => navigate("/users");

	const onUserFormSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			...value,
		};
		createItem(USERS_URI, newUser);
		goBack();
	};

	const onChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form className='form-edit' action=''>
			<TextField
				sx={marginInput}
				label='Username'
				name='username'
				value={value.username || ""}
				onChange={onChange}></TextField>
			<TextField
				sx={marginInput}
				label='Name'
				name='name'
				value={value.name || ""}
				onChange={onChange}></TextField>
			<TextField
				sx={marginInput}
				label='Phone'
				name='phone'
				value={value.phone || ""}
				onChange={onChange}></TextField>
			<TextField
				sx={marginInput}
				label='Website'
				name='website'
				value={value.website || ""}
				onChange={onChange}></TextField>
			<Button variant='contained' color='success' onClick={onUserFormSubmit}>
				Create
			</Button>
			<Button sx={{ mt: 1 }} variant='contained' color='error' onClick={goBack}>
				Cancel
			</Button>
		</form>
	);
}
