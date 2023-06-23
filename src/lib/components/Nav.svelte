<script>
	import { base } from '$app/paths';
</script>

<div class="navbar">
	<div class="navbar-start">
		<a href="{base}/" class="btn btn-ghost lg:flex">
			<img class="w-36" src="{base}/icons/Logo.svg" alt="Logo" />
		</a>
	</div>
	<div class="navbar-end hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="https://github.com/vipyrsec">GitHub</a></li>
			<li><a href="#">Contact</a></li>
			<li><a href="{base}/blog">Blog</a></li>
			<li>
				<details>
					<summary> Parent </summary>
					<ul class="p-2 bg-base-100">
						<li><a>Link 1</a></li>
						<li><a>Link 2</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
	<div class="navbar-end lg:hidden">
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="https://github.com/vipyrsec">GitHub</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="{base}/blog">Blog</a></li>
				<li>
					<details>
						<summary> Parent </summary>
						<ul class="p-2 bg-base-100">
							<li><a>Link 1</a></li>
							<li><a>Link 2</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	div {
		// position: absolute;
	}
</style>
