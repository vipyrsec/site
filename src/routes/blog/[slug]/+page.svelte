<script>
	export let data;

	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Vipyr Blog - {data.metadata.title}</title>
	<meta property="og:title" content={data.metadata.title} />
	<meta property="twitter:title" content={data.metadata.title} />
	<meta name="description" content={data.metadata.description} />
	<meta name="og:description" property="og:description" content={data.metadata.description} />
	<meta name="twitter:description" content={data.metadata.description} />
	<link href="{base}/themes/atom-solarized-dark.css" rel="stylesheet" />
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

<style lang="scss">
	:where(h2, h3, h4, h5, h6) {
		.icon-link {
			position: relative;

			&::before {
				content: '#';
				position: absolute;
				left: -1ch;
				top: 0;
				line-height: 1;
				opacity: 0;
				text-decoration: underline;
			}
		}

		&:hover .icon-link::before {
			opacity: 1;
		}
	}
</style>
