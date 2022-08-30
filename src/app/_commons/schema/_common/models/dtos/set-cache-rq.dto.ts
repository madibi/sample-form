import { IsNotEmpty, MinLength } from './../../../../packages/class-validator';

export interface SetCacheRQ {
  @MinLength(3)
  @IsNotEmpty()
  key: string;  
  @MinLength(3)
  value: string;  
  ttl?: number;  
}
