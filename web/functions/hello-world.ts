// /functions/hello-world.ts
exports.handler = async function (): void {
  return {
    statusCode: 200,
    body: 'Hello world!',
  };
};
