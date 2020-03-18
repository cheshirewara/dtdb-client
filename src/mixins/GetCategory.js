export default {
  data: ()=>({
    categories: [],
  }),
  methods: {
    getCategorysJson() {
      this.axios.get('https://catalog.d-picolleg.com/wp-json/wp/v2/categories')
        .then((response) => {
          // console.log(response.data)
          this.setCategories(response.data)
        })
        .catch((error) => { 
          console.error(error) 
        })
    },
    setCategories(categories) {
      categories.forEach(e => {
        let cat = {}
        cat.isRoot = e.parent == 0
        cat.name = e.name
        cat.id = e.id
        cat.slug = e.id
        cat.count= e.count
        this.categories.push(cat)
      })
    },
  },
  mounted() {
    this.getCategorysJson()
  },
}