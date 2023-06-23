<script>
	export let data;
</script>

<div class="flex flex-col min-h-screen">
	<div class="mx-auto">
		<h1 class="text-5xl font-bold">{data.metadata.title}</h1>
		<p>#BY: {data.metadata.author}</p>
		<p>#AT: {data.metadata.date}</p>
	</div>

	<div class="mx-auto mt-10">
		<svelte:component this={data.content} />
	</div>
</div>
