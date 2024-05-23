import React, { useEffect, useState } from "react";
import { SliderLayout } from "vtex.slider-layout";
import { useRuntime } from "vtex.render-runtime";
import { useOrderItems } from 'vtex.order-items/OrderItems';
import { CarouselProductsProps } from "../../typings/carousel-products";
import styles from "./CarouselProducts.css";
import getRelatedProducts from "../../graphql/query.product-related.graphql";
import useLocalStorage from "../../hooks/localStorageHook"
import SummaryVertical from "./SummaryVertical";
import useProduct from "vtex.product-context/useProduct";
import SummaryHorizontal from "./SummaryHorizontal";
import { useApolloClient } from "react-apollo";


const urlBestSellers =
  "/api/catalog_system/pub/products/search?O=OrderByTopSaleDESC";
const urlBestSellerCategory =
  "/api/catalog_system/pub/products/search?O=OrderByTopSaleDESC";

const CarouselProducts: React.FC<CarouselProductsProps> = ({
  id,
  title,
  maxItems,
  orientation,
  addToCartButton,
  itemPerPage,
}) => {
  const { addItem } = useOrderItems();
  const { route } = useRuntime();
  const productContext = useProduct();
  const product: any = productContext.product;
  const client = useApolloClient();
  const idCategory = route?.params?.id;
  const [listItems, setListItems] = useState([]);
  const [data] = useLocalStorage("last_visited_products_", []);
  useEffect(() => {
    if (id === "last-visited-products") {
      // console.log("last-visited-products:", data);
      setListItems(data);
    } else if (id === "best-sellers") {
      fetch(`${urlBestSellers}&_from=0&_to=${maxItems - 1}`)
        .then((response) => response.json())
        .then((data) =>
          setListItems(() => {
            return data.map((product: any) => {
              return {
                productId: product?.productId,
                id: product?.items[0]?.itemId,
                quantity: 1,
                seller: product?.items[0]?.sellers[0]?.sellerId,
                linkText: product?.linkText,
                imageUrl: product?.items[0]?.images[0]?.imageUrl,
                productName: product?.productName,
                brand: product?.brand,
                price: product?.items[0]?.sellers[0]?.commertialOffer?.Price,
                listPrice:
                  product?.items[0]?.sellers[0]?.commertialOffer?.ListPrice,
              };
            });
          })
        );
    } else if (id === "best-sellers-category") {
      fetch(
        `${urlBestSellerCategory}&_from=0&_to=${maxItems - 1
        }&fq=C:/*/${idCategory}/`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("idCategory", idCategory);

          console.log('sellers category->', data);
          setListItems(() => {
            return data.map((product: any) => {
              return {
                productId: product?.productId,
                id: product?.items[0]?.itemId,
                quantity: 1,
                seller: product?.items[0]?.sellers[0]?.sellerId,
                linkText: product?.linkText,
                imageUrl: product?.items[0]?.images[0]?.imageUrl,
                productName: product?.productName,
                brand: product?.brand,
                price: product?.items[0]?.sellers[0]?.commertialOffer?.Price,
                listPrice:
                  product?.items[0]?.sellers[0]?.commertialOffer?.ListPrice,
              };
            });
          });
        });
    } else if (id == "interest") {
      let facets = [
        {
          key: "brand",
          value: product?.brand,
        },
        {
          key: `category-${product?.categoryTree?.length || 3}`,
          value: product?.categoryId,
        },
      ];
      client
        .query({
          query: getRelatedProducts,
          variables: {
            facets,
          },
        })
        .then(
          ({
            data: {
              productSearch: { products },
            },
          }: any) => {
            return products;
          }
        )
        .then((products_collection) => {
          // console.log("products_collection: ", products_collection);
          client
            .query({
              query: getRelatedProducts,
              variables: {
                facets: [
                  {
                    key: `category-${product?.categoryTree?.length || 3}`,
                    value: product?.categoryId,
                  },
                ],
              },
            })
            .then(
              ({
                data: {
                  productSearch: { products },
                },
              }: any) => {

                products.forEach((element: any) => {
                  if (
                    !products_collection.find(
                      (item: any) => item.productId == element.productId
                    )
                  ) {
                    products_collection.push(element);
                    if (products_collection.length > 10) {
                      products_collection = products_collection.slice(0, 9)
                    }
                  }
                });
                if (products_collection.length > 1)
                  setListItems(() => {

                    return products_collection.map((product: any) => {
                      return {
                        productId: product?.productId,
                        id: product?.items[0]?.itemId,
                        quantity: 1,
                        seller: product?.items[0]?.sellers[0]?.sellerId,
                        linkText: product?.linkText,
                        imageUrl: product?.items[0]?.images[0]?.imageUrl,
                        productName: product?.productName,
                        brand: product?.brand,
                        price: product?.priceRange?.sellingPrice?.lowPrice,
                        listPrice: product?.priceRange?.listPrice?.lowPrice,
                      };
                    });
                  });
                else setListItems([])
              }
            );
        });
    }
  }, [product, idCategory]);
  console.log('id component ->', id);

  const handleAddToCart = (e: any, item: any) => {
    e.preventDefault();
    addItem([item]);
  }

  return (
    <>
      {listItems?.length > 0 && (
        <>
          <h2 className={`${styles.title} ${addToCartButton ? styles.smallTitle : ""}`}>{title}</h2>
          <div
            className={`${styles.container} ${orientation == "horizontal"
              ? "coolboxpe-custom-store-components-0-x-carouselHorizontal"
              : ""
              }`}
          >
            <SliderLayout
              infinite={true}
              // showNavigationArrows="desktopOnly"
              showPaginationDots={
                orientation === "vertical" ? "always" : "never"
              }
              usePagination={true}
              fullWidth={false}
              arrowSize={maxItems}
              itemsPerPage={itemPerPage}
              centerMode="disabled"
              centerModeSlidesGap
            >
              {listItems.map((item: any) => (
                <div className={`${styles.product} ${addToCartButton ? styles.minicartProduct : ""}`}>
                  {orientation === "vertical" ? (
                    <SummaryVertical item={item} id={id} addToCartButton={addToCartButton} />
                  ) : (
                    <SummaryHorizontal item={item} id={id} />
                  )}
                  {addToCartButton && <button id={`${item?.productId}`} className={`${styles.addToCartButton} cart-addProductTk`} onClick={(e: any) => handleAddToCart(e, item)}>agregar al carrito</button>}
                </div>
              ))}
            </SliderLayout>
          </div>
        </>
      )}
    </>
  );
};

CarouselProducts.defaultProps = {
  id: "best-sellers-category",
  title: "Los Más Populares",
  maxItems: 20,
  orientation: "vertical",
  addToCartButton: false,
  itemPerPage: {
    desktop: 5,
    tablet: 4,
    phone: 2,
  },
};

export default CarouselProducts;
