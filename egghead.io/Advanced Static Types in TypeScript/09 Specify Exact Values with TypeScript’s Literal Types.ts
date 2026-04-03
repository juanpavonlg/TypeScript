enum Protocols {
  HTTP,
  HTTPS,
  FTP
}

type HyperTextProtocol = Protocols.HTTP | Protocols.HTTPS;

let protocol: HyperTextProtocol;
protocol = Protocols.HTTP;
protocol = Protocols.HTTPS;
protocol = Protocols.FTP;