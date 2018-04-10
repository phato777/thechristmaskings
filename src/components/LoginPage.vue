<template>
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">LOGIN</div>
        </v-ons-toolbar>

        <div class="header">
            <v-ons-button @click='$router.push("/manage")'>LOGIN</v-ons-button>
        </div>
    </v-ons-page>
</template>

<script>
export default {
    name: 'login',
}
</script>

<style scoped>
.header{
    padding: 25px;
}
</style>
