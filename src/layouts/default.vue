<template>
    <div>
        <top-menu></top-menu>
        <slot />
    </div>
</template>

<script>
import TopMenu from '@/components/sections/menu/topMenu.vue';

export default {
  components: {
    TopMenu,
  },
};
</script>
