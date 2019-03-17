import store from '../store'

// TODO: Use @types
declare var FB: any

(window as any).fbAsyncInit = () => {
  FB.init({
    // TODO: Export to env file.
    appId: '1203233686519426',
    cookie: true,
    xfbml: true,
    version: 'v3.2',
  })

  FB.getLoginStatus(commitUserStatus)
}

function commitUserStatus ({ authResponse }: any) : void {
  /**
   * {
   *  accessToken: String,
   *  userID: String,
   *  ...
   * }
   */
  console.log(authResponse)
  if (authResponse === null) {
    return // Commit that user is not logged in.
  }

  const { accessToken, userID }: any = authResponse

  // Commit that user is logged in.
  // Send accessToken and userID to a lambda:
  // POST /promoters
  // body: JSON.stringify({ token, id })
}
