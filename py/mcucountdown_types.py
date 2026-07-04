# Typed models for the McuCountdown SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Api:
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str
    overview: Optional[str] = None
    poster_url: Optional[str] = None


@dataclass
class ApiLoadMatch:
    days_until: Optional[int] = None
    following_production: Optional[dict] = None
    id: Optional[int] = None
    overview: Optional[str] = None
    poster_url: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Batman:
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str
    overview: Optional[str] = None
    poster_url: Optional[str] = None


@dataclass
class BatmanLoadMatch:
    days_until: Optional[int] = None
    following_production: Optional[dict] = None
    id: Optional[int] = None
    overview: Optional[str] = None
    poster_url: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Dcn:
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str
    overview: Optional[str] = None
    poster_url: Optional[str] = None


@dataclass
class DcnLoadMatch:
    days_until: Optional[int] = None
    following_production: Optional[dict] = None
    id: Optional[int] = None
    overview: Optional[str] = None
    poster_url: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None


@dataclass
class StarWar:
    days_until: int
    following_production: dict
    id: int
    release_date: str
    title: str
    type: str
    overview: Optional[str] = None
    poster_url: Optional[str] = None


@dataclass
class StarWarLoadMatch:
    days_until: Optional[int] = None
    following_production: Optional[dict] = None
    id: Optional[int] = None
    overview: Optional[str] = None
    poster_url: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None
    type: Optional[str] = None

