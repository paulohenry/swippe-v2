export const environment = {
  production: false,
  cognito: {
    userPoolId: 'us-east-1_09MMARvKS',
    clientId: '2dfgrp1qgm5gtsbjps8j87k439',
    region: 'us-east-1',
  },
  mongodb: {
    url:
      process.env.MONGODB_URL ||
      'mongodb://root:root@mongo:27017/promotores?retryWrites=true&w=majority&authSource=admin',
  },
  jwks: {
    keys: [
      {
        alg: 'RS256',
        e: 'AQAB',
        kid: '1Dfi57LrH3zlKY0kb1YI1umssB14+kEdgbZAZcmixdI=',
        kty: 'RSA',
        n:
          'uWlhNhjaqmUZkJzIgjn-4bcnb6nPLDJ4Qa2BXTu4bOUUdo6nolsgHKxyV5X2plK0xW-pN4aCsD1VVn3UyO0MglmQT-O9dYGejogCtdDnw2jla6YE8jDjJ2d_n5z6tLuwHb23HOuAJYri3v-ucxrg4d4zT3Q6PQj1_IrMy7skZSDw6Z6EAN9SmdAFTzCwnzm2RV7jsMaKGnxgpQl-Wou1ek2ekt9LrtV62JGeROXCEddq9-n264b1g5UleggB1He1zlLcl_UCaLira8vWQUgb0ZdAwtb0BGAV9FXFeaDMyZfSs30840hhHXe9SdXZFGFrPdHc4lYp0zlnxRxt3ELuvw',
        use: 'sig',
      },
      {
        alg: 'RS256',
        e: 'AQAB',
        kid: 'A7ReOd/pkYmPBbYp9Gocxuc1VOC4F/3WgrLA/JUxV6o=',
        kty: 'RSA',
        n:
          '0xS7Hv_neKEwPugwsY15pPjq5Ok9A-WkVZBZ6xjRsV56J-R6R3IegU2iA7W4Sqe0mCE9D4kGaSDCklQU6sErlsZ4sel6IVH6M1tyD0ZzDgTxn87oU97kMa8gkJvsYkZ95hHa3RBcwCnWoG7WUYAT0TBy0n1YXNxouSD1CdlYSH8l7c_vc-e5SGnQuunFLslsaNmg_HRW6FD7ume9c0Y_8i__tB2tPIi7ib0ryP_DRi6JsezzQNjj8tKPFZ0X9n4JTpMLFYdqZgf1s5ucSfHWPAiTH8H60WDVOtNY3gxSyODZx4kgrlcA5ZBapD-o772K5409v59QCWpzPyK0bkNFzQ',
        use: 'sig',
      },
    ],
  },
  COGNITO_USERNAME: process.env.COGNITO_USERNAME || 'TESTE',
  COGNITO_PASSWORD: process.env.COGNITO_PASSWORD || 'TESTE',
};
