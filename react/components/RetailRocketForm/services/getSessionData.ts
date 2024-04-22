export default async () => {
  try {
    const options = {
      headers: {'Content-Type': 'application/json', Accept: 'application/json'}
    }
    let res = await fetch('/api/sessions?items=*', options)
    res = await res.json()

    return res
  } catch (error) {
      console.log('error sessionData', error);
      return null;
  }
}
