import api from "../api/api";

export async function getItems(url, id = "") {
	return api.get(url + id);
}

export function deleteItem(id) {
	return api.delete(`${id}`);
}

export function addItem(url, item) {
	return api.post(url, item);
}

export function setItemById(url, item) {
	return api.put(url + "/" + item.id, item);
}
