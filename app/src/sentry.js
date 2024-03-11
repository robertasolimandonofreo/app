import * as Sentry from "@sentry/react";
const sentry = Sentry.init({
    dsn: "https://6c85990a224545984267be2bd55f3ae0@o4506890983505920.ingest.us.sentry.io/4506890984554496",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost:3000"],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });  
  
export default sentry;