#!/usr/bin/env node
import 'reflect-metadata';
import sourcemap from 'source-map-support';

sourcemap.install();

import roll from './roll';

process.on('uncaughtException', err => {
  console.error('💀  UncaughtException', err);
});

process.on('unhandledRejection', err => {
  console.error('💀  UnhandledRejection', err);
});

process.on('SIGINT', () => {
  console.error('SIGINT recieved, kill the app');
  process.exit();
});

const run = (): void => {
  try {
    roll();
  } catch (err) {
    console.error('💀 Roll not supported', err);
    process.exit(-1);
  }
};

run();
