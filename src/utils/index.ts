import { createHash } from 'crypto';

/**
 * 生成 MD5 哈希
 * @param str 要加密的字符串
 * @returns 32位 MD5 哈希字符串
 */
export function md5(str: string): string {
  return createHash('md5').update(str).digest('hex');
}
