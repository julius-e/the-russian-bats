import { Prisma } from '../prisma-client'
export const Query = {
  person (parent: any, args: any, ctx: any, info: any) {
    console.log(JSON.stringify(args, null, 2))
    return ctx.prisma.person(args)
  },
  persons (parent: any, args: any, ctx: any, info: any) {
    console.log(JSON.stringify(args, null, 2))
    return ctx.prisma.persons()
  },
  async scoring (parent: any, args: any, ctx: {client: Prisma}) {
    
  }
}
