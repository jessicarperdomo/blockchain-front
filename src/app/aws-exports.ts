export default {
    region: "us-east-2",
    userPoolId: "us-east-2_YCxsmE7NN",
    userPoolWebClientId: "371e3j6v5i6iqrh7igkrkgb6d2",
    oauth: {
        domain: "blockchain.auth.us-east-2.amazoncognito.com",
        redirectSignIn: "http://localhost:4040/profile",
        redirectSignOut: "http://localhost:4040/",
        scope: ["email", "openid"],
        responseType: "code",
    },
    federationTarget: "GOOGLE",
};