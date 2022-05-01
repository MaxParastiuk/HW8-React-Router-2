import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider } from "@mui/material";
import { themeBtn } from "../../customTheme/customTheme";
import { Link } from "react-router-dom";

export default function UserItem({ item, onDelete }) {
	const [hiddenDetails, setHiddenDetails] = useState({
		hidden: true,
		nameClass: "",
	});

	const onDeleteButtonClick = (id) => {
		onDelete(id);
	};

	function toggleDetails() {
		if (hiddenDetails.hidden) {
			setHiddenDetails({ hidden: false, nameClass: "show" });
		} else {
			setHiddenDetails({ hidden: true, nameClass: "" });
		}
	}

	return (
		<div className='item' onClick={toggleDetails}>
			<div className='item-head'>
				<div>
					<span className='head-username'>{item.username}</span> - {item.name}
				</div>
				<div>
					<ThemeProvider theme={themeBtn}>
						<Button sx={{ mr: 2 }} variant='contained' color='primary'>
							<Link
								style={{ textDecoration: "none", color: "inherit" }}
								to={`${item.id}/edit`}>
								Edit
							</Link>
						</Button>
						{/* <Link
							onClick={(e) => e.stopPropagation()}
							variant='button'
							underline='none'
							sx={editBtnStyle}
							href={`/users/${item.id}/edit`}>
							Edit
						</Link> */}
						<Button
							onClick={(e) => {
								e.stopPropagation();
								onDeleteButtonClick(item.id);
							}}
							variant='contained'
							color='secondary'
							endIcon={<DeleteIcon />}>
							delete
						</Button>
					</ThemeProvider>
				</div>
			</div>
			<div className={`item-details ${hiddenDetails.nameClass}`}>
				<table>
					<tbody>
						<tr>
							<td>Phone:</td>
							<td>{item.phone}</td>
						</tr>
						<tr>
							<td>Website:</td>
							<td>{item.website}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
