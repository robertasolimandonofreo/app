import {
    ConsoleInstrumentation,
    ConsoleTransport,
    ErrorsInstrumentation,
    FetchTransport,
    initializeFaro,
    LogLevel,
    WebVitalsInstrumentation,
  } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

  const faro = initializeFaro({
    instrumentations: [
      new ErrorsInstrumentation(),
      new WebVitalsInstrumentation(),
      new ConsoleInstrumentation({
        disabledLevels: [LogLevel.TRACE, LogLevel.ERROR],
      }),
      new TracingInstrumentation({
        instrumentationOptions: {
          propagateTraceHeaderCorsUrls: [new RegExp('http://*.localhost:82/*'), 'http://*.localhost:82'],
        },
      }),
    ],
    transports: [
      new FetchTransport({
        url: 'http://localhost:81/collect',
        apiKey: 'FUCYvyt45gYyva2b',
      }),
      new ConsoleTransport(),
    ],
    app: {
      app: 'frontend',
      env: 'prod',
      version: '1.0',
    },
  });
  
  export default faro;
  