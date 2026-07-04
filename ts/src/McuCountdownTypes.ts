// Typed models for the McuCountdown SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Api {
  days_until: number
  following_production: Record<string, any>
  id: number
  overview?: string
  poster_url?: string
  release_date: string
  title: string
  type: string
}

export type ApiLoadMatch = Partial<Api>

export interface Batman {
  days_until: number
  following_production: Record<string, any>
  id: number
  overview?: string
  poster_url?: string
  release_date: string
  title: string
  type: string
}

export type BatmanLoadMatch = Partial<Batman>

export interface Dcn {
  days_until: number
  following_production: Record<string, any>
  id: number
  overview?: string
  poster_url?: string
  release_date: string
  title: string
  type: string
}

export type DcnLoadMatch = Partial<Dcn>

export interface StarWar {
  days_until: number
  following_production: Record<string, any>
  id: number
  overview?: string
  poster_url?: string
  release_date: string
  title: string
  type: string
}

export type StarWarLoadMatch = Partial<StarWar>

