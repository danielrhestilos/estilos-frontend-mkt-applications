/**
 * The function searchData takes an order object and an acronym string, constructs a search URL using
 * the order's client email and the acronym, and fetches data from the API using the constructed URL.
 * @param order - The `order` parameter is an object that contains the client profile data.
 * Specifically, it has a property called `clientProfileData` which is an object itself. Inside the
 * `clientProfileData` object, there is a property called `email` which represents the email of the
 * client.
 * @param {string} acronym - The `acronym` parameter is a string that represents the acronym of a data
 * entity. It is used to construct the search URL for fetching data from the API.
 * @returns a promise that resolves to the JSON response from the fetch request.
 */
export function searchData(order: { clientProfileData: { email: any; }; }, acronym: string) {
  const searchUrl = `/api/dataentities/${acronym}/search?email=${order.clientProfileData.email}&_fields=id,email`;

  return fetch(searchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`Error fetching data: ${error}`);
    });
}

/**
 * The function `updateData` takes an array of data, an order object, and an acronym, and updates each
 * element in the array by sending a PATCH request to an API endpoint.
 * @param {any[]} dataArray - An array of data objects that need to be updated.
 * @param order - The `order` parameter is an object that contains the `creationDate` property. This
 * property represents the date of the order.
 * @param {string} acronym - The `acronym` parameter is a string that represents the acronym of the
 * data entity. It is used to construct the URL for updating the data.
 * @returns The function `updateData` returns a Promise that resolves to an array of responses from the
 * `fetch` requests made in the `updatePromises` array.
 */
export function updateData(dataArray: any[], order: { creationDate: any; }, acronym:string) {

  const updatePromises = dataArray.map(element => {

    const updateVariables = {
      id: element.id,
      dateTerms: order.creationDate,
      termsConditions: true
    };

    const updateUrl = `/api/dataentities/${acronym}/documents`;
    return fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify(updateVariables)
    });
  });

  return Promise.all(updatePromises)
    .catch(error => {
      throw new Error(`Error updating data: ${error}`);
    });
}
