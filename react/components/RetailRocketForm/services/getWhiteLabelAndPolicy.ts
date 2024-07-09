import getSessionData from './getSessionData'

export default async () => {
  try {
    const sessionData = localStorage.getItem('rr-session-data')

    if (sessionData) {
      return JSON.parse(sessionData)
    }

    let res: any = await getSessionData()
    let data = {
      whiteLabel: '1',
      tradePolicy: ''
    }

    if (res) {
      const { checkout, store } = res?.namespaces
      if (checkout?.regionId && checkout?.regionId.value !== 'U1cj') {
        data.whiteLabel = atob(checkout?.regionId.value).replace('SW#', '')
      }

      if (store) {
        data.tradePolicy = store.channel.value
      }
    }

    return data
  } catch (error) {
      // console.log('error searchProduct', error);
      return null;
  }
}
