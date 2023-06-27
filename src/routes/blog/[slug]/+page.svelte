<script>
	export let data;
</script>

<svelte:head>
	<link href="/themes/atom-solarized-dark.css" rel="stylesheet" />
</svelte:head>

<div class="flex flex-col min-h-screen p-5">
	<div class="mx-auto">
		<h1 class="text-5xl text-center">{data.metadata.title}</h1>
		<div class="grid grid-cols-2 pt-5 gap-4">
			<p class="border-2 border-neutral p-2">
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block"
				>
					<span class="relative text-white">#BY: </span>
				</span>
				{data.metadata.author}
			</p>
			<p class="border-2 border-neutral p-2">
				<span
					class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block"
				>
					<span class="relative text-white">#AT: </span>
				</span>
				{data.metadata.date}
			</p>
		</div>
	</div>

	<div class="mx-auto mt-10 prose">
		<svelte:component this={data.content} />
	</div>
</div>
