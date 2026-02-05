import Dashboard from './Components/Dashboard.vue';
import TopPages from './Components/TopPages.vue';
import TopBrowser from './Components/TopBrowser.vue';
import TopReferrers from './Components/TopReferrers.vue';
import VisitorOverview from './Components/VisitorOverview.vue';

Statamic.booting(() => {
    Statamic.$components.register('plausible-dashboard', Dashboard);
    Statamic.$components.register('plausible-top-pages', TopPages);
    Statamic.$components.register('plausible-top-browsers', TopBrowser);
    Statamic.$components.register('plausible-top-referrers', TopReferrers);
    Statamic.$components.register('plausible-visitor-overview', VisitorOverview);
});
