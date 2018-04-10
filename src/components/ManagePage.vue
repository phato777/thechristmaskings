<template>
    <v-ons-tabbar>
        <router-view slot="pages"></router-view>
        <v-ons-tab v-for="tab in tabs" :key="tab.name"
            :label="tab.name"
            :active="$route.path === tab.path"
            @click.prevent="$router.push({ path: tab.path })"
        ></v-ons-tab>
    </v-ons-tabbar>
</template>

<script>
export default {
    name: 'manage',
    data() {
        return {
            tabs: [
                { name: 'Overview',  path: '/manage' },
                { name: 'Settings',  path: '/manage/settings' },
            ]
        }
    }
}
</script>