import { NextRequest } from 'next/server'
import { hatchet } from '@/lib/workflow'

export async function GET(req: NextRequest) {
  await hatchet.event.push('vercel:user:create', {
    hello: 'world',
  })

  return new Response('ok', { status: 200 })
}