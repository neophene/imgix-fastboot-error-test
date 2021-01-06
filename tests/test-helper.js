import Application from 'imgix-fastboot-test/app';
import config from 'imgix-fastboot-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
