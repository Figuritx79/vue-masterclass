// For the first argument need a unique name, second argument is a callback returns the state we want to share
export const usePageStore = defineStore('page-store', () => {
  const pageData = ref({
    title: '',
  })
  return {
    pageData,
  }
})
// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
