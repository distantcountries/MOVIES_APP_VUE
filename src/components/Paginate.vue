<template>
    <div id="app">
        <vue-ads-pagination
            :total-items="200"
            :max-visible-pages="5"
            :page="page"
            :loading="loading"
            @page-change="pageChange"
            @range-change="rangeChange"
        >
            <template slot-scope="props">
                <div class="vue-ads-pr-2 vue-ads-leading-loose">
                    Items {{ props.start }} tot {{ props.end }} van de {{ props.total }}
                </div>
            </template>
            <template
                slot="buttons"
                slot-scope="props"
            >
                <vue-ads-page-button
                    v-for="(button, key) in props.buttons"
                    :key="key"
                    v-bind="button"
                    @page-change="page = button.page"
                />
            </template>
        </vue-ads-pagination>
    </div>
</template>

<script>
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css';

import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination';

export default {
    name: 'App',
    
    components: {
        VueAdsPagination,
        VueAdsPageButton,
    },

    data () {
        return {
            loading: false,
            page: 5,
        };
    },

    methods: {
        pageChange (page) {
            this.page = page;
            console.log(page);
        },
        
        rangeChange (start, end) {
            console.log(start, end);
        },
    },
};
</script>