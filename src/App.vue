

<template>
	<FontAwesomeIcon :icon="faVuejs" style="color: rgb(99, 230, 190);" />
	ad
	<FontAwesomeIcon :icon="faUser" style="color: rgb(99, 230, 190);" />
	a
	<i class="fa-solid fa-user" style="color: rgb(99, 230, 190);"></i>
			<div id="wrapper" class="divided">

				
					<section class="wrapper style1 align-center">
						<div class="inner">
							<h2>Portfolio</h2>
							<p>This is an <strong>Items</strong> element, and it's basically just a grid for organizing items of various types. You can customize its <span class="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-items">details</a>).</p>
							<div class="items style1 small onscroll-fade-in">
								<section>
									<span class="icon  major fa-gem"></span>
									<h3></h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-save"></span>
									<h3>Two</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-chart-bar"></span>
									<h3>Three</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-wifi"></span>
									<h3>Four</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-cog"></span>
									<h3>Five</h3>
								</section>
								<section>
									<span class="icon style2 major fa-paper-plane"></span>
									<h3>Six</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-desktop"></span>
									<h3>Seven</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-sync-alt"></span>
									<h3>Eight</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-hashtag"></span>
									<h3>Nine</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-bolt"></span>
									<h3>Ten</h3>
								</section>
								<section>
									<span class="icon style2 major fa-envelope"></span>
									<h3>Eleven</h3>
								</section>
								<section>
									<span class="icon solid style2 major fa-leaf"></span>
									<h3>Twelve</h3>
								</section>
							</div>
						</div>
					</section>

				<!-- Banner -->
					<!-- <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div class="content">
							<h1>Story</h1>
							<p class="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
							<p>This is a <strong>Banner</strong> element, and it's generally used as an introduction or opening statement. You can customize its <span class="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-banner">details</a>).</p>
							<ul class="actions stacked">
								<li><a href="#first" class="button large wide smooth-scroll-middle">Get Started</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="/images/banner.jpg" alt="" />
						</div>
					</section> -->

				<!-- Spotlight -->
					<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div class="content">
							<h2>Spotlight</h2>
							<p>This is a <strong>Spotlight</strong> element, and it's generally used &ndash; as its name implies &ndash; to spotlight a particular feature, subject, or pretty much whatever. You can customize its <span class="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
							<ul class="actions stacked">
								<li><a href="#" class="button">Learn More</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="/images/spotlight01.jpg" alt="" />
						</div>
					</section>

				<!-- Spotlight -->
					<section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
						<div class="content">
							<h2>Spotlight</h2>
							<p>This is also a <strong>Spotlight</strong> element, and it's here because this demo would look a bit empty with just one spotlight. Like all spotlights, you can customize its <span class="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
							<ul class="actions stacked">
								<li><a href="#" class="button">Learn More</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="/images/spotlight02.jpg" alt="" />
						</div>
					</section>

			</div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import $ from 'jquery'
import './assets/css/main.css'
import './assets/css/noscript.css'
import './assets/css/fontawesome-all.min.css'
// Font Awesome 관련 import
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// jQuery 전역 등록
window.$ = window.jQuery = $

const message = ref('Hello, World!')

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

onMounted(async () => {
  await import('bootstrap')
  await loadScript('/assets/vendor/jquery.min.js')
  await loadScript('/assets/vendor/jquery.scrollex.min.js')
  await loadScript('/assets/vendor/jquery.scrolly.min.js')
  await loadScript('/assets/vendor/browser.min.js')
  await loadScript('/assets/vendor/breakpoints.min.js')
  await loadScript('/assets/template/util.js')
  await loadScript('/assets/template/main.js')
  await loadScript('/assets/template/demo.js')
})



</script>



<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

</style>