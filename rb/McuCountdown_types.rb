# frozen_string_literal: true

# Typed models for the McuCountdown SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Api entity data model.
#
# @!attribute [rw] days_until
#   @return [Integer]
#
# @!attribute [rw] following_production
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Api = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# Request payload for Api#load.
#
# @!attribute [rw] days_until
#   @return [Integer, nil]
#
# @!attribute [rw] following_production
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ApiLoadMatch = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# Batman entity data model.
#
# @!attribute [rw] days_until
#   @return [Integer]
#
# @!attribute [rw] following_production
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Batman = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# Request payload for Batman#load.
#
# @!attribute [rw] days_until
#   @return [Integer, nil]
#
# @!attribute [rw] following_production
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
BatmanLoadMatch = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# Dcn entity data model.
#
# @!attribute [rw] days_until
#   @return [Integer]
#
# @!attribute [rw] following_production
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
Dcn = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# Request payload for Dcn#load.
#
# @!attribute [rw] days_until
#   @return [Integer, nil]
#
# @!attribute [rw] following_production
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
DcnLoadMatch = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# StarWar entity data model.
#
# @!attribute [rw] days_until
#   @return [Integer]
#
# @!attribute [rw] following_production
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
StarWar = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

# Request payload for StarWar#load.
#
# @!attribute [rw] days_until
#   @return [Integer, nil]
#
# @!attribute [rw] following_production
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] overview
#   @return [String, nil]
#
# @!attribute [rw] poster_url
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
StarWarLoadMatch = Struct.new(
  :days_until,
  :following_production,
  :id,
  :overview,
  :poster_url,
  :release_date,
  :title,
  :type,
  keyword_init: true
)

