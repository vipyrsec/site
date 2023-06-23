<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="hero min-h-screen">
	<div class="hero-content flex-col bg-base-200">
		{#if $page.status == 404}
			<img class="h-64" src="{base}/assets/undraw_by_the_road_re_vvs7.svg" alt="man lost" />
			<h1 class="text-4xl font-bold">{$page.status}</h1>
			<h1>You seem to be lost, maybe try heading back <a href="{base}/">Home</a></h1>
		{:else}
			<img class="h-64" src="{base}/assets/undraw_server_down_s-4-lk.svg" alt="man lost" />
			<h1>{$page.status}: {$page.error.message}</h1>
		{/if}
	</div>
</div>
