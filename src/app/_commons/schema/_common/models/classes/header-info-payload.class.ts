import { Role } from './../../../_auth/entities/role.entity';

export interface HeaderInfoPayload {
  userId: string;
  roles: Role[];
    hasRole(role: Role): boolean {
        return this.roles.includes(role);
    }
}