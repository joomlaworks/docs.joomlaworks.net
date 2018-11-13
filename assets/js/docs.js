(function($) {
    // Configuration
    var outputContainer = '#content';
    var gaDomain = 'https://docs.joomlaworks.net';

    // Parse Markdown (showdown.js)
    var converter = new showdown.Converter();

    // ucfirst() for JS
    function ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Trigger a GA page view entry
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
    function updateBrowser(page) {
        window.history.pushState('', ' ', page);
        document.title = ucfirst(page.slice(-3));
        //triggerGA(gaDomain);
    }

    // Get page
    function getPage(page, container) {
        $.ajax({
            url: page,
            success: function(result) {
                var output = converter.makeHtml(result);
                $(container).html(output);
                parseUrls(container);
                updateBrowser('#/' + page.slice(0, page.length - 3));
            }
        });
    }

    // Parse all .md URLs
    function parseUrls(el) {
        $(el + ' a[href\$=".md"]').each(function() {
            var page = $(this).attr('href');
            $(this).on('click', function(e) {
                e.preventDefault();
                getPage(page, outputContainer);
            });
        });
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
            getPage(page, outputContainer);
        } else {
            var page = 'pages/index.md';
            getPage(page, outputContainer);
        }
    }

    // Bootstrap everything
    $(document).on('ready', function() {

        initialLoad();

        var popped = ('state' in window.history && window.history.state !== null),
            initialURL = window.location.href;

        $(window).bind('popstate', function(event) {
            var initialPop = !popped && window.location.href == initialURL
            popped = true;
            if (initialPop) return;
            if (popped) {
                initialLoad();
            }
        });
    });
})(jQuery);
