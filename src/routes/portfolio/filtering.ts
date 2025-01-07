export function select_element(clicked_on: string, selected: string[], unselected: string[]) {
	const index = selected.indexOf(clicked_on);

	// if all elements are currently selected, clicking one will remove all others
	if (unselected.length === 0) {
		unselected = selected;
		unselected.splice(index, 1);
		selected = [clicked_on];

		return [selected, unselected];
	}

	// otherwise we just send the one clicked from selected to unselected and vice versa
	if (index !== -1) {
		selected.splice(index, 1);
		unselected.push(clicked_on);
	} else {
		selected.push(clicked_on);
		unselected.splice(unselected.indexOf(clicked_on), 1);
	}

	return [selected, unselected];
}

export function reset_filter(selected: string[], unselected: string[]) {
	unselected.forEach((element) => selected.push(element));
	unselected = [];

	return [selected, unselected];
}
