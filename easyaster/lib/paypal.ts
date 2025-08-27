/*
 * Helper functions for PayPal server-side integration.
 * Uses @paypal/checkout-server-sdk to create and capture orders.
 */
import * as paypal from '@paypal/checkout-server-sdk';

// Configure PayPal environment using client id/secret from env variables.
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID || '',
  process.env.PAYPAL_CLIENT_SECRET || ''
);

const client = new paypal.core.PayPalHttpClient(environment);

export async function createOrder(amount: string, currency = 'USD') {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: currency,
          value: amount,
        },
      },
    ],
  });
  const response = await client.execute(request);
  return response.result.id;
}

export async function captureOrder(orderId: string) {
  const request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});
  const response = await client.execute(request);
  return response.result;
}