export interface Tenant {
  tenantId: number,
  name: string,
  profession: string,
  description: string,
  phone: string,
  image: string,
  suite: number,
  serviceOne: string,
  serviceTwo: string,
  serviceThree: string
  /* TODO: Add createTimestamp & updateTimestamp */
}
