<script>
	export let data;
</script>

<div class="min-h-screen mt-10">
	<div class="hero">
		<div class="hero-content flex-col lg:flex-row w-screen bg-base-200">
			<div>
				<h1 class="text-5xl font-bold pb-5">The Vipyr Security Blog</h1>
				<p>Insightful blog posts by members of our community</p>
			</div>
			<div class="card shadow-md bg-base-100 p-5">
				<h2 class="card-title">Latest Post -----></h2>
				<div class="card bg-base-100">
					<div class="card-body">
						<a href="/blog/{data.posts[0].meta.title}" class="no-underline hover:text-inherit"
							><h2 class="card-title text-4xl mb-3">{data.posts[0].meta.title}</h2></a
						>
						<p class="font-bold">#BY: {data.posts[0].meta.author}</p>
						<p class="font-bold">#AT: {data.posts[0].meta.date}</p>
						<p><i>{data.posts[0].meta.description}</i></p>
					</div>
					<div class="card-actions justify-end">
						<a href="/blog/{data.posts[0].meta.title}" class="btn">Read</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ul class="flex flex-col p-10">
		<h1 class="m-auto text-5xl font-bold mb-10">The rest of em'</h1>
		<div class="grid lg:grid-cols-2 gap-4 max-w-7xl m-auto">
			{#each data.posts.slice(1) as post}
				<div class="card bg-base-100 bg-base-200 p-3 m-auto">
					<div class="card-body">
						<a href="/blog/{post.meta.title}" class="no-underline hover:text-inherit"
							><h2 class="card-title text-4xl mb-3">{post.meta.title}</h2></a
						>
						<p class="font-bold">#BY: {post.meta.author}</p>
						<p class="font-bold">#AT: {post.meta.date}</p>
						<p><i>{post.meta.description}</i></p>
					</div>
					<div class="card-actions justify-end">
						<a href="/blog/{post.meta.title}" class="btn btn-primary">Read</a>
					</div>
				</div>
			{/each}
		</div>
	</ul>
</div>
