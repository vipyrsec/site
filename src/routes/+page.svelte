<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="og:title" property="og:title" content="Home" />
	<meta name="twitter:title" content="Home" />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row p-10">
		<div>
			<h1 class="text-7xl font-extrabold pb-5">Hi, we're Vipyr Security</h1>
			<p>
				A volunteer based team focused on identifying and analyzing malicious packages in the open
				source ecosystem.
			</p>
		</div>
		<img src="{base}/assets/undraw_charts_re_5qe9(1).svg" alt="chart graphic" />
	</div>
</div>

<div class="hero my-20">
	<div class="hero-content flex-col lg:flex-row text-base-100">
		<img src="{base}/icons/Icon.svg" alt="Logo" class="w-36" />
		<div class="max-w-2xl">
			<h1 class="text-5xl font-bold pb-5">Tell me more ~</h1>
			<p>
				We're an all-volunteer team engineering solutions in order to identify malicious packages in
				the open source ecosystem. What does that mean, exactly? Well, we scan packages off of
				package repositories using <a href="https://virustotal.github.io/yara/"><code>YARA</code></a
				>, a signature detection tool primarily aimed towards identifying and classifying types of
				malware, flagging packages that are deemed to be malicious, and analyzing the contents for
				accuracy and IOC accrual.
				<br />
				<br />
				Our goal is to create a safer open-source ecosystem.
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-screen">
	<div class="hero-content flex-col lg:flex-row text-base-100">
		<img src="{base}/icons/Icon.svg" alt="Logo" class="w-36" />
		<div class="max-w-2xl">
			<!-- <h1 class="text-5xl font-bold pb-5">Tell me more ~</h1> -->
			<p>
				We're an all-volunteer team engineering solutions in order to identify malicious packages in
				the open source ecosystem. What does that mean, exactly? Well, we scan packages off of
				package repositories using <a href="https://virustotal.github.io/yara/"><code>YARA</code></a
				>, a signature detection tool primarily aimed towards identifying and classifying types of
				malware, flagging packages that are deemed to be malicious, and analyzing the contents for
				accuracy and IOC accrual.
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
