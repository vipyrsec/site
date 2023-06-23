<script>
	import '../app.postcss';
	import '../app.scss';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="{base}/icons/Icon.svg" />
	<meta
		name="description"
		content="Vipyr Security, a volunteer based team centered around identifying and reporting malicious packages off of
	the Python Package Index "
	/>
	<meta
		name="og:description"
		property="og:description"
		content="Vipyr Security, a volunteer based team centered around identifying and reporting malicious packages off of
	the Python Package Index"
	/>
	<meta
		name="twitter:description"
		content="Vipyr Security, a volunteer based team centered around identifying and reporting malicious packages off of
	the Python Package Index"
	/>
</svelte:head>

<Nav />

<slot />

<Footer />
