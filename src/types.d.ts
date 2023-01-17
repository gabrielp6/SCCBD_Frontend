interface PublicKey {
  e: string
  n: string
}
interface RsaRequest {
  message: string
}
interface RsaResponse {
  message: string
}
interface EncryptVerifyRequest extends RsaRequest {
  pubKey: PublicKey
}