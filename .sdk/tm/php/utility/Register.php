<?php
declare(strict_types=1);

// McuCountdown SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

McuCountdownUtility::setRegistrar(function (McuCountdownUtility $u): void {
    $u->clean = [McuCountdownClean::class, 'call'];
    $u->done = [McuCountdownDone::class, 'call'];
    $u->make_error = [McuCountdownMakeError::class, 'call'];
    $u->feature_add = [McuCountdownFeatureAdd::class, 'call'];
    $u->feature_hook = [McuCountdownFeatureHook::class, 'call'];
    $u->feature_init = [McuCountdownFeatureInit::class, 'call'];
    $u->fetcher = [McuCountdownFetcher::class, 'call'];
    $u->make_fetch_def = [McuCountdownMakeFetchDef::class, 'call'];
    $u->make_context = [McuCountdownMakeContext::class, 'call'];
    $u->make_options = [McuCountdownMakeOptions::class, 'call'];
    $u->make_request = [McuCountdownMakeRequest::class, 'call'];
    $u->make_response = [McuCountdownMakeResponse::class, 'call'];
    $u->make_result = [McuCountdownMakeResult::class, 'call'];
    $u->make_point = [McuCountdownMakePoint::class, 'call'];
    $u->make_spec = [McuCountdownMakeSpec::class, 'call'];
    $u->make_url = [McuCountdownMakeUrl::class, 'call'];
    $u->param = [McuCountdownParam::class, 'call'];
    $u->prepare_auth = [McuCountdownPrepareAuth::class, 'call'];
    $u->prepare_body = [McuCountdownPrepareBody::class, 'call'];
    $u->prepare_headers = [McuCountdownPrepareHeaders::class, 'call'];
    $u->prepare_method = [McuCountdownPrepareMethod::class, 'call'];
    $u->prepare_params = [McuCountdownPrepareParams::class, 'call'];
    $u->prepare_path = [McuCountdownPreparePath::class, 'call'];
    $u->prepare_query = [McuCountdownPrepareQuery::class, 'call'];
    $u->result_basic = [McuCountdownResultBasic::class, 'call'];
    $u->result_body = [McuCountdownResultBody::class, 'call'];
    $u->result_headers = [McuCountdownResultHeaders::class, 'call'];
    $u->transform_request = [McuCountdownTransformRequest::class, 'call'];
    $u->transform_response = [McuCountdownTransformResponse::class, 'call'];
});
