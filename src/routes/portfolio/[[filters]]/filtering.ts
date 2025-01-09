export function select_element(clicked_on: string, selected: string[], unselected: string[]) {
	// capitalize
	clicked_on = clicked_on.charAt(0).toUpperCase() + clicked_on.slice(1);
	
	// find element in both lists
	const index_selected = selected.indexOf(clicked_on);
	const index_unselected = unselected.indexOf(clicked_on);
	
	// if element doesn't exist, do nothing
	if (index_selected === -1 && index_unselected === -1) {
		return [selected, unselected];
	}


	// if all elements are currently selected, clicking one will remove all others
	if (unselected.length === 0) {
		unselected = selected;
		unselected.splice(index_selected, 1);
		selected = [clicked_on];

		return [selected, unselected];
	}

	// otherwise we just send the one clicked from selected to unselected and vice versa
	if (index_selected !== -1) {
		selected.splice(index_selected, 1);
		unselected.push(clicked_on);
	} else {
		selected.push(clicked_on);
		unselected.splice(index_unselected, 1);
	}

	if (selected.length === 0) {
		return [unselected, selected];
	}

	return [selected, unselected];
}

export function reset_filter(selected: string[], unselected: string[]) {
	unselected.forEach((element) => selected.push(element));
	unselected = [];

	return [selected, unselected];
}
