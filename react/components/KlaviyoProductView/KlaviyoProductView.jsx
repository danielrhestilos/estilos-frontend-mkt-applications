import React, { useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { useFullSession } from 'vtex.session-client'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

function KlaviyoProductView() {
  const productContext = useProduct()
  const { data } = useFullSession()
  const { product } = productContext || {}
  const {orderForm} = useOrderForm() || {}
  const items = orderForm?.items || []

  useEffect(() => {
    !(function () {
      if (!window.klaviyo) {
        window._klOnsite = window._klOnsite || []
        try {
          window.klaviyo = new Proxy(
            {},
            {
              get: function (n, i) {
                return 'push' === i
                  ? function () {
                      var n
                      ;(n = window._klOnsite).push.apply(n, arguments)
                    }
                  : function () {
                      for (
                        var n = arguments.length, o = new Array(n), w = 0;
                        w < n;
                        w++
                      )
                        o[w] = arguments[w]
                      var t =
                          'function' == typeof o[o.length - 1]
                            ? o.pop()
                            : void 0,
                        e = new Promise(function (n) {
                          window._klOnsite.push(
                            [i].concat(o, [
                              function (i) {
                                t && t(i), n(i)
                              },
                            ])
                          )
                        })
                      return e
                    }
              },
            }
          )
        } catch (n) {
          ;(window.klaviyo = window.klaviyo || []),
            (window.klaviyo.push = function () {
              var n
              ;(n = window._klOnsite).push.apply(n, arguments)
            })
        }
      }
    })()
    // console.log('klaviyo objeto', klaviyo)
    // console.log('data session ',data );
    // console.log('product', product)
    // console.log('orderForm', orderForm)
    var _learnq = _learnq || []

    function myCallback() {
        // log
      klaviyo.track('Viewed Product', {
        "ProductName": product.productName,
        "ProductID": product.productId,
        "SKU": product.productReference,
        "Categories":product.Categories,
        "URL": product.link,
        "Brand": product.brand,
        "ImageURL": product?.items?.[0]?.images?.[0]?.imageUrl,
        "Price": product?.priceRange?.listPrice?.lowPrice ,
        "sellingPrice": product?.priceRange?.sellingPrice?.lowPrice ,
      })
    }

    klaviyo.identify(
      {
        email: 'dramirezh@estilos.com.pe',
        first_name: 'Thomas',
        last_name: 'Jefferson',
      },
      myCallback
    )

    _learnq.push(['track', 'Viewed Product', product])
  }, [product])




  useEffect(()=>{
    console.log('cambio en items-> ',items);
  },[items])
  return <div></div>
}

export default KlaviyoProductView
