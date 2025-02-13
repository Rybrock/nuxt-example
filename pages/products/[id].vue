<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id
const { apiKey } = useRuntimeConfig();

const { data: product } = await useFetch(uri)

if (!product.value) {
    throw createError({
        statusCode: 400,
        statusMessage: 'Product Not Found',
        fatal: true
    })
}
definePageMeta({
    layout: 'products'
})
</script>
<template>
    <div>

        <Head>
            <Title>Nuxt Example | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>
