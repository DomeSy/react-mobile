import { create } from 'dva-core'
import createLoading from 'dva-loading'
import { persistEnhancer } from 'dva-model-persist';
import storage from 'dva-model-persist/lib/storage/session';

let app
let store
let dispatch
let registered

function createApp(opt) {
  opt.onAction = []
  app = create(opt)
  app.use({
    extraEnhancers: [
      persistEnhancer({
          key: 'model',
          storage
      })
    ],
  })
  app.use(createLoading({}))

  // 注入model
  if (!registered) {
    opt.models.forEach((model) => app.model(model))
  }
  registered = true
  app.start()

  // 设置store
  store = app._store
  app.getStore = () => store
  app.use({
    onError(err) {
      console.log(err)
    },
  })

  // 设置dispatch
  dispatch = store.dispatch
  app.dispatch = dispatch

  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
