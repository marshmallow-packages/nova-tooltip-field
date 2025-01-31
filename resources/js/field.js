import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'
import PreviewField from './components/PreviewField'

Nova.booting((app, store) => {
  app.component('index-nova-tooltip-field', IndexField)
  app.component('detail-nova-tooltip-field', DetailField)
  app.component('form-nova-tooltip-field', FormField)
  // app.component('preview-nova-tooltip-field', PreviewField)
})
