import { ZuploContext, ZuploRequest, environment } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption?: any;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
): Promise<ZuploRequest | Response> {
  
  // Check if user is authenticated
  if (!request.user) {
    return new Response(
      JSON.stringify({ 
        error: "Unauthorized", 
        message: "Valid API key required" 
      }),
      { 
        status: 401,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  // Add consumer ID header (useful for backend logging)
  if (request.user.sub) {
    request.headers.set("x-consumer-id", request.user.sub);
  }

  // Add gateway secret for backend verification
  if (environment.GATEWAY_SECRET) {
    request.headers.set("x-gateway-secret", environment.GATEWAY_SECRET);
  }

  // Return the modified request
  return request;
}