<script>
	import { icon_color } from './icon_utils';

	let { size } = $props();
</script>

<!-- From https://www.svgrepo.com/svg/340305/filter-reset -->
<svg
	width={size + 'rem'}
	height={size + 'rem'}
	viewBox="0 0 32 32"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<style>
			.cls-1 {
				fill: none;
			}
		</style>
	</defs>
	<path
		fill={icon_color}
		d="M22.5,9A7.4522,7.4522,0,0,0,16,12.792V8H14v8h8V14H17.6167A5.4941,5.4941,0,1,1,22.5,22H22v2h.5a7.5,7.5,0,0,0,0-15Z"
	/>
	<path
		fill={icon_color}
		d="M26,6H4V9.171l7.4142,7.4143L12,17.171V26h4V24h2v2a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V18L2.5858,10.5853A2,2,0,0,1,2,9.171V6A2,2,0,0,1,4,4H26Z"
	/>
	<rect
		id="_Transparent_Rectangle_"
		data-name="&lt;Transparent Rectangle&gt;"
		class="cls-1"
		width="32"
		height="32"
	/>
</svg>
