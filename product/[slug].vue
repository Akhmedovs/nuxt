<template>
    <div>
        <pre>{{ pr }}</pre>
    </div>
</template>

<script setup>
const config = useRuntimeConfig().public;
const route = useRoute();

const { data: pr } = useAsyncData('product', () => $fetch(config.webUrl + '/product-manger/product/detail?key=' + route.params.slug))

</script>

<style lang="scss" scoped>

</style>