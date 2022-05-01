import { USERS_URL } from "../../constants/index";
import { useDatas } from "../../hooks/hooks";
import UserItem from "../../components/UserItem/UserItem";
import "./Users.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Users() {
	const { items, deleteData } = useDatas(USERS_URL);

	return (
		<>
			<div className='users'>
				{items.map((item) => (
					<UserItem item={item} key={item.id} onDelete={deleteData} />
				))}
			</div>
			<div className='btn_block'>
				<Button variant='contained' color='success'>
					<Link
						style={{ textDecoration: "none", color: "inherit" }}
						to={"create"}>
						Create
					</Link>
				</Button>
			</div>
		</>
	);
}
