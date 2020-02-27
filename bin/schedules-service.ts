#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SchedulesServiceStack } from '../lib/schedules-service-stack';

const app = new cdk.App();
new SchedulesServiceStack(app, 'SchedulesServiceStack');
