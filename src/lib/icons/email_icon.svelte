<script>
	import { icon_color } from './icon_utils';

	let { size } = $props();
</script>

<!-- From https://www.svgrepo.com/svg/521128/email-1 -->

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size + 'rem'}
	height={size + 'rem'}
	viewBox="0 0 24 24"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
		fill={icon_color}
	/>
</svg>
