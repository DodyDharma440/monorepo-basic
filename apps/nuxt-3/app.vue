<script setup lang="ts">
import { Button } from "@my-org/ui";
import { formatDate } from "@my-org/utils";
</script>

<template>
  <div>
    <Button>Hello</Button>
    <p>Current date: {{ formatDate(new Date()) }}</p>
  </div>
</template>
