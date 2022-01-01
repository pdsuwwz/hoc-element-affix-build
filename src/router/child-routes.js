
const importModule = import.meta.glob('../views/*.vue')

const childrenRoutes = [
  {
    path: '/',
    name: 'hoc-element-affix',
    component: importModule['../views/ExampleAffix.vue'],
    meta: {
      title: '@hoc-element/affix'
    }
  }
]

export default childrenRoutes
