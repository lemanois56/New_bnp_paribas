<template>
  <div>
    <overview />
  </div>
</template>
<script>
import overview from "./dashboard/overview.vue";
import { useRouter } from 'vue-router';
import auth from '@/middleware/auth';

export default {
  ssr: false, // Set SSR to false for this specific page
  setup() {
    definePageMeta({
      middleware: [auth],
    })
    // Redirect from the root path ("/") to "/dashboard"
    const router = useRouter();
    router.replace('/dashboard/overview');
  },
  components: {
    overview,
  },
};
</script>
