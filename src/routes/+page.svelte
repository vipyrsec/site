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
				A volunteer team focused on identifying and analyzing malicious packages in
				the open source ecosystem.
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
				Of course! We're an all-volunteer team engineering solutions in order to identify malicious
				packages in the open source ecosystem. What does that mean, exactly? Well, we scan
				packages off of package repositories using <a href="https://virustotal.github.io/yara/"><code>YARA</code></a
				>, a signature detection tool primarily aimed towards identifying and classifying types of
				malware, flag packages that are deemed to be malicious, and analyze the contents for accuracy and IOC accrual.
				<br />
				<br />
				Our goal is to create a safer open-source ecosystem.
			</p>
		</div>
		<div class="stats shadow-lg bg-base-200">
			<div class="stat p-10">
				<div class="stat-title">Packages Detected</div>
				<div class="stat-value">500+</div>
				<div class="stat-desc">Pretty cool, right?</div>
			</div>
		</div>
	</div>
</div>
