import { Config } from './src/types.js'

const config: Config = {
  kafka: {
    clientId: 'user-behavior-simulator',
    brokers: ['localhost:19092'],
    topic: 'snowplow-enriched-good',
  },
  logging: {
    level: 'info',
    timestamp: true,
  },
  simulation: {
    cycle: {
      duration: 60,
      warningInterval: 15,
    },
    longView: {
      pagePingInterval: 5,
      duration: 30,
    },
    frequentView: {
      minDuration: 3,
      maxDuration: 13,
    },
    betweenLongViewInterval: 10,
    betweenNormalViewInterval: 30,
  },
  mocks: {
    users: [
      { id: '1', name: 'sion@oso.com' },
      { id: '2', name: 'paulo@oso.com' },
      { id: '3', name: 'alex@snowplowanalytics.com' },
      { id: '4', name: 'trent@snowplowanalytics.com' },
      { id: '5', name: 'lucas@snowplowanalytics.com' },
    ],
    products: [
      {
        id: '1',
        name: 'SP Dunk Low Retro',
        price: 119.99,
        webpage_id: 'page_1',
      },
      {
        id: '2',
        name: 'SP Air Max Plus 3',
        price: 189.99,
        webpage_id: 'page_2',
      },
      {
        id: '3',
        name: 'Total Orange',
        price: 129.99,
        webpage_id: 'page_3',
      },
      {
        id: '4',
        name: 'SP Air Force 1 Shadow',
        price: 129.99,
        webpage_id: 'page_4',
      },
      {
        id: '5',
        name: 'SP Flex Runner 2',
        price: 42.99,
        webpage_id: 'page_5',
      },
    ],
  },
}

export default config
