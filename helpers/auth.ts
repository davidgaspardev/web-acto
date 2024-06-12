export function loadBasicAuthHeaderValue(
  username: string,
  password: string
): string {
  const buffer = Buffer.from(`${username}:${password}`);

  return `Basic ${buffer.toString("base64")}`;
}
