<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="og:title" property="og:title" content="Home" />
	<meta name="twitter:title" content="Home" />
</svelte:head>

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row">
		<div class="max-w-md">
			<h1 class="text-7xl font-extrabold pb-5">Hi, we're Vipyr Security</h1>
			<p>
				A volunteer based team centered around identifying and reporting malicious packages off of
				the Python Package Index
			</p>
		</div>
		<img src="{base}/assets/undraw_charts_re_5qe9(1).svg" alt="chart graphic" />
	</div>
</div>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content flex-col lg:flex-row bg-base-100 m-10 p-10">
		<div class="max-w-2xl">
			<h1 class="text-5xl font-bold pb-5">Tell me more ~</h1>
			<p>
				Of course! We're a volunteer based team engineering solutions in order to identify malicious
				packages off of the Python Package Index. What does that mean, exactly? Well, we scan
				packages off of PyPi using <a href="https://virustotal.github.io/yara/"><code>YARA</code></a
				>, a pattern matching tool primarily aimed towards identifying and classifying types of
				malware, flag packages that are deemed to be malicious, and after manual review, send the
				reports off to PyPi.
				<br />
				<br />
				Our goal is to create a safer open-source ecosystem, and as such, monetization isn't something
				we're seeking - the intent is for this to act as a service to the community, from members of
				the community.
			</p>
		</div>
		<div class="stats shadow-lg bg-base-200">
			<div class="stat p-10">
				<div class="stat-title">Packages Reported</div>
				<div class="stat-value">500+</div>
				<div class="stat-desc">Pretty cool, yeah?</div>
			</div>
		</div>
	</div>
</div>
