# MoonMail

[![Build Status](https://travis-ci.org/microapps/MoonMail.svg?branch=master)](https://travis-ci.org/microapps/MoonMail)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/microapps/MoonMail.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fmicroapps%2FMoonMail%2F)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/microapps/MoonMail/master/LICENSE)
[![Gitter](https://badges.gitter.im/microapps/MoonMail.svg)](https://gitter.im/microapps/MoonMail?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Send email marketing campaigns with [Amazon SES](https://moonmail.io/amazon-ses-email-marketing/). Let [Amazon Lambda](https://aws.amazon.com/lambda/) compose email by email and literaly scale it to infinite. 

With [MoonMail](https://moonmail.io/) you can: create & edit lists of recipients (email addresses) and store them within a [DynamoDB](https://aws.amazon.com/dynamodb/). Create & edit html email marketing campaigns, send them and track their opens and clicks.

**The biggest magic of MoonMail: SEND BILLIONS OF EMAILS WITH NO SERVERS!**

[See the wiki for detailed specs and infrastructure graphs.](https://github.com/microapps/MoonMail/wiki)


## Live Features

* [Create and store recipients in lists](https://github.com/microapps/MoonMail/wiki/Lists-&-recipients)
* [Compile and send email campaigns](https://github.com/microapps/MoonMail/wiki/Sender)
* [Parse (track) opened emails + clicked links within an email](https://github.com/microapps/MoonMail/wiki/Links)
* [Create, edit and delete campaigns](https://github.com/microapps/MoonMail/wiki/Campaigns)
* Schedule campaigns to be sent in the future
* Extend the recipient fields with extra values like: gender, country... [(Liquid powered)](https://shopify.github.io/liquid/)
* Update the recipient status with any of the following: Unsubscribed, Bounced, Complaint-Spam, Suppresion-list
* Create Automations
* Filter lists by Segments
* [React powered frontend / UI to send campaigns](https://microapps.github.io/MoonMail-UI/)
* Apply [liquid](https://shopify.github.io/liquid/) syntax within the campaigns
* [Public API to interact with the SAAS version](http://docs.moonmail.io)

## Free Perks

* [Free email verification and email list cleaning](https://moonmail.io/email-verification-email-list-cleaning/)

## Getting Started

You need to have installed the [Serverless Framework](https://github.com/serverless/serverless) (version **0.5.x** is required to run the [MoonMail API](http://microapps.github.io/MoonMail/)).

    npm -g install serverless@0.5.6

Install npm packages:

    npm install
    cd events/
    npm install
    cd ../api/
    npm install

Initialize the Serverless project:

    sls project init -c -n your-lower-case-project-name
    
Add variables to `s-variables-<stage>-<region>`:

    {
        ...,
        "apiHost": "yourendpointhost.com"
    }

Create all the needed resources in your AWS account:

    sls resources deploy

Deploy all the Lambda functions:

    sls function deploy
    
Deploy MoonMail events:

    sls event deploy

Create the API Gateway endpoints:

    sls endpoint deploy
    
## Live demo
If you have set up everything correctly you'll be able to send an email campaign using our [demo ui](https://microapps.github.io/MoonMail-UI)
    
## Questions?
Please pose your questions in [StackOverflow by tagging them with: moonmail](http://stackoverflow.com/questions/tagged/moonmail?sort=votes&pageSize=50). 

## Contributing Guidelines
Contributions are always welcome! If you'd like to collaborate with us, take into account that:

* We use [ES2015](https://babeljs.io/docs/learn-es2015/) and love OOP.
* We test with [mocha](https://github.com/mochajs/mocha) + [chai](https://github.com/chaijs/chai) + [sinon](https://github.com/sinonjs/sinon).

Feel free to <a href="mailto:hi@microapps.com">contact us</a> if you have any question


## License

[MoonMail](https://moonmail.io/) is available under the MIT license. See the LICENSE file for more info.

## Professional Help

If you need support getting MoonMail into production in your AWS account, contact the [Email Marketing and Serverless Experts](https://moonmail.io/email-marketing-experts):

- <a href="mailto:ryan@serverlesscode.com">ServerlessCode</a>
- <a href="http://www.apiwise.nl">Apiwise</a>
- <a href="http://www.microapps.com">microapps</a>
- <a href="https://sc5.io">SC5</a>
- <a href="mailto:sam@acloud.guru">A Cloud Guru - AWS training & serverless experts</a> (<a href="https://acloud.guru">Visit Web Site</a>)
- <a href="mailto:hello@goltfisch.de">Just Serverless</a>

[Promote your Serverless services by creating a MoonMail account](https://app.moonmail.io/profile/experts)

MoonMail [Email Marketing Software](https://moonmail.io/) done the right way
