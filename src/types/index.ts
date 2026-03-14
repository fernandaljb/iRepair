export * from "./client";
export * from "./serviceOrder";
// ✅ Com barrel file — limpo
import { Client, ServiceOrder } from "../types";

// ❌ Sem barrel file — verboso
import { Client } from "../types/client";
import { ServiceOrder } from "../types/serviceOrder";
