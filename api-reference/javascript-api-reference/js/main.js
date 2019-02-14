$(document).ready(function() {

	// shared dependencies from jwdeveloper
	/* @include ../../jw-design-ui-toolkit/components/site-secondary-header/site-secondary-header.js */

	// window element
	var $win = $(window);

	// window height
	var winHeight = $win.height();

	// if docs layout is single page
	var isSinglePage = $('.mkdocs-jwplayer-single-page').length;

	// check scroll top position of target element and set visibility of scroll-to-top element accordingly
	var checkScrollTopPosition = function(el) {
		var y = el.scrollTop();
		if (y > 400) {
			$scrollToTopEl.addClass('is-visible');
		} else {
			$scrollToTopEl.removeClass('is-visible');
		}
	}

	// scroll-to-top element
	var $scrollToTopEl = $('.scroll-to-top');

	// if single page docs
	if (isSinglePage) {

		// all second level doc nav elements
		$secondLevelEls = $('.second-level');

		// second level doc nav element click event handler
		// toggle visibility of collapsing menus in documentation
		// (i.e. JavaScript API reference)
		$secondLevelEls.click(function(ev) {
			var $this = $(this);
			if ($this.hasClass('is-open')) {
				ev.preventDefault();
			} else {
				$secondLevelEls.removeClass('is-open');
			}
			$this.toggleClass('is-open');
		});

		// global site footer element
		var $footer = $('.global-site-footer');

		// single page docs scrollable element
		var $siteBottomEl = $('.site-bottom');

		// aside nav element
		var $aside = $('.aside');

		// scroll-to-top click event handler
		$scrollToTopEl.click(function(ev) {
			ev.preventDefault();
			$siteBottomEl.scrollTop(0);
		});

		// site bottom element scroll event handler
		$siteBottomEl.scroll(function() {
			checkScrollTopPosition($siteBottomEl);
			var footerOffsetTop = $footer.offset().top;
			if (footerOffsetTop < winHeight) {
				$aside.css({
					bottom: winHeight - footerOffsetTop
				});
			} else {
				$aside.css({
					bottom: 0
				});
			}
		});

	} else {

		// scroll-to-top click event handler
		$scrollToTopEl.click(function(ev) {
			ev.preventDefault();
			$win.scrollTop(0);
		});

		// window element scroll event handler
		$win.scroll(function() {
			checkScrollTopPosition($win);
		});

	}

	(function prettyPrintCode() {
		var codeSnippets = document.querySelectorAll('pre');
		codeSnippets.forEach(function(snippet) {
			snippet.classList.add('prettyprint');
		})
	})();


});
