import { dataset, projectId, useCdn, token, apiVersion } from '@/sanity/env';
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
  token: token,
};

const client = createClient(config);

export default client;
