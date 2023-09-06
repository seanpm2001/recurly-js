import Emitter from 'component-emitter';
import { Frame } from '../frame';

class AmazonPay extends Emitter {
  constructor (recurly, options) {
    super();
    this.recurly = recurly;
    this.options = options;

    this.gatewayStrategy = undefined;
  }

  attach (element) {
    this.parent = element;
    const defaultEventName = 'amazon-pay';

    this.frame = this.recurly.Frame({
      path: '/amazon_pay/start',
      type: Frame.TYPES.FRAME,
      defaultEventName
    }).on('error', cause => console.log(cause))
      .on('done', results => {
        this.emit('token', results);
      });
  }
}

export default AmazonPay;
