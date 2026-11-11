
<script setup lang="ts">
import { TriangleAlert } from '@lucide/vue';

const router = useRouter();

const errorStore = useErrorStore()
const errors = ref(errorStore.activeError)
const message = ref('')
const customCode = ref(0)
const details = ref('')
const hint  = ref('')
const code = ref('')
const statusCode = ref(0)
if (errors.value && !('code' in errors.value)){
  message.value = errors.value.message
  customCode.value = errors.value.customCode || 0
}

if(errors.value && 'code' in errors.value){
  message.value = errors.value.message
  details.value = errors.value.details || ''
  hint.value = errors.value.hint || ''
  code.value = errors.value.code || ''
  statusCode.value = errors.value.statusCode ?? 0
}

router.afterEach(() => {
  errorStore.activeError = null
})

</script>
<template>
	<section class="error">
	    <div>
	      <TriangleAlert class="error__icon"/>
	      <h1 class="error__code">{{ customCode || code }}</h1>
	      <p class="error__msg" v-if="statusCode">Status Code: {{ statusCode }}</p>
	      <p class="error__msg">{{ message }}</p>
	      <p  v-if="hint">{{ hint }}</p>
	      <p  v-if="hint">{{ details }}</p>
	      <div class="error-footer">
	        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
	        <RouterLink to="/">
	          <Button class="max-w-36"> Back to homepage </Button>
	        </RouterLink>
	      </div>
	    </div>
	  </section>
</template>

<style scoped>
@reference "@/style.css";
.error {
  @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh];
}

.error__icon {
  @apply text-7xl text-destructive;
}

.error__code {
  @apply font-extrabold text-7xl text-secondary;
}

.error__msg {
  @apply text-3xl font-extrabold text-primary;
}

.error-footer {
  @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}

.error-footer__text {
  @apply text-lg text-muted-foreground;
}

p {
  @apply my-2;
}
</style>
