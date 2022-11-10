import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "@app/App";

const container = document.getElementById("root")!;
const client = new QueryClient();

const root = createRoot(container);
root.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
