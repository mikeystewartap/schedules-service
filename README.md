# Schedules Service

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`SchedulesServiceStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Deploy from CDK to sam

 * `npm run watch`   watch for changes and compile
 or
 * `npm run build`   compile typescript to js
 or
 * `npm run test`    perform the jest unit tests
 or
 * `cdk synth SchedulesStack > template.yml` synthesize to cloud formation

 * `sam local start-api -t cdk.out/SchedulesStack.template.json` start the local api pointing to the cdk generated cloud formation
 or
 * `sam local invoke -t cdk.out/SchedulesStack.template.json` to invoke a lambda