// /functions/hello-world.ts
exports.handler = async function (): Promise<any> {
  return {
    statusCode: 200,
    body: 'Hello world!',
  };
};
