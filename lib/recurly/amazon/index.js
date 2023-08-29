import AmazonPay from './amazon-pay';
/**
 * Returns a GooglePay instance.
 *
 * @param  {Object} options
 * @return {AmazonPay}
 */

export function factory (options) {
  const recurly = this;

  return new AmazonPay(recurly, options);
}
