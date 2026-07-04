# Typed models for the McuCountdown SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ApiRequired(TypedDict):
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str


class Api(ApiRequired, total=False):
    overview: str
    poster_url: str


class ApiLoadMatch(TypedDict, total=False):
    days_until: int
    following_production: dict
    id: int
    overview: str
    poster_url: str
    release_date: str
    title: str
    type: str


class BatmanRequired(TypedDict):
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str


class Batman(BatmanRequired, total=False):
    overview: str
    poster_url: str


class BatmanLoadMatch(TypedDict, total=False):
    days_until: int
    following_production: dict
    id: int
    overview: str
    poster_url: str
    release_date: str
    title: str
    type: str


class DcnRequired(TypedDict):
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str


class Dcn(DcnRequired, total=False):
    overview: str
    poster_url: str


class DcnLoadMatch(TypedDict, total=False):
    days_until: int
    following_production: dict
    id: int
    overview: str
    poster_url: str
    release_date: str
    title: str
    type: str


class StarWarRequired(TypedDict):
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str


class StarWar(StarWarRequired, total=False):
    overview: str
    poster_url: str


class StarWarLoadMatch(TypedDict, total=False):
    days_until: int
    following_production: dict
    id: int
    overview: str
    poster_url: str
    release_date: str
    title: str
    type: str
