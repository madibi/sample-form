import { Role } from '../../entities/role.entity';
import { AccessTokenPayloadUserAgent } from './access-token-payload.-user-agent.class';

export interface AccessTokenPayload {
  userId: string;
  roles: Role[];
  claims: string | number[];
  userAgent: AccessTokenPayloadUserAgent;
  clientIp: string;
  appId: string;
    hasRole(role: Role): boolean {
        return this.roles.includes(role);
    }
}