import React, { useEffect, useState } from 'react'
import { canUseDOM } from 'vtex.render-runtime'

/* The code defines a functional component called `RetailRocketForm`. Inside the component, there is a
variable `form` that is initially set to an empty string. If the `canUseDOM` condition is true
(meaning the code is running in a browser environment), the `form` variable is assigned the result
of `document.querySelector(".vtex-flex-layout-0-x-flexRowContent--home__form-newsletter form")`,
which selects a specific form element from the DOM. */
const RetailRocketForm = () => {
  const [dataForm, setDataForm]: any = useState('')

  let form: any = ''
  if (canUseDOM) {
    setTimeout(() => {
      form = document.querySelector(".vtex-flex-layout-0-x-flexRowContent--home__form-newsletter form");
      setDataForm(form)
    }, 1500);
  }

  const handleEventConnectif = () => {
    const ObjectData: any = {};

    Object.entries(form?.elements).forEach((element: any) => {
      let elementName = element[0];
      let elementValue = element[1].value;
      if (elementName.includes("#/properties")) {
        ObjectData[elementName.replace("#/properties/", "")] = elementValue;
      }
    });

    return ObjectData

  };

  /**
   * The function sends data to Retail Rocket by setting the email address in the Connectif event.
   * @param {any} jsonData - The `jsonData` parameter is an object that contains the data to be sent to
   * the `sendingDataToRetailRocket` function. It is expected to have a property called `emailAddress`
   * which represents the email address of the user.
   */
  const sendingDataToRetailRocket = (jsonData: any) => {
    let eventToConntectif = {
      email: jsonData.emailAddress,
    };

    setTimeout(() => {
      // @ts-ignore
      (window.rrApiOnReady = window.rrApiOnReady || []).push((() => {
        // @ts-ignore
        rrApi.setEmail("".concat(eventToConntectif.email))
      }
      ))
    }, 100);
  }

  useEffect(() => {
    if (dataForm !== '') {
      dataForm.addEventListener("submit", () => {

        const resultData = handleEventConnectif();
        if (Object.keys(resultData).length !== 0) {
          sendingDataToRetailRocket(resultData)
        }
      });
    }
  }, [dataForm])

  return <div></div>
}

export default RetailRocketForm
