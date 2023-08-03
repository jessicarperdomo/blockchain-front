export default {
  region: "us-east-2",
  userPoolId: "us-east-2_uwxTl6twp",
  userPoolWebClientId: "7st46h5uebfb9coljdknhpi7km",
  oauth: {
    domain: "blockchaintest.auth.us-east-2.amazoncognito.com",
    redirectSignIn: "http://localhost:4040/",
    redirectSignOut: "http://localhost:4040/",
    scope: ["email", "openid"],
    responseType: "code",
  },
  federationTarget: "GOOGLE",
};
