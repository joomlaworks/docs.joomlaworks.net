/**
 * @version     1.0
 * @package     SimpleDocs.js
 * @author      JoomlaWorks https://www.joomlaworks.net
 * @copyright   Copyright (c) 2006 - 2018 JoomlaWorks Ltd. All rights reserved.
 * @license     https://www.joomlaworks.net/license
 */

(function($) {
    // Configuration
    var outputContainer = '#content';
    var navContainer = '#menu';
    var gaDomain = 'https://docs.joomlaworks.net';

    // Parse Markdown (showdown.js)
    var converter = new showdown.Converter();

    // ucfirst() for JS
    function ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Trigger a GA page view entry (you need to load GA first inside index.html)
    function triggerGA(domain) {
        if (typeof(ga) !== 'undefined') {
            ga('send', {
                hitType: 'pageview',
                title: title,
                page: url.replace(domain, '')
            });
        }
    }

    // Update browser history
    function updateBrowser(page, title, data) {
	    if(!title) title = ucfirst(page.slice(8, page.length));
        window.history.pushState('', title, page);
        document.title = title;
        //triggerGA(gaDomain);
    }

    // Get page
    function getPage(page, title, container, urlstate) {
        $.ajax({
            url: page,
            success: function(result) {
                var output = converter.makeHtml(result);
                $(container).html(output);
                parseUrls(container);
                if (urlstate) {
                    updateBrowser('#/' + page.slice(0, page.length - 3), title, output);
                }
            },
            error: function(req, status, error) {
                getPage('pages/404.md', '404 - Not found', container, true)
            }
        });
    }

    // Parse all .md URLs
    function parseUrls(el) {
        $(el + ' a[href\$=".md"]').each(function() {
	        var title = $(this).html();
            var page = $(this).attr('href');
            $(this).on('click', function(e) {
                e.preventDefault();
                getPage(page, title, outputContainer, true);
            });
        });
    }

    // Render the navigation menu
    function renderNav() {
        var page = 'pages/menu.md';
        getPage(page, false, navContainer, false);
    }

    // First load
    function initialLoad() {
        // Check for a hash (pseudo page URL)
        if (window.location.hash) {
            var match = window.location.hash.match(/^#\/?(.*)$/)[1];
        } else {
            var match = null;
        }
        if (match) {
            var page = match + ".md";
            getPage(page, false, outputContainer, true);
        } else {
            var page = 'pages/index.md';
            getPage(page, false, outputContainer, true);
        }
    }

    // Bootstrap everything
    $(document).on('ready', function() {

        renderNav();
        initialLoad();

        var popped = ('state' in window.history && window.history.state !== null),
            initialURL = window.location.href;

        $(window).on('popstate', function(e) {
            var initialPop = !popped && window.location.href == initialURL
            popped = true;
            if (initialPop) return;

            if (popped) {
                initialLoad();
            }
        });
    });
})(jQuery);
