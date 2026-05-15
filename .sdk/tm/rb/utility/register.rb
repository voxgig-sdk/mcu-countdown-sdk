# McuCountdown SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

McuCountdownUtility.registrar = ->(u) {
  u.clean = McuCountdownUtilities::Clean
  u.done = McuCountdownUtilities::Done
  u.make_error = McuCountdownUtilities::MakeError
  u.feature_add = McuCountdownUtilities::FeatureAdd
  u.feature_hook = McuCountdownUtilities::FeatureHook
  u.feature_init = McuCountdownUtilities::FeatureInit
  u.fetcher = McuCountdownUtilities::Fetcher
  u.make_fetch_def = McuCountdownUtilities::MakeFetchDef
  u.make_context = McuCountdownUtilities::MakeContext
  u.make_options = McuCountdownUtilities::MakeOptions
  u.make_request = McuCountdownUtilities::MakeRequest
  u.make_response = McuCountdownUtilities::MakeResponse
  u.make_result = McuCountdownUtilities::MakeResult
  u.make_point = McuCountdownUtilities::MakePoint
  u.make_spec = McuCountdownUtilities::MakeSpec
  u.make_url = McuCountdownUtilities::MakeUrl
  u.param = McuCountdownUtilities::Param
  u.prepare_auth = McuCountdownUtilities::PrepareAuth
  u.prepare_body = McuCountdownUtilities::PrepareBody
  u.prepare_headers = McuCountdownUtilities::PrepareHeaders
  u.prepare_method = McuCountdownUtilities::PrepareMethod
  u.prepare_params = McuCountdownUtilities::PrepareParams
  u.prepare_path = McuCountdownUtilities::PreparePath
  u.prepare_query = McuCountdownUtilities::PrepareQuery
  u.result_basic = McuCountdownUtilities::ResultBasic
  u.result_body = McuCountdownUtilities::ResultBody
  u.result_headers = McuCountdownUtilities::ResultHeaders
  u.transform_request = McuCountdownUtilities::TransformRequest
  u.transform_response = McuCountdownUtilities::TransformResponse
}
