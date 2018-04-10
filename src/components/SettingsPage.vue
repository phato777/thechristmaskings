<template>
    <div>
        <v-ons-page>
            <v-ons-toolbar class="home-toolbar">
                <div class="center">{{ msg }}</div>
            </v-ons-toolbar>

        </v-ons-page>
    </div>
</template>

<script>
export default {
    name: 'settings',
    data() {
        return {
            msg: 'Settings',
        }
    },
}
</script>
