import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { cloudfrontDistributionId, identityPoolId, region } from './constants';

function getCloudfrontClient(token?: string): CloudFrontClient {
  return new CloudFrontClient({
    region,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region }, // Configure the underlying CognitoIdentityClient.
      identityPoolId,
      ...(token
        ? {
            logins: {
              [`cognito-idp.${region}.amazonaws.com/us-east-1_pA7PzQG2L`]: token,
            },
          }
        : {}),
    }),
  });
}

export function invalidateCache(token: string, paths: string[]): Promise<unknown> {
  const client = getCloudfrontClient(token);
  const command = new CreateInvalidationCommand({
    DistributionId: cloudfrontDistributionId,
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: paths.length, 
        Items: paths,
      }
    },
  });
  return client.send(command);
}
