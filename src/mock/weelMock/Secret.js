const Secret = [
  {
    title: '',
    content: '前端加解密',
    method: 'content',
    type: 'blue'
  },
  {
    title: '适用场景',
    content: 'md5 RSA DES AES',
    method: 'content',
  },
  {
    title: '代码示例',
    content:  `
      import { Secret } from '@unilts';

      const md5 = Secret.md5('Domsey')
      //加密：5b60a82d8454836348cc7c5d7ec3cbc4

      const RSAEncrypt = Secret.RSAEncrypt('Domsey')
      const RSAdecrypt = Secret.RSAdecrypt('fH6G3zfkjb2RQhIF8kG8YMC10ifwj5A9Fw21u4IPMcd2APEBZHb6oYL4cSWl1nw25dOOtgSY3jYhC1H5JD0ErB2eODFS9qfsD7EpJqlgp9gAnN+9lNd7E7rHQOZo4Gi4+0x3aQ/PvN3hxKYizqgCi7ZNiQEWSLQAGvqiWzb0aOk=')

      const DESEncrypt = Secret.DESEncrypt('Domsey', 'Secret')
      const DESDecrypt = Secret.DESDecrypt('eda6d335d7ee41d4', 'Secret')
      // DES
      // 加密的第一个参数是数据
      // 第二个是加密的key

      const AESEncrypt = Secret.AESEncrypt('Domsey')
      const AESDecrypt = Secret.AESDecrypt('BBC78BF045AD7A44566217C2FE942836')
      // AES
      // 加密的第一个参数是数据
      // 第二个是加密的key（默认：十六位十六进制数作为密钥）
      // 第三个是偏移量iv （默认：十六位十六进制数作为密钥偏移量）
    `,
    method: 'edit',
    copy: true
  },
  {
    title: '',
    content: '加密的key需要具体项目来定！',
    method: 'content',
    type: 'red'
  }
]

export default Secret