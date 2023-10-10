import { makeWrapResolversPlugin } from 'graphile-utils'

import { createOrder, updateOrder } from 'graphql/collections/order/resolvers'
import { createPurchaseorder, updatePurchaseorder } from 'graphql/collections/purchaseorder/resolvers'

const wrapResolversPlugin = makeWrapResolversPlugin({
  Mutation: {
    createOrder: { resolve: createOrder },
    updateOrderById: { resolve: updateOrder },

    createPurchaseorder: { resolve: createPurchaseorder },
    updatePurchaseorderById: { resolve: updatePurchaseorder }
  }
})

export default wrapResolversPlugin
