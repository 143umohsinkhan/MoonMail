import * as aws from 'aws-sdk';
import { debug } from '../../lib/logger';
import decrypt, { getUserContext } from '../../lib/auth-token-decryptor';
import { DeliverCampaignService } from '../../lib/services/deliver_campaign_service';
import { ApiErrors } from '../../lib/errors';

aws.config.update({region: process.env.SERVERLESS_REGION});
const sns = new aws.SNS();

export function respond(event, cb) {
  debug('= deliverCampaign.action', JSON.stringify(event));
  decrypt(event.authToken)
    .then(decoded => getUserContext(decoded.sub))
    .then(user => {
      debug('= deliverCampaign.action', 'Getting campaign', JSON.stringify(user));
      const userId = user.id;
      const userPlan = user.plan;
      const appendFooter = user.appendFooter;
      const campaignMetadata = {address: user.address};
      const deliverService = new DeliverCampaignService(sns, {campaign: event.campaign, campaignId: event.campaignId, campaignMetadata, userId, userPlan, appendFooter});
      deliverService.sendCampaign()
        .then(res => cb(null, res))
        .catch(err => cb(ApiErrors.response(err)));
    })
    .catch(err => cb(ApiErrors.response(err), null));
}
