import { useNavigate, useParams } from "react-router-dom";
import { USERS_URI, USERS_URL } from "../../constants";
import { useDatas } from "../../hooks/hooks";
import Button from "@mui/material/Button";
import "./EditUser.css";
import TextField from "@mui/material/TextField";
import { marginInput } from "../../customTheme/customTheme";

export default function EditUser() {
	const { id } = useParams();
	const { items: item, setItems, updateItem } = useDatas(USERS_URL + id);
	const navigate = useNavigate();

	const goBack = () => navigate("/users");

	const onValueChange = (e) => {
		setItems({
			...item,
			[e.target.name]: e.target.value,
		});
	};

	const onSaveButtonClick = (e) => {
		e.preventDefault();
		updateItem(USERS_URI, item);
		goBack();
	};

	return (
		<form className='form-edit' action=''>
			<TextField
				sx={marginInput}
				label='Username'
				name='username'
				value={item.username || ""}
				onChange={onValueChange}></TextField>
			<TextField
				sx={marginInput}
				label='Name'
				name='name'
				value={item.name || ""}
				onChange={onValueChange}></TextField>
			<TextField
				sx={marginInput}
				label='Phone'
				name='phone'
				value={item.phone || ""}
				onChange={onValueChange}></TextField>
			<TextField
				sx={marginInput}
				label='Website'
				name='website'
				value={item.website || ""}
				onChange={onValueChange}></TextField>
			<Button variant='contained' color='success' onClick={onSaveButtonClick}>
				Save
			</Button>
			<Button sx={{ mt: 1 }} variant='contained' color='error' onClick={goBack}>
				Cancel
			</Button>
		</form>
	);
}
