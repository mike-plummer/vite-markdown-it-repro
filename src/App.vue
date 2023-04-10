<script setup>
import { getMarkupFromMarkdown } from './markdown'

const markdown = getMarkupFromMarkdown()
</script>

<template>
  <div v-html="markdown" />
</template>
