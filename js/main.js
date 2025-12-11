

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);
// Buy Me a Coffee widget injector (discreet).
// Adds the official widget (muted color) and a small footer link.
// Configure by setting <meta name="buymeacoffee" content="your-slug" /> in <head>.
(function() {
	try {
		var meta = document.querySelector('meta[name="buymeacoffee"]');
		var slug = meta && meta.getAttribute('content');
		if (!slug || slug === 'your-bmc-id') return;

		// inject muted widget script
		var s = document.createElement('script');
		s.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
		s.setAttribute('data-name', 'BMC-Widget');
		s.setAttribute('data-id', slug);
		s.setAttribute('data-description', 'Small tip to support this site');
		s.setAttribute('data-message', 'Thanks for your support!');
		// use subtle color and tighter margins for a discreet appearance
		s.setAttribute('data-color', '#6b6b6b');
		s.setAttribute('data-position', 'right');
		s.setAttribute('data-x_margin', '12');
		s.setAttribute('data-y_margin', '12');
		document.body.appendChild(s);

		// Add a visible floating fallback button so the link is obvious even
		// if the external widget script is blocked or doesn't load.
		var floatBtn = document.createElement('a');
		floatBtn.className = 'bmc-floating';
		floatBtn.href = 'https://www.buymeacoffee.com/' + encodeURIComponent(slug);
		floatBtn.target = '_blank';
		floatBtn.rel = 'noopener noreferrer';
		floatBtn.title = 'Buy me a coffee';
		// Use a single coffee emoji for the floating button (icon-only)
		floatBtn.innerHTML = '<span aria-hidden="true">\u2615</span>';
		floatBtn.setAttribute('aria-label', 'Buy me a coffee (opens in new tab)');
		floatBtn.setAttribute('role', 'button');
		// Inline style for guaranteed visibility (compact circular emoji)
		floatBtn.style.cssText = 'position:fixed; right:16px; bottom:16px; z-index:9999; background:#f7c600; color:#111; width:64px; height:64px; display:flex; align-items:center; justify-content:center; border-radius:50%; text-decoration:none; box-shadow:0 10px 28px rgba(0,0,0,0.22); font-size:36px; padding:0;';

		document.body.appendChild(floatBtn);

		// Add a small, unobtrusive footer link as a fallback
		var footer = document.getElementById('footer');
		if (footer) {
			// minimal CSS for the discreet link
			var style = document.createElement('style');
			style.textContent = '\n.bmc-discreet{color:#6b6b6b; font-size:0.9rem; margin-left:8px; text-decoration:none;border-bottom:1px dashed transparent;}\n.bmc-discreet:hover{color:#444; border-bottom-color:#444;}\n';
			document.head.appendChild(style);

			var link = document.createElement('a');
			link.className = 'bmc-discreet';
			link.href = 'https://www.buymeacoffee.com/' + encodeURIComponent(slug);
			link.target = '_blank';
			link.rel = 'noopener noreferrer';
			link.textContent = 'Support (Buy Me a Coffee)';
			link.title = 'Buy me a coffee';
			link.setAttribute('aria-label', 'Buy me a coffee (opens in new tab)');
			link.setAttribute('role', 'link');

			// Insert into existing footer copyright list if present, otherwise append to footer
			var copyright = footer.querySelector('.copyright');
			if (copyright) {
				var li = document.createElement('li');
				li.appendChild(link);
				copyright.appendChild(li);
			} else {
				var p = document.createElement('p');
				p.appendChild(link);
				footer.appendChild(p);
			}
		}
	} catch (e) {
		// Fail silently; avoid breaking the site
		console.warn('BMC injector error', e);
	}
})();
